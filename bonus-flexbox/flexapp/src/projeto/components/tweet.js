import React from "react";
import "../styles/tweet.scss";
import image from "../assets/img/avatar.png";
import comments from "../assets/img/comments.svg";
import retweet from "../assets/img/retweet.svg";
import like from "../assets/img/like.svg";
import message from "../assets/img/message.svg";

export default () => {
  return (
    <li className="tweet">
      <img className="avatar" src={image} alt="imagem do usuário" />
      <div className="tweet-body">
        <div className="tweet-header">
          <strong>
            Benolt Vrins
            <span className="twitter">@exibit</span>
            <span className="date">26 jan.</span>
          </strong>
        </div>
        <p>
          Todavia, a mobilidade dos capitais internacionais representa uma
          abertura para a melhoria do retorno esperado a longo prazo.
        </p>
        <ul className="icons">
          <li>
            <img src={comments} alt="Comments" /> 1
          </li>
          <li>
            <img src={retweet} alt="retweet" /> 2
          </li>
          <li>
            <img src={like} alt="like" /> 3
          </li>
          <li>
            <img src={message} alt="message" /> 4
          </li>
        </ul>
      </div>
    </li>
  );
};
