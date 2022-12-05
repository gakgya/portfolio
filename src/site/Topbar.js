import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./css/Topbar.css";

function Topbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  var Scroll = require("react-scroll");
  var scroll = Scroll.animateScroll;

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <div id="Standard">
      <div id="menu_box">
        <Link to="1" smooth={true} hashSpy={true} offset={-70}>
          <div id="hmenu">SONG JIHO</div>
        </Link>
        <div id="home" />
        <nav className="in_menu">
          <Link
            className="menu"
            to="2"
            smooth={true}
            hashSpy={true}
            offset={-70}
          >
            <div>About</div>
          </Link>
          <Link
            className="menu"
            to="3"
            smooth={true}
            hashSpy={true}
            offset={-70}
          >
            <div>Skill</div>
          </Link>
          <Link
            className="menu"
            to="4"
            smooth={true}
            hashSpy={true}
            offset={-70}
          >
            <div>Work</div>
          </Link>
          <Link
            className="menu"
            to="5"
            smooth={true}
            hashSpy={true}
            offset={-70}
          >
            <div>Contact</div>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Topbar;
