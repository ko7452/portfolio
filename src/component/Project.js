import React from "react";
import "./Project.css";

import Kmook from "../images/kmook.png";
import portfolio from "../images/portfolio.png";
import youtubeClone from "../images/youtubeClone.png";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Project = () => {
  // 기능 구현 로직
  return (
    <div id="project">
      <div class="Project">
        <h1>Project</h1>
        <div class="project-box-wraper">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={portfolio} />
            <Card.Body>
              <Card.Title>포트폴리오</Card.Title>
              <Card.Text>
                해당 페이지로 저를 소개하는 포트폴리오 입니다.
              </Card.Text>
              <Button
                href="https://github.com/ko7452/portfolio"
                variant="primary"
              >
                Go repositories
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Kmook} />
            <Card.Body>
              <Card.Title>K-Mooc 커뮤니티</Card.Title>
              <Card.Text>
                인터넷 강의를 사용하거나 제공하고자 하는 사용자들에게 소통의
                서비스를 제공합니다.
              </Card.Text>
              <Button
                href="https://github.com/ko7452/KMC-Client"
                variant="primary"
              >
                Go repositories
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={youtubeClone} />
            <Card.Body>
              <Card.Title>YouTube 클론코딩</Card.Title>
              <Card.Text>
                해당 프로젝트는 <br />
                현재 진행중입니다.
              </Card.Text>
              <Button
                href="https://github.com/ko7452/youtube-clone"
                variant="primary"
              >
                Go repositories
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Project;
