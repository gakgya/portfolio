import React, { useState } from "react";
import "./css/Main.css";
import "./css/Skill.css";
import html from "./img/Skill_html.png";
import css from "./img/Skill_css.png";
import js from "./img/Skill_js.png";
import arduino from "./img/Skill_arduino.png";
import react from "./img/Skill_react.png";
import python from "./img/Skill_python.png";

function Skill() {
  const [shtml, setHtml] = useState();
  return (
    <div id="skill">
      <div id="Skill_Standard">
        <p className="big">SKILL</p>
        <p className="small">The Skills I have</p>
        <div className="img_box">
          <div className="img_box_1">
            <div className="upshelf">
              <p>
                <span>적응도</span>
                <br />
                80%
              </p>
            </div>
            <div className="upshelf">
              <p>
                <span>적응도</span>
                <br />
                90%
              </p>
            </div>
            <div className="upshelf">
              <p>
                <span>적응도</span>
                <br />
                60%
              </p>
            </div>
          </div>

          <div className="img_box_1">
            <div className="downshelf">
              <p>
                <span>적응도</span>
                <br />
                70%
              </p>
            </div>
            <div className="downshelf">
              <p>
                <span>적응도</span>
                <br />
                50%
              </p>
            </div>
            <div className="downshelf">
              <p>
                <span>적응도</span>
                <br />
                60%
              </p>
            </div>
          </div>
        </div>
        <div className="img_box_front">
          <div className="img_box_1">
            <div className="upshelf">
              <img src={html} alt="1"></img>
            </div>
            <div className="upshelf">
              <img src={css} alt="2"></img>
            </div>
            <div className="upshelf">
              <img src={js} alt="3"></img>
            </div>
          </div>

          <div className="img_box_1">
            <div className="downshelf">
              <img
                src={arduino}
                alt="4"
                style={{ width: "182px", height: "auto" }}
              ></img>
            </div>
            <div className="downshelf">
              <img src={react} alt="5"></img>
            </div>
            <div className="downshelf">
              <img
                src={python}
                alt="6"
                style={{ width: "182px", height: "257px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
