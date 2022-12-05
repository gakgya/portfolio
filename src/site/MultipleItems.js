import React, { Component, useState, useRef } from "react";
import Slider from "react-slick";
import me from "./img/me.jpg";
import eroe from "./img/eroe.gif";
import "./css/work_list.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animations } from "react-animation";

function MultipleItems() {
  const [one, setOne] = useState(animations.fadeOut);
  const [two, setTwo] = useState(animations.fadeOut);
  const [three, setThree] = useState(animations.fadeOut);

  function oneover(e) {
    setOne(animations.fadeIn);
  }
  function oneout(e) {
    setOne(animations.fadeOut);
  }
  function twoover(e) {
    setTwo(animations.fadeIn);
  }
  function twoout(e) {
    setTwo(animations.fadeOut);
  }
  function threeover(e) {
    setThree(animations.fadeIn);
  }
  function threeout(e) {
    setThree(animations.fadeOut);
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div id="multiple_main">
      <Slider {...settings}>
        <div
          className="work_object"
          onMouseEnter={oneover}
          onMouseLeave={oneout}
          id="one"
        >
          <div className="work_img">
            <img src={eroe} alt="1"></img>
          </div>
          <div className="work_txt">
            <h3>
              치매환자, 지적장애인 보호를 위한 위치추적센서 및 외출 알리미
            </h3>
          </div>
          <div
            className="work_hover"
            style={{
              animation: one,
            }}
          >
            <p>
              <strong>팀이름</strong> : eroe
            </p>
            <p>
              <strong>구성</strong> : 웹앱 + 아두이노
            </p>
            <p>
              <strong>참여도</strong> : 25%
            </p>
            <p>
              <strong>사용기술</strong>
            </p>
            <div className="using_tech_box">
              <div className="using_tech">Arduino</div>
              <div className="using_tech">React</div>
              <div className="using_tech">html</div>
              <div className="using_tech">css</div>
              <div className="using_tech">c</div>
            </div>
            <p>
              <strong>Code</strong>
            </p>
            <a href="https://github.com/gakgya/eroe-web" className="git_button">
              <div>Git</div>
            </a>
            <p>
              <strong>Design</strong>
            </p>
            <a
              href="https://www.figma.com/file/BJlNBAU0rxaniiJaEtfyvo/personal-eroe-phone?node-id=0%3A1&t=AyAf6ox3NxQbouEx-1"
              className="git_button"
            >
              <div>Figma</div>
            </a>
          </div>
        </div>
        <div
          className="work_object"
          onMouseEnter={twoover}
          onMouseLeave={twoout}
          id="two"
        >
          <div className="work_img">
            <img src={me} alt="1"></img>
          </div>
          <div className="work_txt">
            <h3>파이썬 웹크롤링을 활용한 난방장치 제어</h3>
          </div>
          <div className="work_hover" style={{ animation: two }}>
            <p>
              <strong>팀이름</strong> : 없음
            </p>
            <p>
              <strong>구성</strong> : 파이썬 코드&#40;UI없음&#41;
            </p>
            <p>
              <strong>참여도</strong> : 100%
            </p>
            <p>
              <strong>사용기술</strong>
            </p>
            <div className="using_tech_box">
              <div className="using_tech">Python</div>
            </div>
            <p>Code</p>
            <a href="https://github.com/gakgya/weather" className="git_button">
              <div>Git</div>
            </a>
          </div>
        </div>
        <div
          className="work_object"
          onMouseEnter={threeover}
          onMouseLeave={threeout}
          id="three"
        >
          <div className="work_img">
            <img src={me} alt="1"></img>
          </div>
          <div className="work_txt">
            <h3>웹 포트폴리오</h3>
          </div>
          <div className="work_hover" style={{ animation: three }}>
            <p>
              <strong>팀이름</strong> : 없음
            </p>
            <p>
              <strong>구성</strong> : 웹
            </p>
            <p>
              <strong>참여도</strong> : 100%
            </p>
            <p>
              <strong>사용기술</strong>
            </p>
            <div className="using_tech_box">
              <div className="using_tech">React</div>
              <div className="using_tech">html</div>
              <div className="using_tech">css</div>
              <div className="using_tech">JS</div>
            </div>
            <p>Code</p>
            <a href="#" className="git_button">
              <div>Git</div>
            </a>
            <p>Concept</p>
            <a href="#" className="git_button">
              <div>Figma</div>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
