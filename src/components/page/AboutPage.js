import React from "react";

import GradientCard from "../container/GradientCard";

import "./css/Page.css";
import "./css/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="page">
      <h4 className="page__title">About</h4>
      <GradientCard className="about card--lg">
        <div className="member__list">
          <div className="member__item">
            <img
              className="member__img"
              src="../../public/img/member_img_1.jpg"
              alt=""
            />
            <div className="member_text">
              <h2 className="member__name">Nguyễn Phan Vũ</h2>
              <span className="member__id">19127633</span>
            </div>
          </div>
          <div className="member__item">
            <img
              className="member__img"
              src="../../public/img/member_img_2.jpg"
              alt=""
            />

            <div className="member_text">
              <h2 className="member__name">Nguyễn Tân Việt</h2>
              <span className="member__id">19127629</span>
            </div>
          </div>
        </div>
      </GradientCard>
    </div>
  );
};

export default AboutPage;
