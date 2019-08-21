import React from "react";
import "./styles/style.scss";

import Header from "./components/header";
import Bar from "./components/bar";
import Aside from "./components/aside";
import Widgets from "./components/widgets";
import Timeline from "./components/timeline";

export default () => {
  return (
    <div>
      <Header />
      <section className="banner">
        <h1>Twitter da rocketseat</h1>
      </section>
      <Bar />
      <div className="wrapper-container container">
        <Aside />
        <Timeline />
        <Widgets />
      </div>
    </div>
  );
};
