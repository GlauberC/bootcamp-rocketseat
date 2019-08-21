import React from "react";
import "../styles/bar.scss";

import more from "../assets/img/more.svg";

export default () => {
  return (
    <section className="bar">
      <div className="container">
        <ul>
          <li className="active">
            <span>Tweets</span>
            <strong>3931</strong>
          </li>
          <li>
            <span>Followings</span>
            <strong>654</strong>
          </li>
          <li>
            <span>Followers</span>
            <strong>387</strong>
          </li>
          <li>
            <span>Favorites</span>
            <strong>265</strong>
          </li>
          <li>
            <span>Lists</span>
            <strong>8</strong>
          </li>
          <li>
            <span>Moments</span>
            <strong>0</strong>
          </li>
        </ul>
        <div className="actions">
          <button>Follow</button>
          <img src={more} alt="more options" />
        </div>
      </div>
    </section>
  );
};
