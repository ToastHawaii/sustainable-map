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
import * as hu from "./locales/hu.json";
import * as oacHu from "../osm-app-component/locales/hu.json";
import * as pl from "./locales/pl.json";
import * as oacPl from "../osm-app-component/locales/pl.json";
import * as ru from "./locales/ru.json";
import * as oacRu from "../osm-app-component/locales/ru.json";
import * as ta from "./locales/ta.json";
import * as oacTa from "../osm-app-component/locales/ta.json";
import * as zhHant from "./locales/zh_Hant.json";
import * as oacZhHant from "../osm-app-component/locales/zh-Hant.json";

export const Resources = {
  en: { translation: { ...en, ...oacEn } },
  cs: { translation: { ...cs, ...oacCs } },
  de: { translation: { ...de, ...oacDe } },
  es: { translation: { ...es, ...oacEs } },
  fr: { translation: { ...fr, ...oacFr } },
  hu: { translation: { ...hu, ...oacHu } },
  pl: { translation: { ...pl, ...oacPl } },
  ru: { translation: { ...ru, ...oacRu } },
  ta: { translation: { ...ta, ...oacTa } },
  zh_Hant: { translation: { ...zhHant, ...oacZhHant } },
};

initI18next(Resources);
