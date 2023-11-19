import React from "react";

import "./currentTemperature.css";

export default function CurrentTemperature() {
  return (
    <div>
      <div className="temperature-container">
        <div className="current-temperature" id="currentTemperature">
          28°C
        </div>
        <div className="icon" id="currentIcon">
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="clear"
          />
        </div>
        <div id="description">Clear Sky</div>
      </div>
      <div className="date" id="date">
        Thursday 16, 2023
      </div>
    </div>
  );
}
