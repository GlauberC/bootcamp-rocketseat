import React from "react";
import "./Response.css";

export default function Response({ commentdata }) {
  return (
    <div className="response-container">
      <div className="img"></div>
      <div className="response-content">
        <p>
          <strong>{commentdata.author.name} </strong>
          {commentdata.content}
        </p>
      </div>
    </div>
  );
}
