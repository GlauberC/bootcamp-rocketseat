import React from "react";
import "../styles/widgets.scss";

import SugestUser from "./sugestUser";

export default () => {
  return (
    <section className="widgets">
      <div className="widget-item follow">
        <div className="title">
          <strong>Who to follow</strong>
          <p>Refresh</p>
          <p>View All</p>
        </div>
        <ul>
          <SugestUser />
          <SugestUser />
          <SugestUser />
        </ul>
      </div>
      <div className="widget-item trends">
        <div className="title">
          <strong>Trends</strong>
          <p>Change</p>
        </div>
        <ul>
          <li>#SportinfoDay</li>
          <li>#womenleader</li>
          <li>#VisitesDomicilliaires</li>
          <li>#European Parliament</li>
          <li>#blindgetrowd</li>
          <li>#UXDesign</li>
          <li>#UIDesign</li>
          <li>#ClearAirNow</li>
        </ul>
      </div>
      <footer>
        <p>
          © 2018 Twitter à propos Centre d'assistance Conditions Politique dde
          confidentialité Cookiers Informations sur la publicité
        </p>
      </footer>
    </section>
  );
};
