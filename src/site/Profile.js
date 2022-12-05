import React from "react";
import "./css/Main.css";
import "./css/Profile.css";
import me from "./img/me.jpg";

function Profile() {
  return (
    <div id="Profile">
      <div className="profile_standard">
        <p className="profile_title">About me</p>
        <p className="profile_subtitle">Let me introduce myself!</p>
        <div className="intro">
          <img src={me} alt="me"></img>
          <div className="profile_txt">
            <p className="dvp">Front-end Developer</p>
            <p className="dvp_explain">
              안녕하십니까 언제나 성실하고 <br />
              열심히 행동하는 송지호 입니다.
            </p>
            <p className="user">Profile</p>
            <p className="user_exp">
              이름 : 송지호
              <br />
              생년월일 : 1999년 9월 20일 <br />
              주소 : 서울시 강동구
            </p>
            <p className="ctf">Certificates</p>
            <p className="ctf_exp">운전면혀증 1종 보통</p>
            <p className="edu">Education</p>
            <p className="edu_exp">
              2018년 : 신구대학교 입학 <br />
              2023년 : 심화과정&#40;예정&#41;
            </p>
            <p className="cont">Contact</p>
            <p className="cont_exp">
              tel : 010-2320-0904 <br />
              mail : mirejiho@naver.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
