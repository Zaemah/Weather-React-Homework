import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <a
          href="https://github.com/Zaemah/weather.app"
          target="_blank"
          rel="noreferrer"
        >
          open source code by
        </a>
        <a href="https://github.com/Zaemah" target="_blank">
          {" "}
          Emmah Zanele Mpofu
        </a>{" "}
        hosted
        <a href="https://wonderful-tiramisu-e8fd57.netlify.app" target="_blank">
          on Netlify
        </a>
      </footer>
    </div>
  );
}
