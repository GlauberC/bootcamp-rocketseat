import React from "react";
import "../styles/aside.scss";

import avatar from "../assets/img/avatar.png";
import place from "../assets/img/place.svg";
import url from "../assets/img/url.svg";
import joined from "../assets/img/joined.svg";
import born from "../assets/img/born.svg";
import followers from "../assets/img/followers.svg";
import images from "../assets/img/images.svg";

export default () => {
  return (
    <aside className="profile">
      <div className="user-info">
        <img src={avatar} className="avatar" alt="Foto do avatar" />
        <h1>Glauber Carvalho</h1>
        <span>@Exibit</span>
        <p>
          Desta maneira, a necessidade de renovação processual é uma das
          consequências do remanejamento dos quadros funcionais.
        </p>
        <ul>
          <li>
            <img src={place} alt="Place" />
            Namur, Belgium
          </li>
          <li>
            <img src={url} alt="url" />
            exibit.be
          </li>
          <li>
            <img src={joined} alt="joined" />
            Joined June 2007
          </li>
          <li>
            <img src={born} alt="born" />
            Bord the 20th of June 1978
          </li>
        </ul>
      </div>
      <div className="widget followers">
        <strong>
          <img src={followers} alt="" /> 73 followers that you know
        </strong>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      <div className="widget images">
        <strong>
          <img src={images} alt="" /> 266 Photos and videos
        </strong>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </aside>
  );
};
