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
  minZoom: number;
  offers: string[];
  onAbout: () => void;
  onLoaded: (map: Map) => void;
};

export function Init<M>({
  onLoaded,
  filterOptions,
  attributes,
  globalFilter,
  minZoom,
  offers,
}: Props<M>) {
  const { t } = useTranslation();
  const map = useMap();

  useEffect(() => {
    if (!initalized) {
      onLoaded(map);
      initMap(filterOptions, attributes, map, t, globalFilter, minZoom, offers);
    }
    initalized = true;
  });

  return null;
}

function OverPassLayer<M>({
  filter,
  attributes,
  minZoom,
  single,
  isActive,
  globalFilter,
  afterLoad = () => {},
}: {
  filter: Filter;
  attributes: Attribute<M>[];
  minZoom: number;
  single: boolean;
  isActive: () => boolean;
  globalFilter?: (tags: any, group: string, value: string) => boolean;
  afterLoad?: () => void;
}) {
  const { t } = useTranslation();
  const map = useMap();

  useEffect(() => {
    let removed = false;
    const layer = createOverPassLayer(
      filter.group,
      filter.value,
      filter.icon,
      filter.query,
      attributes as any,
      t,
      filter.color,
      minZoom,
      single,
      () => !removed && isActive(),
      globalFilter,
      afterLoad
    );
    map.addLayer(layer);

    return () => {
      removed = true;
      map.removeLayer(layer);
    };
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
      {props.offers.map((offer) => {
        const filter = props.filterOptions.filter(
          (f) => f.group + "/" + f.value === offer
        )[0];
        if (!filter) throw new Error("Unexpected undefined: filter");

        return (
          <OverPassLayer
            key={offer}
            filter={filter}
            attributes={props.attributes}
            minZoom={props.minZoom}
            single={props.filterOptions.length <= 1}
            isActive={() => {
              return offer.includes(filter.group + "/" + filter.value);
            }}
            globalFilter={props.globalFilter}
            afterLoad={() => {
              // updateCount(
              //   map,
              //   t("emptyIndicator"),
              //   props.minZoom,
              //   props.offers
              // );
            }}
          ></OverPassLayer>
        );
      })}
      <Menu
        filterOptions={props.filterOptions}
        offers={props.offers}
        onAbout={props.onAbout}
      />
      <Search />
    </MapContainer>
  );
}
