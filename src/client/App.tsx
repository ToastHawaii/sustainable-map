// Copyright (C) 2020 Markus Peloso
//
// This file is part of Sustainable map.
//
// Sustainable map is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// Sustainable map is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with Sustainable map.  If not, see <http://www.gnu.org/licenses/>.

import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { init } from "./init";
import "./initI18next";

function setMeta(name: string, value: string) {
  document
    .querySelector("meta[name='" + name + "']")
    ?.setAttribute("value", value);
}

export function App() {
  let { t } = useTranslation();

  useEffect(() => {
    init(t);
  });

  useEffect(() => {
    document.title = t("meta.title");
    setMeta("description", t("meta.description"));
    setMeta("application-name", t("meta.titleShort"));
    setMeta("apple-mobile-web-app-title", t("meta.titleShort"));
  });

  return (
    <>
      <div id="map"></div>
      <h1>
        <a href="/">
          <img
            src="/icons/mstile-144x144.png"
            style={{ width: "22px", verticalAlign: "text-bottom" }}
          />{" "}
          {t("meta.titleShort")}
        </a>
      </h1>
      <div id="filters" className="right-collapsed">
        <div className="right-collapse">
          <i className="fas fa-list"></i>
        </div>
        <div className="filters-clear" style={{ display: "none" }}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="box">
        <div className="container">
          <form className="search">
            <button className="geo" type="button">
              <i className="far fa-dot-circle"></i>
            </button>
            <input
              type="search"
              id="osm-search"
              placeholder={t("search.placeholder")}
              required
            />
            <button className="icon" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      {Intro()}
      <div className="info-container">
        <div className="info">
          <h4></h4>
          <span className="text"></span>
          <hr />
          <small>
            <details>
              <summary>
                <strong>{t("info.osmTags")}</strong>
              </summary>
              <br />
              <div className="wiki"></div>
              <strong>{t("info.query")}</strong>
              <code className="query"></code>
              <a className="link" target="_blank">
                {t("info.overpassTurbo")}
              </a>
            </details>
          </small>
          <small className="external"></small>
        </div>
        <button className="close-button">×</button>
      </div>
      <div className="menu-group collapsed">
        <button
          className="menu note help-text"
          type="button"
          title={t("menu.note")}
        >
          <i className="fas fa-comment-alt"></i>
        </button>
        <button
          className="menu edit help-text"
          type="button"
          title={t("menu.edit")}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button
          className="menu share help-text"
          type="button"
          title={t("menu.share")}
        >
          <i className="fas fa-share-alt"></i>
        </button>
        <button
          className="menu theme theme-mode-dark-visible help-text"
          type="button"
          title={t("menu.theme")}
        >
          <i className="fas fa-circle"></i>
        </button>
        <button
          className="menu theme theme-mode-light-visible help-text"
          type="button"
          title={t("menu.theme")}
        >
          <i className="far fa-circle"></i>
        </button>
        <button
          className="menu theme theme-mode-system-visible help-text"
          type="button"
          title={t("menu.theme")}
        >
          <i className="fas fa-adjust"></i>
        </button>
        <button className="menu about help-text" title={t("menu.about")}>
          <i className="fas fa-info"></i>
        </button>
        <a
          className="menu donate help-text"
          target="_blank"
          title={t("menu.donate")}
        >
          <i className="fas fa-mug-hot"></i>
        </a>
      </div>
      <a className="menu toggle">
        <i className="fas fa-ellipsis-v"></i>
      </a>
    </>
  );
}
function Intro() {
  const { t } = useTranslation();

  return (
    <div className="intro-container" style={{ display: "block" }}>
      <div className="info">
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
      </div>
      <button
        className="close-button"
        onClick={() => {
          (
            document.querySelector(".intro-container") as HTMLElement
          ).style.display = "none";
        }}
      >
        ×
      </button>
    </div>
  );
}
