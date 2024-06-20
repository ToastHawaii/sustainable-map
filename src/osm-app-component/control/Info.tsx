import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export function Info({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);

  const handleCloseClick = () => {
    setVisible(false);
    onClose();
  };

  return (
    <div className="info-container" style={{ display: !visible ? "none" : "" }}>
      <div className="info">
        <h4></h4>
        <span className="text"></span>
        <hr />
        <small>
          <details>
            <summary>
              <strong>{t("info.osmTags")}</strong>
            </summary>
            <br />
            <div className="wiki"></div>
            <strong>{t("info.query")}</strong>
            <code className="query"></code>
            <a className="link" target="_blank">
              {t("info.overpassTurbo")}
            </a>
          </details>
        </small>
        <small className="external"></small>
      </div>
      <button className="close-button" onClick={handleCloseClick}>
        ×
      </button>
    </div>
  );
}
