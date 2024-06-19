import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMap } from "react-leaflet";

export function Menu() {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <div className={`menu-group ${collapsed ? "collapsed" : ""}`}>
        <NoteButton />
        <button
          className="menu edit help-text"
          type="button"
          title={t("menu.edit")}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button
          className="menu share help-text"
          type="button"
          title={t("menu.share")}
        >
          <i className="fas fa-share-alt"></i>
        </button>
        <ThemeButton />
        <button className="menu about help-text" title={t("menu.about")}>
          <i className="fas fa-info"></i>
        </button>
        <a
          className="menu donate help-text"
          target="_blank"
          title={t("menu.donate")}
        >
          <i className="fas fa-mug-hot"></i>
        </a>
      </div>
      <a
        className="menu toggle"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
    </>
  );
}

function ThemeButton() {
  const { t } = useTranslation();

  const startTheme = localStorage.getItem("theme") || "system";
  if (!startTheme) {
    localStorage.setItem("theme", startTheme);
  }

  function setThemeClass(theme: string) {
    const isSystemThemeDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if ((theme === "system" && isSystemThemeDark) || theme === "dark") {
      document.documentElement.classList.add("theme-mode-dark");
    } else {
      document.documentElement.classList.remove("theme-mode-dark");
    }

    if (theme === "system") {
      document.documentElement.classList.add("theme-mode-system");
    } else {
      document.documentElement.classList.remove("theme-mode-system");
    }
  }

  setThemeClass(startTheme);

  const handelClick = () => {
    let theme = localStorage.getItem("theme") || "system";

    const isSystemThemeDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (isSystemThemeDark) {
      if (theme === "system") {
        theme = "light";
      } else if (theme === "light") {
        theme = "dark";
      } else if (theme === "dark") {
        theme = "system";
      }
    } else {
      if (theme === "system") {
        theme = "dark";
      } else if (theme === "dark") {
        theme = "light";
      } else if (theme === "light") {
        theme = "system";
      }
    }

    localStorage.setItem("theme", theme);
    setThemeClass(theme);
  };

  return (
    <>
      <button
        className="menu theme theme-mode-dark-visible help-text"
        type="button"
        title={t("menu.theme")}
        onClick={handelClick}
      >
        <i className="fas fa-circle"></i>
      </button>
      <button
        className="menu theme theme-mode-light-visible help-text"
        type="button"
        title={t("menu.theme")}
        onClick={handelClick}
      >
        <i className="far fa-circle"></i>
      </button>
      <button
        className="menu theme theme-mode-system-visible help-text"
        type="button"
        title={t("menu.theme")}
        onClick={handelClick}
      >
        <i className="fas fa-adjust"></i>
      </button>
    </>
  );
}

function NoteButton() {
  const { t } = useTranslation();
  const map = useMap();

  const handelClick = () => {
    const latlng = map.getCenter();
    const zoom = map.getZoom();

    window.location.href = `https://www.openstreetmap.org/note/new#map=${zoom}/${latlng.lat}/${latlng.lng}`;
  };

  return (
    <button
      className="menu note help-text"
      type="button"
      title={t("menu.note")}
      onClick={handelClick}
    >
      <i className="fas fa-comment-alt"></i>
    </button>
  );
}
