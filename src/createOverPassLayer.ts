import { utilQsString } from "./utilities/url";
import { Generator, Attribute } from "./Generator";
import { links } from "./links";
import { isImage } from "./utilities/image";
import { toTitle, toLevel, toOpenOrClose } from "./view";
import { getJson } from "./utilities/jsonRequest";
import { getHtmlElement, createElement } from "./utilities/html";
import { parseOpeningHours, overpassSubs, updateCount } from "./map";
import * as L from "leaflet";
import { attributeDescriptions } from "./attributeDescriptions";
import {
  extractName,
  extractType,
  extractOperator,
  extractImage,
  extractLocality,
  extractStreet
} from "./data";

export function createOverPassLayer<M>(
  value: string,
  icon: string,
  query: string,
  attributes: Attribute<M>[],
  local: any,
  color: string
) {
  return new (L as any).OverPassLayer({
    markerIcon: L.divIcon({
      className: "custom-div-icon",
      html: `<div style="background-color:${
        color || "#000000"
      };" class="marker-pin"></div><div class="marker-icon ${value}-icon" style="background-image:url('${icon}');"></div>`,

      iconSize: [36, 48],
      iconAnchor: [18, 48]
    }),
    minZoomIndicatorEnabled: true,
    minZoomIndicatorOptions: {
      position: "bottomleft",
      minZoomMessageNoLayer: local.minZoomMessageNoLayer,
      minZoomMessage: local.minZoomMessage
    },
    minZoom: 14,
    query: `(${overpassSubs(query)});out center;`,
    timeout: 30, // Seconds
    cacheEnabled: true,
    cacheTTL: 86400, // 24h
    onSuccess(data: { elements: any[] }) {
      for (let i = 0; i < data.elements.length; i++) {
        const e = data.elements[i];
        if (e.id in this._ids) continue;
        this._ids[e.id] = true;

        let pos: {
          lat: number;
          lng: number;
        };
        let marker;

        if (e.type === "node") {
          pos = L.latLng(e.lat, e.lon);
        } else {
          pos = L.latLng(e.center.lat, e.center.lon);
        }
        if (this.options.markerIcon) {
          marker = L.marker(pos, { icon: this.options.markerIcon });
        } else {
          marker = L.circle(pos, 20, {
            stroke: false,
            fillColor: "#E54041",
            fillOpacity: 0.9
          });
        }
        const model = {
          name: extractName(e.tags, local.code || "en") || e.tags["piste:name"],
          type: extractType(local, e.tags, value),
          operator: extractOperator(e.tags),
          address: {
            name: "",
            postcode: e.tags["addr:postcode"] || "",
            locality: e.tags["addr:city"] || "",
            street: e.tags["addr:street"] || "",
            houseNumber: e.tags["addr:housenumber"] || "",
            level: e.tags["level"] || "",
            latitude: pos.lat,
            longitude: pos.lng
          },
          opening:
            parseOpeningHours(e.tags.service_times, local.code || "en") ||
            parseOpeningHours(e.tags.opening_hours, local.code || "en"),
          conditionalFee:
            e.tags.fee &&
            (parseOpeningHours(e.tags.fee, local.code || "en") ||
              e.tags["fee:conditional"]),
          img: "",
          description: "",
          wikimediaDescription: "",
          wikipediaDescription: ""
        };
        model.img = model.img || extractImage(e.tags) || "";
        model.description =
          e.tags[`description:${local.code || "en"}`] || e.tags.description;
        const attributesGenerator = new Generator<M>(attributes);
        const linksGenerator = new Generator(links);
        const attributDescriptionGenerator = new Generator(
          attributeDescriptions
        );
        let isLoaded = false;
        const contentElement = createElement(
          "div",
          `<div id="hcard-Name" class="vcard">
          <a style="float:right;" href="https://www.openstreetmap.org/edit?${
            e.type
          }=${
            e.id
          }"><i class="fas fa-pencil-alt"></i></a><strong class="name" title="${toTitle(
            model
          )}">${toTitle(model)}</strong>
        <div class="adr">

        ${attributesGenerator.render(local, e.tags, value, {} as M)}

         <div class="street-address">${model.address.street} ${
            model.address.houseNumber
          } ${toLevel(parseFloat(model.address.level), local)}</div>
            <span class="postal-code">${model.address.postcode}</span>
         <span class="region">${model.address.locality}</span>
        </div>
        ${
          model.opening
            ? `<br><div>${toOpenOrClose(model.opening, local)}</div>`
            : ``
        }
        ${
          model.conditionalFee ? `<br><div>${local.conditionalFee}</div>` : ``
        } <br/>
        <div class="geo">
         <small>
         <a href="https://maps.apple.com/?${utilQsString({
           ll: `${model.address.latitude},${model.address.longitude}`,
           q: toTitle(model)
         })}">
           ${local.route}
         </a>
         </small>
        </div>
        <div class="img-container">
        ${
          model.img
            ? `
          <br />
          <img class="img" dynamic-src="${model.img}"/>`
            : ``
        }
        </div>
        <div class="description">
        ${
          model.description ||
          model.wikipediaDescription ||
          model.wikimediaDescription
            ? `
          ${!model.img ? `<br />` : ``}
          <small>
            ${
              model.description ||
              model.wikipediaDescription ||
              model.wikimediaDescription
            }
          </small>`
            : ``
        }
        </div>
        <div>
          ${
            !attributDescriptionGenerator.empty(e.tags, value, {}, local)
              ? `
          <br />
          <small>
            ${attributDescriptionGenerator.render(
              local,
              e.tags,
              value,
              {},
              `<br />`
            )}
          </small>`
              : ``
          }
        </div>
        <div class="contact">
          ${
            !linksGenerator.empty(e.tags, value, {}, local)
              ? `
          <br />
          ${linksGenerator.render(local, e.tags, value, {})}`
              : ``
          }
        </div>
        </div>`
        );
        const popup = L.popup({
          minWidth: 200,
          autoPanPaddingTopLeft: [10, 85],
          autoPanPaddingBottomRight: [10, 10]
        }).setContent(() => {
          if (!isLoaded) {
            isLoaded = true;
            const img = contentElement.querySelector(
              ".img"
            ) as HTMLImageElement;
            if (img) img.src = img.getAttribute("dynamic-src") || img.src;
            {
              // Enrich Address
              getJson("https://nominatim.openstreetmap.org/reverse", {
                format: "json",
                addressdetails: "1",
                namedetails: "1",
                lat: pos.lat,
                lon: pos.lng
              }).then(result => {
                model.address.name = extractName(
                  result.namedetails,
                  local.code || "en"
                );
                model.address.postcode =
                  model.address.postcode || result.address.postcode || "";
                model.address.locality =
                  model.address.locality ||
                  extractLocality(result.address) ||
                  "";
                if (!model.address.street) {
                  model.address.street = extractStreet(result, local) || "";
                  model.address.houseNumber =
                    model.address.houseNumber ||
                    result.address.house_number ||
                    "";
                }
                const name = getHtmlElement(".name", contentElement);
                name.innerHTML = toTitle(model);
                name.title = toTitle(model);
                getHtmlElement(
                  ".street-address",
                  contentElement
                ).innerHTML = `${model.address.street} ${
                  model.address.houseNumber
                } ${toLevel(parseFloat(model.address.level), local)}`;
                getHtmlElement(".postal-code", contentElement).innerHTML =
                  model.address.postcode;
                getHtmlElement(".region", contentElement).innerHTML =
                  model.address.locality;
                popup.update();
              });
            }
            {
              // Enrich Data
              const qid = e.tags.wikidata || e.tags["species:wikidata"];

              if (qid)
                getJson("https://www.wikidata.org/w/api.php", {
                  format: "json",
                  action: "wbgetentities",
                  formatversion: "2",
                  ids: qid,
                  props: "labels|descriptions|claims|sitelinks",
                  sitefilter: (local.code || "en") + "wiki",
                  languages: local.code || "en",
                  languagefallback: "0",
                  origin: "*"
                }).then(async r => {
                  if (r && r.error) return;
                  if (!r.entities[qid]) return;
                  const entity = r.entities[qid];
                  let i;
                  let description;
                  if (
                    entity.descriptions &&
                    Object.keys(entity.descriptions).length > 0
                  ) {
                    description =
                      entity.descriptions[Object.keys(entity.descriptions)[0]]
                        .value;
                  }
                  let label;
                  if (entity.labels && Object.keys(entity.labels).length > 0) {
                    label = entity.labels[Object.keys(entity.labels)[0]].value;
                  }
                  const result: {
                    title: string;
                    description: string;
                    imageURL?: string;
                    wiki?: {
                      title: string;
                      url: string;
                    };
                  } = {
                    title: label,
                    description: description
                  };
                  // add image
                  if (entity.claims) {
                    const imageroot =
                      "https://commons.wikimedia.org/w/index.php";
                    const props = ["P154", "P18"]; // logo image, image
                    let prop;
                    let image;
                    for (i = 0; i < props.length; i++) {
                      prop = entity.claims[props[i]];
                      if (prop && Object.keys(prop).length > 0) {
                        image =
                          prop[Object.keys(prop)[0]].mainsnak.datavalue.value;
                        if (image) {
                          result.imageURL = `${imageroot}?${utilQsString({
                            title: "Special:Redirect/file/" + image,
                            width: 300
                          })}`;
                        }
                        break;
                      }
                    }
                  }
                  if (entity.sitelinks) {
                    // check each, in order of preference
                    const w = (local.code || "en") + "wiki";
                    if (entity.sitelinks[w]) {
                      const title = entity.sitelinks[w].title;
                      result.wiki = {
                        title: title,
                        url: `https://${
                          local.code || "en"
                        }.wikipedia.org/wiki/${title.replace(/ /g, "_")}`
                      };
                      loadWikipediaSummary(title, local.code || "en").then(
                        summary => {
                          model.wikipediaDescription = summary;

                          getHtmlElement(
                            ".description",
                            contentElement
                          ).innerHTML =
                            model.description ||
                            model.wikipediaDescription ||
                            model.wikimediaDescription
                              ? `${!model.img ? `<br />` : ``}<small>${
                                  model.description ||
                                  model.wikipediaDescription ||
                                  model.wikimediaDescription
                                }</small>`
                              : ``;
                          popup.update();
                        }
                      );
                    }
                  }
                  model.name =
                    model.name ||
                    result.title ||
                    (result.wiki && result.wiki.title);
                  model.wikimediaDescription = result.description;
                  model.img = model.img || result.imageURL || "";
                  getHtmlElement(".name", contentElement).innerHTML = toTitle(
                    model
                  );
                  getHtmlElement(".name", contentElement).title = toTitle(
                    model
                  );
                  getHtmlElement(".description", contentElement).innerHTML =
                    model.description ||
                    model.wikipediaDescription ||
                    model.wikimediaDescription
                      ? `${!model.img ? `<br />` : ``}<small>${
                          model.description ||
                          model.wikipediaDescription ||
                          model.wikimediaDescription
                        }</small>`
                      : ``;
                  getHtmlElement(
                    ".img-container",
                    contentElement
                  ).innerHTML = model.img
                    ? `<br /><img class="img" src="${model.img}"/>`
                    : ``;
                  getHtmlElement(
                    ".contact",
                    contentElement
                  ).innerHTML = !linksGenerator.empty(
                    e.tags,
                    value,
                    {
                      website: result.wiki ? result.wiki.url : undefined
                    },
                    local
                  )
                    ? `
    <br />
    ${linksGenerator.render(local, e.tags, value, {
      website: result.wiki ? result.wiki.url : undefined
    })}`
                    : ``;

                  popup.update();
                  if (model.img) {
                    if (!(await isImage(model.img))) {
                      getHtmlElement(
                        ".img",
                        contentElement
                      ).outerHTML = `<a class="img" href="${model.img}" target="_blank"><i class="far fa-image fa-2x"></i></a>`;
                    }
                    popup.update();
                  }
                });

              if (e.tags.wikipedia)
                loadWikipediaSummary(e.tags.wikipedia, local.code || "en").then(
                  summary => {
                    model.wikipediaDescription = summary;

                    getHtmlElement(".description", contentElement).innerHTML =
                      model.description ||
                      model.wikipediaDescription ||
                      model.wikimediaDescription
                        ? `${!model.img ? `<br />` : ``}<small>${
                            model.description ||
                            model.wikipediaDescription ||
                            model.wikimediaDescription
                          }</small>`
                        : ``;
                    popup.update();
                  }
                );
            }
            if (model.img) {
              isImage(model.img).then((loaded: boolean) => {
                if (!loaded)
                  getHtmlElement(
                    ".img",
                    contentElement
                  ).outerHTML = `<a class="img" href="${model.img}" target="_blank"><i class="far fa-image fa-2x"></i></a>`;
                popup.update();
              });
            }
          }
          return contentElement;
        });
        marker.bindPopup(popup);
        this._markers.addLayer(marker);
      }
      updateCount(local);
    }
  });
}

async function loadWikipediaSummary(siteTitle: string, language: string) {
  const splittedSiteTitle = siteTitle.split(":");

  if (splittedSiteTitle.length >= 2) {
    siteTitle = splittedSiteTitle[1];
    language = splittedSiteTitle[0];
  }

  const cleanSiteTitle = siteTitle.replace(/ /g, "_");

  const data = await getJson(`https://${language}.wikipedia.org/w/api.php`, {
    format: "json",
    action: "query",
    prop: "extracts",
    exintro: "",
    explaintext: "",
    redirects: "1",
    titles: cleanSiteTitle,
    origin: "*"
  });
  const pages = data.query.pages;
  const keys = Object.keys(pages);
  if (keys.length > 0) {
    const firstPage = pages[keys[0]];
    return firstPage.extract;
  } else {
    throw new Error("No summary found");
  }
}
