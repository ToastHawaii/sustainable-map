import React from "react";

export function IntroContainer(props: { children: any }) {
  return (
    <div className="intro-container" style={{ display: "block" }}>
      <div className="info">{props.children}</div>
      <button
        className="close-button"
        onClick={() => {
          (
            document.querySelector(".intro-container") as HTMLElement
          ).style.display = "none";
        }}
      >
        ×
      </button>
    </div>
  );
}
