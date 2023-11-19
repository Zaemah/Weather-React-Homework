import "./styles.css";

export default function formatDay(focastTime) {
  return (
    <div>
      <h3> 5-Day Forecast </h3>
      <div className="dailyForecast">
        <div class="weather-forecast-day">
          <div class="weather-forecast-date">Mon</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            class="weather-forecast-icon"
          />
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>23°</strong>
            </div>
            <div class="weather-forecast-temperature">9°</div>
          </div>
        </div>
        <div class="weather-forecast-day">
          <div class="weather-forecast-date">Tue</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            class="weather-forecast-icon"
          />
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>23°</strong>
            </div>
            <div class="weather-forecast-temperature">9°</div>
          </div>
        </div>
        <div class="weather-forecast-day">
          <div class="weather-forecast-date">Wed</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            class="weather-forecast-icon"
          />
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>23°</strong>
            </div>
            <div class="weather-forecast-temperature">9°</div>
          </div>
        </div>
        <div class="weather-forecast-day">
          <div class="weather-forecast-date">Thurs</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            class="weather-forecast-icon"
          />
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>23°</strong>
            </div>
            <div class="weather-forecast-temperature">9°</div>
          </div>
        </div>
        <div class="weather-forecast-day">
          <div class="weather-forecast-date">Fri</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            class="weather-forecast-icon"
          />
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>23°</strong>
            </div>
            <div class="weather-forecast-temperature">9°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
