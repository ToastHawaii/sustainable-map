import { initI18next } from "../osm-app-component/initI18next";

import * as en from "./locales/en.json";
import * as oacEn from "../osm-app-component/locales/en.json";

import * as cs from "./locales/cs.json";
import * as oacCs from "../osm-app-component/locales/cs.json";
import * as de from "./locales/de.json";
import * as oacDe from "../osm-app-component/locales/de.json";
import * as es from "./locales/es.json";
import * as oacEs from "../osm-app-component/locales/es.json";
import * as fr from "./locales/fr.json";
import * as oacFr from "../osm-app-component/locales/fr.json";
import * as pl from "./locales/pl.json";
import * as oacPl from "../osm-app-component/locales/pl.json";
import * as zhHant from "./locales/zh_Hant.json";
import * as oacZhHant from "../osm-app-component/locales/zh-Hant.json";

export const Resources = {
  en: { translation: { ...en, ...oacEn } },
  cs: { translation: { ...cs, ...oacCs } },
  de: { translation: { ...de, ...oacDe } },
  es: { translation: { ...es, ...oacEs } },
  fr: { translation: { ...fr, ...oacFr } },
  pl: { translation: { ...pl, ...oacPl } },
  zh_Hant: { translation: { ...zhHant, ...oacZhHant } },
};

initI18next(Resources);
