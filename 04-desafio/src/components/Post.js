import React from "react";
import Response from "./Response";
import "./Post.css";

export default function Post({ postdata }) {
  console.log(postdata);
  return (
    <div className="post">
      <div className="post-header">
        <div className="img"></div>
        <div className="post-data">
          <strong>{postdata.author.name}</strong>
          <p>{postdata.date}</p>
        </div>
      </div>
      <div className="post-content">
        <p>{postdata.content}</p>
      </div>
      <hr />
      {postdata.comments.map(comment => (
        <Response key={comment.id} commentdata={comment} />
      ))}
    </div>
  );
}
