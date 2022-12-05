import React from "react";
import "./css/Main.css";
import About from "./About";
import Skill from "./Skill";
import Work from "./Work";
import Contact from "./Contact";
import Profile from "./Profile";

function Main() {
  return (
    <div id="main_standard" onWheel={(e) => console.log(e.nativeEvent)}>
      <div id="1">
        <About />
      </div>
      <div id="2">
        <Profile />
      </div>
      <div id="3">
        <Skill />
      </div>
      <div id="4">
        <Work />
      </div>
    </div>
  );
}

export default Main;
