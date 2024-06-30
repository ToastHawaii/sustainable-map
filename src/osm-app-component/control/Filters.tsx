import React from "react";
import { groupBy } from "../utilities/data";
import { useTranslation } from "react-i18next";
import { getQueryParams, setQueryParams } from "../utilities/url";

export type Filter = {
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
};

export function Filters({
  onOpen,
  onClose,
  onClear,
  collapsed,
  filterOptions,
  offers,
  onActivate,
  onDeactivate,
  onInfo,
}: {
  onOpen: () => void;
  onClose: () => void;
  onClear: () => void;
  collapsed: boolean;
  filterOptions: Filter[];
  offers: string[];
  onActivate: (filter: Filter) => void;
  onDeactivate: (filter: Filter) => void;
  onInfo: (filter: Filter) => void;
}) {
  const { t } = useTranslation();

  const groups = groupBy(
    filterOptions
      .sort((a, b) =>
        t("type." + a.value + ".name").localeCompare(
          t("type." + b.value + ".name")
        )
      )
      .sort((a, b) =>
        t("group." + a.group).localeCompare(t("group." + b.group))
      )
      .sort((a, b) => (a.subgroup || "").localeCompare(b.subgroup || ""))
      .sort((a, b) => (b.order || 1000) - (a.order || 1000)),
    "group"
  );
  // for (const k in groups) {
  //   const group = groups[k];
  //   const detailsElement = createElement("details");

  //   const count = offers.filter((o) => o.startsWith(k + "/")).length;
  //   const countElement = createElement("span", count ? `(${count})` : "", [
  //     "count",
  //   ]);
  //   const labelElement = createElement("span", t("group." + k));
  //   const summaryElement = createElement("summary");
  //   summaryElement.appendChild(labelElement);
  //   summaryElement.insertBefore(countElement, labelElement);
  //   detailsElement.appendChild(summaryElement);

  //   for (const f of group) {
  //     let contentElement: HTMLLabelElement;

  //     if (!f.subgroup) {
  //       contentElement = createElement(
  //         "label",
  //         `
  //           <input value="${k + "/" + f.value}" type="checkbox" />
  //           <div class="filter-background"></div>
  //           <div class="filter-label">
  //             <img class="${f.value}-icon"
  //               src="${f.icon}"
  //             />
  //             <span>${t("type." + f.value + ".name")}</span>
  //           </div>`,
  //         ["filter", "filter-" + k + "-" + f.value]
  //       );

  //       const aElement = createElement(
  //         "a",
  //         `<i class="fas fa-info-circle"></i>`
  //       );
  //       aElement.title = t("type." + f.value + ".name");
  //       aElement.href = `?offers=${k + "/" + f.value}&info=${
  //         k + "/" + f.value
  //       }`;
  //       aElement.addEventListener("click", (ev) => {
  //         ev.preventDefault();

  //         const params = getQueryParams();

  //         const input = getHtmlElement("input", contentElement);
  //         if (!input.checked) {
  //           input.checked = true;
  //           input.dispatchEvent(new Event("change"));
  //         }

  //         showInfoContainer(f);

  //         params["info"] = f.group + "/" + f.value;

  //         partAreaVisible();

  //         return false;
  //       });
  //       detailsElement.appendChild(aElement);

  //       detailsElement.appendChild(contentElement);
  //     } else {
  //       const group = getHtmlElement(
  //         ".filter-" + k + "-" + f.subgroup,
  //         detailsElement
  //       );

  //       contentElement = createElement(
  //         "label",
  //         `<input value="${k + "/" + f.value}" type="checkbox" />
  //               <div class="filter-sub-background"></div>
  //               <i class="${f.button}" style="color: ${f.color}" title="${t(
  //           "type." + f.value + ".name"
  //         )}"></i>`,
  //         ["filter", "filter-sub", "filter-" + k + "-" + f.value]
  //       );

  //       detailsElement.insertBefore(contentElement, group);
  //     }

  //     getHtmlElement("input", contentElement).addEventListener(
  //       "change",
  //       function () {
  //         if (this.checked) {
  //           offers.push(k + "/" + f.value);
  //           init(
  //             f.group,
  //             f.value,
  //             f.icon,
  //             f.query,
  //             attributes,
  //             map,
  //             t,
  //             f.color,
  //             minZoom,
  //             filterOptions.length <= 1,
  //             globalFilter,
  //             offers
  //           );
  //         } else {
  //           const index = offers.indexOf(k + "/" + f.value);
  //           if (index > -1) offers.splice(index, 1);

  //           map.removeLayer(layers[k + "/" + f.value]);
  //         }

  //         const count = offers.filter((o) => o.startsWith(k + "/")).length;
  //         countElement.innerText = count ? `(${count})` : "";

  //         const params = getQueryParams();
  //         if (!(filterOptions.length <= 1))
  //           params["offers"] = offers.toString();
  //         setQueryParams(params);

  //       }
  //     );
  //   }
  //   getHtmlElement("#filters").appendChild(detailsElement);
  // }

  return (
    <>
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
        {offers.length >= 1 ? (
          <div className="filters-clear" onClick={onClear}>
            <i className="fas fa-times"></i>
          </div>
        ) : null}
        {Object.keys(groups).map((k) => {
          const group = groups[k];
          const count = offers.filter((o) => o.startsWith(k + "/")).length;
          return (
            <details key={k}>
              <summary>
                <span className="count">{count ? `(${count})` : ""}</span>
                {t("group." + k)}
              </summary>
              {group
                .filter((g) => !g.subgroup)
                .map((f) => (
                  <React.Fragment key={`${k}/${f.value}`}>
                    <a
                      title={t("type." + f.value + ".name")}
                      href={`?offers=${k}/${f.value}&info=${k}/${f.value}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onInfo(f);
                      }}
                    >
                      <i className="fas fa-info-circle"></i>
                    </a>
                    <label className={"filter filter-" + k + "-" + f.value}>
                      <input
                        value={`${k}/${f.value}`}
                        type="checkbox"
                        checked={offers.includes(`${k}/${f.value}`)}
                        onChange={(e) => {
                          if (e.currentTarget.checked) {
                            onActivate(f);
                          } else {
                            onDeactivate(f);
                          }
                        }}
                      />
                      <div className="filter-background"></div>
                      <div className="filter-label">
                        <img
                          className={`${f.value}-icon`}
                          src={f.icon}
                          alt={t("type." + f.value + ".name")}
                        />{" "}
                        <span>{t("type." + f.value + ".name")}</span>
                      </div>
                    </label>
                  </React.Fragment>
                ))}
            </details>
          );
        })}
      </div>
    </>
  );
}