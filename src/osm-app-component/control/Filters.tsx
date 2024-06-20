import React from "react";

export function Filters() {
  return (
    <div id="filters" className="right-collapsed">
      <div className="right-collapse">
        <i className="fas fa-list"></i>
      </div>
      <div className="filters-clear" style={{ display: "none" }}>
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
}
