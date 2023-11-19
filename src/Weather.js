import React from "react";

import CurrentTemperature from "./CurrentTemperature";
import Conditions from "./Conditions";
import Footer from "./Footer";
import Forecast from "./App";
import "./weather.css";

export default function Weather() {
  return (
    <div>
      <div className="container">
        <form id="search-form">
          <input
            type="searchs"
            placeholder="🔍Change City..."
            className="form-control"
            id="search"
            required
          />
          <input type="submit" value="search" class="search-button" />
        </form>
        <br />
        <div className="button">
          <button type="button" class="btn btn-info">
            Current Location
          </button>
        </div>
        <div>
          <h1 className="current-city" id="city">
            Bulawayo
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300;1,500;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </h1>
        </div>
        <CurrentTemperature />
        <br />
        <Conditions />
        <br/>
        <Forecast/>
      </div>
      <Footer />
    </div>
  );
}
