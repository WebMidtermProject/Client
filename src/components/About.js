import React from "react";
import { Container } from "react-bootstrap";

import "../css/About.css";
const About = () => {
  return (
    <Container className="about-us">
      <div className="all-members">
        <div className="member">
          <div className="member_img">
            <img src="../../public/img/member_img_1.jpg" alt="" />
          </div>

          <div className="member_text">
            <h2 className="member__name">Nguyễn Phan Vũ</h2>
            <span className="member__id">19127633</span>
          </div>
        </div>
        <div className="member">
          <div className="member_img">
            <img src="../../public/img/member_img_2.jpg" alt="" />
          </div>

          <div className="member_text">
            <h2 className="member__name">Nguyễn Tân Việt</h2>
            <span className="member__id">19127629</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
