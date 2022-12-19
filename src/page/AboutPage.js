import { React, useEffect, useState } from "react";

import GradientCard from "../components/container/GradientCard";
import Loading from "../components/loading/Loading";

import "./css/Page.css";
import "./css/AboutPage.css";

const AboutPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, Math.floor(Math.random() * 1000) + 500);
  }, []);
  return (
    <div className="page--about">
      <div className="page__content">
        <GradientCard h="100%" mw="1200px">
          <div className="member__list--outside">
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
                  src="../../public/img/member_img_1.jpg"
                  alt=""
                />
                <div className="member_text">
                  <h2 className="member__name">Nguyễn Tân Việt</h2>
                  <span className="member__id">19127629</span>
                </div>
              </div>
            </div>
          </div>
        </GradientCard>
      </div>
      {loading && <Loading></Loading>}
    </div>
  );
};

export default AboutPage;
