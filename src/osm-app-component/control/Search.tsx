import React from "react";
import { useTranslation } from "react-i18next";
import { GeoButton } from "./GeoButton";

export function Search() {
  const { t } = useTranslation();

  return (
    <div className="box">
      <div className="container">
        <form className="search">
          <GeoButton />
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
  );
}
