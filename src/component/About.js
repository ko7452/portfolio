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
              많은 사람들이 웹과 앱을 통해 다양한 서비스를 이용하며 삶의 질이
              <br />
              많이 높아졌습니다. 저 또한 웹과 앱을 통해 삶 속에 다양한 서비스를
              <br />
              이용하며 삶의 질이 높아졌고, 다양한 서비스를 만들어보고 싶다는
              <br />
              생각을 했습니다. 실제로 부트캠프를 통해 개발을 배우며 개발의
              <br /> 즐거움을 느꼈고 개발자로 커리어 전환을 했습니다.
              <br />
              <br />
              Javascript를 통해 주도적으로 개발을 할 수 있으며, 프론트엔드에서
              <br />
              기능 뿐만이 아니라 견고한 UI와 기억에 남는 UX를 만들기 위해
              노력합니다. <br />
              또한 백엔드를 이해하기 위해 서버 개념에 대해 학습하였기 때문에
              동료들과 <br />
              함께 소통하며 협업이 가능합니다.
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
