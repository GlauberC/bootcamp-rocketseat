import React from "react";

import "../styles/timeline.scss";

import Tweet from "./tweet";

export default () => {
  return (
    <section className="timeline">
      <nav>
        <ul>
          <li className="active">Tweets</li>
          <li>Tweets and replies</li>
          <li>Medias</li>
        </ul>
      </nav>
      <ul className="tweets">
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </ul>
    </section>
  );
};
