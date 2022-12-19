import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import GridWrapLayout from "../layout/GridWrapLayout";
import Loading from "../loading/Loading";

import "./css/MyPresentationPage.css";

const MyPresentationPage = (props) => {
  const [loading, setLoading] = useState(false);
  const presentations = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  /*   const groupID = props.groupID; */

  let page = parseInt(props.page);
  page = page > 0 ? page : 1;

  const totalItem = 9;
  const totalPage = Math.ceil(presentations.length / totalItem);
  const start = (page - 1) * totalItem;
  const end = start + totalItem;

  const pagination = [];
  for (let i = 0; i < totalPage; i++) {
    pagination.push(i + 1);
  }

  return (
    <div className="page--my-presentation">
      <div className="page__header">
        <h4 className="page__title">My presentations</h4>
      </div>

      <div className="page__content">
        <GridWrapLayout data={presentations.slice(start, end)}></GridWrapLayout>
      </div>

      <div className="page__footer"></div>
      {loading && <Loading></Loading>}
    </div>
  );
};
export default MyPresentationPage;
