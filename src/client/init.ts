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

import { initMap } from "../osm-app-component";
import { filters } from "./filters";
import "../osm-app-component/style.scss";
import { attributes } from "./attributes";
import { TFunction } from "i18next";
import externalResourcesEn from "./externalResources/en.json";
import externalResourcesDe from "./externalResources/de.json";

export function init(t: TFunction<"translation", undefined>, map: L.Map) {
  initMap(
    "https://sustainable.zottelig.ch",
    filters,
    attributes,
    map,
    t,
    undefined,
    undefined,
    t("code") === "de" ? externalResourcesDe : externalResourcesEn
  );
}
