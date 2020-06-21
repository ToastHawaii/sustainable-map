import { initMap } from "./map";
import { filters } from "./filters";
import { attributes } from "./attributes";
import { local } from "./local";
import { local as deLocal } from "./de/local";

initMap(
  filters,
  attributes,
  document.documentElement.lang === "de" ? deLocal : local
);

import "details-element-polyfill";
import { createElement } from "./utilities/html";

document.addEventListener("click", e => {
  const target = (e.target as HTMLElement).parentElement;

  const titleElement = document.querySelector(".attribut .title");
  if (titleElement) titleElement.remove();

  if (target && target.classList.contains("attribut")) {
    const titleElement = createElement("span", target.title, ["title"]);

    target.append(titleElement);

    setTimeout(() => {
      titleElement.remove();
    }, 2000);
  }
});
