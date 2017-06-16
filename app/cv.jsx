"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Responsive as ResponsiveReactGridLayout } from "react-grid-layout";

const skills = [
    { id: "javascript", name: "JavaScript", png: true },
    { id: "nodejs", name: "Node.js" },
    { id: "typescript", name: "TypeScript" },
    { id: "polymer", name: "Polymer" },
    { id: "angular", name: "Angular" },
    { id: "vuejs", name: "Vue.js" },
    { id: "geddy", name: "Geddy", png: true },
    { id: "webpack", name: "Webpack", png: true },
    { id: "mocha", name: "Mocha" },
    { id: "webdriverio", name: "WebDriver.io", png: true },
    { id: "stylus", name: "Stylus" },
    { id: "css", name: "CSS" },
    { id: "html5", name: "HTML5" },
    { id: "jquery", name: "jQuery" },
  ],
  layout = skills.map((skill, i) => {
    return { i: skill.id, x: i, y: 0, w: 2, h: 2, static: true };
  }),
  itemDivs = skills.map((skill) => {
    return (
      <div key={skill.id} className="technology">
        <img src={"/images/technologies/" + skill.id + "." + (skill.png ? "png" : "svg") } alt={skill.name} />
        <p>{skill.name}</p>
      </div>
    );
  });

ReactDOM.render(
  <ResponsiveReactGridLayout layout={layout} width={2400} isDraggable={false} isResizable={false}
    breakpoints={{lg: 2400, md: 2400, sm: 2400, xs: 2400, xxs: 2400}}
    cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
    {itemDivs}
  </ResponsiveReactGridLayout>,
  document.getElementById("skills-js")
);
