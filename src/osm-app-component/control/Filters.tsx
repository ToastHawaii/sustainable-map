import React from "react";

export function Filters({
  onOpen,
  onClose,
  onClear,
  collapsed,
}: {
  onOpen: () => void;
  onClose: () => void;
  onClear: () => void;
  collapsed: boolean;
}) {
  return (
    <div id="filters" className={collapsed ? "right-collapsed" : ""}>
      <div
        className="right-collapse"
        onClick={() => {
          if (collapsed) {
            onOpen();
          } else {
            onClose();
          }
        }}
      >
        <i className="fas fa-list"></i>
      </div>
      <div
        className="filters-clear"
        style={{ display: "none" }}
        onClick={onClear}
      >
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
}
