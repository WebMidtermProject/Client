import { React, useState, useEffect } from "react";

import GridWrapLayout from "../layout/GridWrapLayout";
import Pagination from "../pagination/Pagination";
import Loading from "../loading/Loading";

import "./css/MyPresentationPage.css";

import useQuery from "../../hooks/useQuery";

const MyPresentationPage = (props) => {
  const presentations = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ];
  const [loading, setLoading] = useState(false);

  const query = useQuery();
  const page = query.get("page") || 1;

  const [currentPage, setCurrentPage] = useState(page);
  console.log(currentPage);

  /*   const groupID = props.groupID; */
  const changePageDisplay = (page) => {
    setCurrentPage(page);
  };

  const totalItem = 9;
  const totalPage = Math.ceil(presentations.length / totalItem);
  const start = (currentPage - 1) * totalItem;
  const end = start + totalItem;

  const pagination = [];
  for (let i = 0; i < totalPage; i++) {
    pagination.push(i + 1);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, Math.floor(Math.random() * 1000) + 500);
  }, []);

  return (
    <div className="page--my-presentation">
      <div className="page__header">
        <h4 className="page__title">My presentations</h4>
      </div>

      <div className="page__content">
        <GridWrapLayout data={presentations.slice(start, end)}></GridWrapLayout>
      </div>

      <div className="page__footer">
        <Pagination
          pagination={pagination}
          changePage={changePageDisplay}
        ></Pagination>
      </div>
      {loading && <Loading></Loading>}
    </div>
  );
};
export default MyPresentationPage;
