import React from "react";
import "./styles/style.scss";

import logo from "./assets/img/logo.svg";
import avatar from "./assets/img/avatar.png";
import home from "./assets/img/home.svg";
import notification from "./assets/img/notification.svg";
import message from "./assets/img/message.svg";
import more from "./assets/img/more.svg";

export default () => {
  return (
    <div>
      <header className="main-header">
        <div className="container">
          <nav>
            <ul>
              <li>
                <img src={home} alt="imagem home" />
                Home
              </li>
              <li>
                <img src={notification} alt="imagem notification" />
                Notification
              </li>
              <li>
                <img src={message} alt="imagem messege" />
                Messages
              </li>
            </ul>
          </nav>
          <img src={logo} alt="logo twitter" />
          <div className="side">
            <input type="text" placeholder="Search on Twitter" />
            <img src={avatar} alt="imagem avatar" />
            <button>Tweet</button>
          </div>
        </div>
      </header>
      <section className="banner">
        <h1>Twitter da rocketseat</h1>
      </section>
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
    </div>
  );
};
