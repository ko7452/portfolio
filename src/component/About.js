import React from "react";
import "./About.css";

import Photo from "../images/Photo.png";

const About = () => {
  // 기능 구현 로직
  return (
    <div id="about">
      <div class="About">
        <h1>ABOUT</h1>
        <div class="about-contact-box-wraper">
          <div class="about-contact-box">
            <div class="about-info-box">
              <div class="about-contact-box-wraper02">
                <div>
                  <h2>신입 Front-End 개발자</h2>
                  <h3>고윤혁</h3>
                  <p>HP: 010 - 9800 - 5226</p>
                  <p>e-mail: sksgur3217@gmail.com</p>
                </div>
                <div>
                  <img src={Photo} width="162.61" height="215.92" />
                </div>
              </div>
            </div>
          </div>
          <div class="about-contact-box">
            <div class="about-info-box">
              작성중...
              {/* 안녕하세요 프론트엔드 개발자 고윤혁 입니다. <br />
              저는 비전공자이지만, 삶 속에서 인터넷과 모바일을 통한 서비스 안의
              <br />
              시각적인 즐거움과 기능들에 대하여 개발에 호기심이 생겼고
              <br />
              Javascript를 이용해 UI 개발하는데 흥미가 생겨 개발자로 커리어를
              <br />
              전향하게 되었습니다. <br />
              <br />
              Javascript 환경에서 주도적으로 개발을 진행 할 수 있으며,
              <br />
              백엔드의 개념을 이해하기 위해 학습하였기 때문에 담당자들과
              <br />
              수월한 협업이 가능합니다. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
