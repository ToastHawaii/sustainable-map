import React from "react";

export function Filters({ collapsed }: { collapsed: boolean }) {
  return (
    <div id="filters" className={collapsed ? "right-collapsed" : ""}>
      <div className="right-collapse">
        <i className="fas fa-list"></i>
      </div>
      <div className="filters-clear" style={{ display: "none" }}>
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
}
