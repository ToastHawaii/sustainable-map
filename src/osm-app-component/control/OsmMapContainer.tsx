import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { Attribute } from "../Generator";
import { initMap } from "..";
import { useTranslation } from "react-i18next";

let initalized = false;
type Props<M> = {
  baseUrl: string;
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
  }[];
  attributes: Attribute<M>[];
  globalFilter?: (tags: any, group: any, value: any) => boolean;
  minZoom?: number;
  externalResources?: any;
};

export function Init<M>({
  baseUrl,
  filterOptions,
  attributes,
  globalFilter,
  minZoom = 14,
  externalResources = {},
}: Props<M>) {
  let { t } = useTranslation();
  const map = useMap();

  useEffect(() => {
    if (initalized) {
      initMap(
        baseUrl,
        filterOptions,
        attributes,
        map,
        t,
        globalFilter,
        minZoom,
        externalResources
      );
    }
    initalized = true;
  });

  return null;
}

export function OsmMapContainer<M>(props: Props<M>) {
  return (
    <MapContainer id="map">
      <TileLayer
        opacity={0.7}
        attribution='Map data &copy; <a href="https://openstreetmap.org/">OpenStreetMap</a> | POI via <a href="https://www.overpass-api.de/">Overpass</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Init {...props} />
      <Menu />
      <Search />
    </MapContainer>
  );
}
