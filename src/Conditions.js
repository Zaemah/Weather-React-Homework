import React from "react";

import "./conditions.css";

export default function Condition() {
  return (
    <div className="condition">
      <div className="air-conditions">Air Conditions</div>
      <br />
      <div className="row">
        <div className="col">
          Real Feel
          <p id="realFeel">27°C</p>
        </div>
        <div className="col">
          Wind Speed
          <p id="windSpeed">13km/hr</p>
        </div>
        <div className="row">
          <div className="col">
            Wind Degree
            <p id="windDegree">0%</p>
          </div>
          <div className="col">
            Humidity
            <p id="humidity">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
