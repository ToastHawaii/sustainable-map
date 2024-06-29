// Copyright (C) 2020 Markus Peloso
//
// This file is part of osm-app-component.
//
// osm-app-component is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// osm-app-component is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with osm-app-component.  If not, see <http://www.gnu.org/licenses/>.

import * as L from "leaflet";
import * as opening_hours from "opening_hours";
import { Solver } from "./coloriz/Solver";
import { Color, hexToRgb } from "./coloriz/Color";
import { setQueryParams, getQueryParams } from "./utilities/url";
import { Attribute } from "./Generator";
import { getJson } from "./utilities/jsonRequest";
import { get, set } from "./utilities/storage";
import { groupBy, delay, getRandomInt } from "./utilities/data";
import { toString } from "./utilities/string";
import "./DetailsImprove";
import {
  getHtmlElement,
  getHtmlElements,
  createElement,
} from "./utilities/html";
import { createOverPassLayer, shareLink } from "./createOverPassLayer";

import BigNumber from "bignumber.js";
import "leaflet/dist/leaflet.css";
import "leaflet-overpass-layer/dist/OverPassLayer.css";
import "./style.scss";
import "details-element-polyfill";

// Fix: https://github.com/Leaflet/Leaflet/issues/4968
import icon from "leaflet/dist/images/marker-icon.png";
import icon2x from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { TFunction } from "i18next";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon2x,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const layers: { [name: string]: L.Layer } = {};

export async function initMap<M>(
  filterOptions: {
    id: number;
    group: string;
    subgroup?: string;
    order?: number;
    value: string;
    icon: string;
    button?: string;
    query: string;
    color: string;
    edit: string[];
    tags: string[];
  }[],
  attributes: Attribute<M>[],
  map: L.Map,
  t: TFunction<"translation", undefined>,
  globalFilter?: (tags: any, group: any, value: any) => boolean,
  minZoom = 14,
  offers: string[] = []
) {
  getHtmlElement(".search").addEventListener("submit", (ev) => {
    ev.preventDefault();
    search();
    return false;
  });

  const shareButton = getHtmlElement(".share");
  shareButton.addEventListener("click", (e) => {
    e.preventDefault();

    const info = getQueryParams()["info"];
    const bbox = map.getBounds();
    shareLink(
      `${window.location.origin}${window.location.pathname}?${
        offers.length > 0 && !(filterOptions.length <= 1)
          ? `o=${offersToShort(offers, filterOptions)}&`
          : ``
      }b=${toString(bbox.getSouth(), 4)},${toString(
        bbox.getWest(),
        4
      )},${toString(bbox.getNorth(), 4)},${toString(bbox.getEast(), 4)}${
        info ? `&info=${info}` : ``
      }`,
      shareButton,
      t("linkCopied"),
      t("title"),
      t("description")
    );
  });

  type State = { lat: number; lng: number; zoom: number };

  const state = get<State>("position") || {
    lat: 47.37,
    lng: 8.54,
    zoom: minZoom,
  };

  map.setView(new L.LatLng(state.lat, state.lng), state.zoom);

  // placeholders for the L.marker and L.circle representing user's current position and accuracy
  let currentPosition: L.Layer | L.Marker<any>;
  let currentAccuracy: L.Layer | L.Circle<any>;

  map.on("moveend zoomend", () => {
    const center = map.getCenter();
    const state = { lat: center.lat, lng: center.lng, zoom: map.getZoom() };
    set<State>("position", state);
  });

  let timeoutToken: any;
  let popopopen = false;
  map
    .on("movestart zoomstart popupopen", () => {
      if (timeoutToken) clearTimeout(timeoutToken);
      getHtmlElement("html").classList.remove("help");
    })
    .on("moveend zoomend popupclose", () => {
      timeoutToken = setTimeout(() => {
        if (!popopopen) getHtmlElement("html").classList.add("help");
      }, 1500);
    });
  map
    .on("popupopen", () => {
      popopopen = true;
    })
    .on("popupclose", () => {
      popopopen = false;
    });

  function partAreaVisible() {
    const visibles = getHtmlElements(`.external-link`);
    let hasPrev = false;
    for (const e of visibles) {
      if (!e.classList.contains("part-area-visible")) {
        if (
          e.previousElementSibling?.className === "external-separator" &&
          hasPrev
        )
          (e.previousElementSibling as HTMLElement).style.display = "";

        hasPrev = true;
        continue;
      }

      const c = (e.getAttribute("part-area-visible") || "")
        .split(",")
        .map((n) => parseFloat(n));

      (e.previousElementSibling as HTMLElement).style.display = "none";

      if (e.nextElementSibling as HTMLElement)
        (e.nextElementSibling as HTMLElement).style.display = "none";

      if (
        map
          .getBounds()
          .intersects(
            L.latLngBounds(L.latLng(c[0], c[1]), L.latLng(c[2], c[3]))
          )
      ) {
        if (
          e.previousElementSibling?.className === "external-separator" &&
          hasPrev
        )
          (e.previousElementSibling as HTMLElement).style.display = "";

        e.classList.remove("part-area-hidden");
        hasPrev = true;
      } else {
        e.classList.add("part-area-hidden");
      }
    }
    const hiddens = getHtmlElements(`.part-area-hidden`);
    if (visibles.length === hiddens.length) {
      getHtmlElements(".external-label").forEach(
        (l) => (l.style.display = "none")
      );
    } else {
      getHtmlElements(".external-label").forEach((l) => (l.style.display = ""));
    }
  }

  map.on("moveend zoomend", partAreaVisible);

  map.on(
    "locationfound",
    (e: { accuracy: number; latlng: L.LatLngExpression }) => {
      // if position defined, then remove the existing position marker and accuracy circle from the map
      if (currentPosition) {
        map.removeLayer(currentPosition);
        map.removeLayer(currentAccuracy);
      }

      const radius = e.accuracy / 2;

      currentPosition = L.marker(e.latlng).addTo(map);

      currentAccuracy = L.circle(e.latlng, radius).addTo(map);

      map.locate({ watch: true, setView: false });
    }
  );

  function search(value?: string) {
    value =
      value ||
      (document.getElementById("osm-search") as HTMLInputElement).value;

    setQueryParams({
      offers: !(filterOptions.length <= 1) ? offers.toString() : "",
      location: value,
      info: getQueryParams()["info"],
    });

    getJson("https://nominatim.openstreetmap.org/search", {
      format: "json",
      q: value,
      limit: 1,
    }).then((r) => {
      const result = r[0];
      if (!result) return;
      map.flyToBounds([
        [result.boundingbox[0], result.boundingbox[2]],
        [result.boundingbox[1], result.boundingbox[3]],
      ]);
    });
  }

  // function hashchange(single: boolean) {
  //   const params = getQueryParams();

  //   if (!single) {
  //     let offersParams: string[] = [];

  //     if (params["offers"]) offersParams = params["offers"].split(",");
  //     else if (params["o"])
  //       offersParams = offersfromShort(params["o"], filterOptions);

  //     for (const o of offersParams)
  //       if (offers.indexOf(o) === -1)
  //         for (const f of filterOptions)
  //           if (f.group + "/" + f.value === o) {
  //             offers.push(f.group + "/" + f.value);
  //             init(
  //               f.group,
  //               f.value,
  //               f.icon,
  //               f.query,
  //               attributes,
  //               map,
  //               t,
  //               f.color,
  //               minZoom,
  //               single,
  //               globalFilter,
  //               offers
  //             );

  //             (
  //               getHtmlElement(
  //                 `#filters input[value='${f.group + "/" + f.value}']`
  //               ) as HTMLInputElement
  //             ).checked = true;

  //             // if (params["info"] === f.group + "/" + f.value)
  //             //  showInfoContainer(f);
  //           }
  //   } else {
  //     for (const f of filterOptions)
  //       init(
  //         f.group,
  //         f.value,
  //         f.icon,
  //         f.query,
  //         attributes,
  //         map,
  //         t,
  //         f.color,
  //         minZoom,
  //         single,
  //         globalFilter,
  //         offers
  //       );
  //   }

  //   if (params["location"]) search(params["location"]);
  //   else if (params["b"]) {
  //     const bounds = params["b"].split(",").map((b) => parseFloat(b));
  //     map.fitBounds([
  //       [bounds[0], bounds[1]],
  //       [bounds[2], bounds[3]],
  //     ]);
  //   }
  // }

  // window.addEventListener("hashchange", () => {
  //   hashchange(filterOptions.length <= 1);
  // });

  // setTimeout(() => {
  //   if (filterOptions.length > 1) offers = [];
  //   else offers = filterOptions.map((f) => `${f.group}/${f.value}`);
  //   hashchange(filterOptions.length <= 1);
  // }, 0);

  const params = getQueryParams();

  let offersParams: string[] = [];

  if (!(filterOptions.length <= 1) && params["offers"])
    offersParams = params["offers"].split(",");

  if (params["o"]) offersParams = offersfromShort(params["o"], filterOptions);

  for (const o of offersParams)
    if (offers.indexOf(o) === -1)
      for (const f of filterOptions)
        if (f.group + "/" + f.value === o) offers.push(f.group + "/" + f.value);

  if (params["location"]) {
    search(params["location"]);
  } else if (params["b"]) {
    const bounds = params["b"].split(",").map((b) => parseFloat(b));
    map.fitBounds([
      [bounds[0], bounds[1]],
      [bounds[2], bounds[3]],
    ]);
  }

  map.on("popupopen", (e) => {
    const marker = (e as L.PopupEvent & { popup: { _source: L.Marker } }).popup
      ._source;
    const latLng = marker.getLatLng();
    setQueryParams({
      offers: !(filterOptions.length <= 1) ? offers.toString() : "",
      location: `${latLng.lat},${latLng.lng}`,
      info: getQueryParams()["info"],
    });
  });

  let iconColors = "";
  for (const f of filterOptions) {
    if (f.color) {
      const rgb = hexToRgb(f.color);
      const color = new Color(rgb[0], rgb[1], rgb[2]);
      const solver = new Solver(color);
      const result = solver.solve();

      iconColors += `.${f.value}-icon{${result.filter.replace(
        /filter:/gi,
        "filter: brightness(0%)"
      )}}`;
    }
  }
  const style = createElement("style", iconColors);
  document.head.appendChild(style);

  setInterval(async () => {
    if (!document.getElementsByTagName("html")[0].classList.contains("help"))
      return;

    const markers: HTMLElement[] = [];

    if (!map) return;
    const mapBounds = map.getBounds();
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        if (mapBounds.contains(layer.getLatLng())) {
          markers.push((layer as L.Marker).getElement() as HTMLElement);
        }
      }
    });

    const marker = markers[getRandomInt(0, markers.length - 1)];

    if (!marker) return;

    marker.style.animation = "0.4s ease-in-out 0s forwards alternate pin-top";

    await delay(400);

    marker.style.animation = "";
  }, 2000);
}

export function overpassSubs(query: string) {
  return query
    .replace(
      /&part/g,
      `["access"!~"^(private|no|customers|customer|permit)$"]["fee"!="yes"]`
    )
    .replace(/&access/g, `["access"!~"^(private|no)$"]`)
    .replace(
      /&free/g,
      `[~"fee(:conditional){0,1}"~"no|donation|interval|free|none|(PH|SH|\((:{0,1}dusk|sun|dawn)[^)]*(:{0,1}-|\\+)[^)]*\)|(:{0,1}dusk|sun|dawn).*hours|(:{0,1}dusk|sun|dawn|\d{1,2}[.:]\d{2})\+|\d\s*-\s*(mo|tu|we|th|fr|sa|su)\\b|-\s*\d{1,2}[:.]\d{2}\s*\+{0,1}|[^0-9a-z .{0,1}]\s*-{0,1}\s*\d{0,2}:\d{2}\s*[^+]{0,1}|\d{1,2}:\d{2}\s*-{0,1}\s*\d{0,2}:\d{2}\s*\\+{0,1}|^(:{0,1}(:{0,1}[0-1][0-9]|2[0-4])(:{0,1}[1-5][0-9]|0[0-9])\s*-\s*){2}$)"]`
    );
}

export function parseOpeningHours(
  openingHours: string | undefined,
  localCode: string
) {
  if (!openingHours) return undefined;

  try {
    return new (opening_hours as any)(openingHours, null, {
      locale: localCode,
    });
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

function offersToShort(
  value: string[],
  filters: {
    id: number;
    group: string;
    value: string;
  }[]
) {
  const max = Math.max(...filters.map((f) => f.id));

  let result = "0";
  for (let i = 0; i < max; i++) {
    result += "0";
  }

  for (const o of value) {
    const pos =
      max - filters.filter((f) => o === f.group + "/" + f.value)[0].id;
    result = result.slice(0, pos) + "1" + result.slice(pos + 1, result.length);
  }

  return new BigNumber(result, 2).toString(36);
}

function offersfromShort(
  value: string,
  filters: {
    id: number;
    group: string;
    value: string;
  }[]
) {
  const v = new BigNumber(value, 36).toString(2);

  const offers: string[] = [];

  let id = v.length - 1;
  for (const o of v) {
    if (o === "1") {
      const filter = filters.filter((f) => f.id === id)[0];
      offers.push(filter.group + "/" + filter.value);
    }
    id--;
  }

  return offers;
}
