import React from "react";
import "../styles/header.scss";

import logo from "../assets/img/logo.svg";
import avatar from "../assets/img/avatar.png";
import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import message from "../assets/img/message.svg";

export default () => {
  return (
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
  );
};
