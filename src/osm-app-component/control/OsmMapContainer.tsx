import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Map } from "leaflet";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { Attribute } from "../Generator";
import { initMap, updateCount } from "../initMap";
import { useTranslation } from "react-i18next";
import { Filter } from "./Filters";
import { createOverPassLayer } from "../createOverPassLayer";

let initalized = false;
type Props<M> = {
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
  info: Filter | undefined;
  globalFilter?: (tags: any, group: any, value: any) => boolean;
  minZoom?: number;
  offers: string[];
  onAbout: () => void;
  onLoaded: (map: Map) => void;
};

export function Init<M>({
  onLoaded,
  filterOptions,
  attributes,
  globalFilter,
  minZoom = 14,
  offers,
}: Props<M>) {
  let { t } = useTranslation();
  const map = useMap();

  useEffect(() => {
    if (!initalized) {
      onLoaded(map);
      initMap(
        filterOptions,
        attributes,
        map,
        t,
        globalFilter,
        minZoom,
        offers
      );
    }
    initalized = true;
  });

  // useEffect(() => {
  //   for (const offer of offers)
  //     for (const filter of filterOptions)
  //       if (filter.group + "/" + filter.value === offer) {
  //         const layer = createOverPassLayer(
  //           filter.group,
  //           filter.value,
  //           filter.icon,
  //           filter.query,
  //           attributes as any,
  //           map,
  //           t,
  //           filter.color,
  //           minZoom,
  //           filterOptions.length <= 1,
  //           () => {
  //             return offer.includes(filter.group + "/" + filter.value);
  //           },
  //           globalFilter,
  //           () => {
  //             updateCount(map, t("emptyIndicator"), minZoom, offers);
  //           }
  //         );
  //         map.addLayer(layer);
  //       }

  //   return () => {};
  // }, [attributes, filterOptions, globalFilter, map, minZoom, offers, t]);

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
      <Menu
        filterOptions={props.filterOptions}
        offers={props.offers}
        onAbout={props.onAbout}
      />
      <Search />
    </MapContainer>
  );
}
