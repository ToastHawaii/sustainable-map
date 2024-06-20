import React, { useState } from "react";
import { useMap } from "react-leaflet";

export function GeoButton() {
  const map = useMap();
  const [watchLocation, setWatchLocation] = useState(false);

  return (
    <button
      className="geo"
      type="button"
      onClick={() => {
        setWatchLocation(!watchLocation);

        if (!watchLocation) {
          map.locate({ setView: true, maxZoom: 16, watch: true });
        } else {
          map.stopLocate();
        }
      }}
    >
      <i className="far fa-dot-circle"></i>
    </button>
  );
}
