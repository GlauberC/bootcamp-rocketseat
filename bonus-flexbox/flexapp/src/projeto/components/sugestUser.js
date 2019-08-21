import React from "react";
import "../styles/sugestUser.scss";
import avatar from "../assets/img/avatar.png";
export default () => {
  return (
    <li>
      <div className="profile">
        <img src={avatar} alt="Avatar" />
        <div className="info">
          <strong>
            Spade <span>@spade_be</span>
          </strong>
          <button>Follow</button>
        </div>
      </div>
      <span>x</span>
    </li>
  );
};
