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

import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import "./initI18next";
import { Info } from "../osm-app-component/control/Info";
import { IntroContainer } from "../osm-app-component/control/IntroContainer";
import { Filters } from "../osm-app-component/control/Filters";
import { OsmMapContainer } from "../osm-app-component/control/OsmMapContainer";
import { attributes } from "./attributes";
import externalResourcesEn from "./externalResources/en.json";
import externalResourcesDe from "./externalResources/de.json";
import { filters } from "./filters";
import { setMeta } from "../osm-app-component/utilities/meta";
import {
  getQueryParams,
  setQueryParams,
} from "../osm-app-component/utilities/url";

export function App() {
  const { t } = useTranslation();
  const [filterCollapsed, setFilterCollapsed] = useState(true);
  const [intro, setIntro] = useState(true);

  function reset() {
    setFilterCollapsed(false);

    document.title = t("title");
    setMeta("description", t("description"));

    const params = getQueryParams();
    params["info"] = "";
    setQueryParams(params);
  }

  useEffect(() => {
    document.title = t("meta.title");
    setMeta("description", t("meta.description"));
    setMeta("application-name", t("meta.titleShort"));
    setMeta("apple-mobile-web-app-title", t("meta.titleShort"));
  });

  return (
    <>
      <OsmMapContainer
        baseUrl="https://sustainable.zottelig.ch"
        filterOptions={filters}
        attributes={attributes}
        externalResources={
          t("code") === "de" ? externalResourcesDe : externalResourcesEn
        }
      />
      <h1>
        <a href="/">
          <img
            src="/icons/mstile-144x144.png"
            style={{ width: "22px", verticalAlign: "text-bottom" }}
          />{" "}
          {t("meta.titleShort")}
        </a>
      </h1>
      <Filters collapsed={filterCollapsed} />
      {intro ? (
        <IntroContainer
          onClose={() => {
            setIntro(false);
            reset();
          }}
        >
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
        </IntroContainer>
      ) : null}
      <Info
        onClose={() => {
          reset();
        }}
      />
    </>
  );
}
