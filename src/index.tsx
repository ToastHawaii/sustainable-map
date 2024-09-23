import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./osm-app-component/App";
import { Trans, useTranslation } from "react-i18next";
import { attributes } from "./client/attributes";
import externalResources from "./client/externalResources.json";
import { filters } from "./client/filters";

import "./client/initI18next";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function Logo() {
  const { t } = useTranslation();

  return (
    <>
      <img
        src="/icons/mstile-144x144.png"
        style={{ width: "22px", verticalAlign: "text-bottom" }}
      />{" "}
      {t("meta.titleShort")}
    </>
  );
}

function Intro() {
  const { t } = useTranslation();

  return (
    <>
      <h4>{t("intro.title")}</h4>
      <p>{t("intro.tagline")}</p>
      <p>{t("intro.description")}</p>
      <p>{t("intro.legend")}</p>
      <ul>
        <li>
          <i className="fas fa-universal-access"></i>{" "}
          <a href="https://wiki.openstreetmap.org/wiki/Key:access">
            {t("intro.accessible")}
          </a>
        </li>
        <li>
          <i className="fas fa-heart"></i>{" "}
          <a href="https://wiki.openstreetmap.org/wiki/Key:fee">
            {t("intro.freeOfCharge")}
          </a>
          ,{" "}
          <a href="https://wiki.openstreetmap.org/wiki/Key:social_facility">
            {t("intro.social")}
          </a>
        </li>
        <li>
          {t("intro.production")}, <i className="fas fa-seedling"></i>{" "}
          <a href="https://wiki.openstreetmap.org/wiki/Key:organic">
            {t("intro.organic")}
          </a>
          , {t("intro.seasonal")}, <i className="fas fa-cheese"></i>{" "}
          <i className="fas fa-carrot"></i>{" "}
          <a href="https://wiki.openstreetmap.org/wiki/Key:diet">
            {t("intro.vegetarian")}
          </a>
        </li>
        <li>
          <i className="fas fa-hands"></i> {t("intro.packed")},{" "}
          <a href="https://wiki.openstreetmap.org/wiki/Key:bulk_purchase">
            {t("intro.unpacked")}
          </a>
          ,{" "}
          <a href="https://wiki.openstreetmap.org/wiki/Key:zero_waste">
            {t("intro.zeroWaste")}
          </a>
        </li>
        <li>
          <i className="fas fa-handshake"></i>{" "}
          <a href="https://wiki.openstreetmap.org/wiki/Key:fair_trade">
            {t("intro.fairTrade")}
          </a>
        </li>
        <li>
          <i className="fas fa-map-marker-alt"></i> {t("intro.transport")},
          {t("intro.regional")}
        </li>
        <li>
          <i className="fas fa-redo-alt"></i> {t("intro.sharing")},{" "}
          {t("intro.lending")}
        </li>
        <li>
          <i className="fas fa-tools"></i>{" "}
          <a href="https://wiki.openstreetmap.org/wiki/Key:repair">
            {t("intro.repair")}
          </a>
        </li>
        <li>
          <i className="fas fa-exchange-alt"></i> {t("intro.reuse")}
        </li>
        <li>
          <i className="fas fa-recycle"></i>{" "}
          <a href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drecycling">
            {t("intro.recycling")}
          </a>
        </li>
        <li>
          <a href="https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcommunity_centre">
            {t("intro.community")}
          </a>
          ,{" "}
          <a href="https://wiki.openstreetmap.org/wiki/Key:operator:type">
            {t("intro.participation")}
          </a>
        </li>
      </ul>
      <p>
        <Trans
          i18nKey="intro.osm"
          components={{
            o: <a href="https://www.openstreetmap.org" />,
            e: <a href="#" className="edit" />,
          }}
        ></Trans>
      </p>
      <p>
        <Trans
          i18nKey="intro.license"
          components={{
            l: (
              <a href="https://github.com/ToastHawaii/sustainable-map/blob/master/LICENSE" />
            ),
            c: <a href="https://github.com/ToastHawaii/sustainable-map" />,
          }}
        ></Trans>
      </p>
      <div className="responsive-table">
        <table>
          <tbody>
            <tr>
              <td>
                <a href="/?lang=en">English</a>
              </td>
              <td>
                <a href="/?lang=cs">čeština</a>
              </td>
              <td>
                <a href="/?lang=de">Deutsch</a>
              </td>
              <td>
                <a href="/?lang=es">Español</a>
              </td>
              <td>
                <a href="/?lang=fr">Français</a>
              </td>
              <td>
                <a href="/?lang=pl">Polski</a>
              </td>
              {/* <td>
          <a href="/?lang=zh_Hant">中文（繁體）</a>
        </td> */}
              <td>
                <a href="https://hosted.weblate.org/engage/sustainable-map/">
                  {t("intro.translate")}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <a href="https://hosted.weblate.org/engage/sustainable-map/">
          <img
            src="https://hosted.weblate.org/widgets/sustainable-map/-/svg-badge.svg"
            alt={t("intro.translationStatus")}
          />
        </a>
      </p>
      <hr />
      <ul>
        <li>
          <a href="https://wiki.openstreetmap.org/wiki/How_to_contribute">
            {t("intro.contribute")}
          </a>
        </li>
        <li>
          <a href="https://osm-apps.zottelig.ch/">{t("intro.moreApps")}</a>
        </li>
        <li>
          <a href="https://wiki.openstreetmap.org/wiki/User:ToastHawaii">
            {t("intro.aboutMe")}
          </a>
        </li>
      </ul>
    </>
  );
}

root.render(
  <React.StrictMode>
    <App
      logo={<Logo />}
      intro={<Intro />}
      filters={filters}
      attributes={attributes}
      externalResources={externalResources}
    />
  </React.StrictMode>
);

// change to peace flag
setTimeout(() => {
  const flag = document.querySelector(".leaflet-attribution-flag");
  if (flag) {
    flag.setAttribute("viewBox", "0 0 21 14");
    flag.innerHTML = `<path fill="#80b" d="M0 0h21v3H0z"/><path fill="#00f" d="M0 2h21v3H0z"/><path fill="#8bd" d="M0 4h21v3H0z"/><path fill="#6b4" d="M0 6h21v3H0z"/><path fill="#fe0" d="M0 8h21v3H0z"/><path fill="#f41" d="M0 10h21v3H0z"/><path fill="#f10" d="M0 12h21v2H0z"/>`;
  flag.after(" | ")
  }
}, 0);
