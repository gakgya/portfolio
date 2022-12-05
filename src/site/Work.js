import React from "react";
import "./css/Main.css";
import "./css/Work.css";
import Work_list from "./MultipleItems";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Work() {
  return (
    <div id="work">
      <div id="Work_standard">
        <p className="work_title">Works</p>
        <p className="work_subtitle">The works that I made</p>
        <div className="work_list">
          <Work_list />
        </div>
      </div>
    </div>
  );
}

export default Work;
