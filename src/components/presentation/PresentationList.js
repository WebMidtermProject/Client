import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Presentation from "./Presentation";

import "./css/PresentationList.css";

const PresentationList = (props) => {
  const presentations = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  const groupID = props.groupID;

  let page = parseInt(props.page);
  page = page > 0 ? page : 1;

  const totalItem = 8;
  const totalPage = Math.ceil(presentations.length / totalItem);
  const start = (page - 1) * totalItem;
  const end = start + totalItem;

  const pagination = [];
  for (let i = 0; i < totalPage; i++) {
    pagination.push(i + 1);
  }

  const [currentPage, setCurrentPage] = useState(page);

  const handleChoosePage = (page) => {
    setCurrentPage(page);
  };

  const handlePresentationEditClick = (presentationId) => {
    window.location.replace(
      `/group/${groupID}/edit-presentation/${presentationId}`
    );
  };

  const handleCreatePresentation = () => {
    // call create api
    window.location.replace(`/group/${groupID}/create-presentation`);
  };

  return (
    <div className="presentation__list">
      <div className="row--create">
        <input
          className="btn-create-presentation"
          type="button"
          value="New presentation"
          onClick={handleCreatePresentation}
        />
      </div>
      <Row>
        {presentations.slice(start, end).map((name, id) => {
          return (
            <Col
              className="presentation__item"
              key={id}
              onClick={() => handlePresentationEditClick(id)}
            >
              <Presentation name={name}></Presentation>
            </Col>
          );
        })}
      </Row>
      <Row>
        <ul className="presentation__pagination">
          {pagination.map((page) => {
            const pageUrl = `/group/${groupID}/presentations?page=${page}`;
            let cls = "presentation__pagination__item";
            if (currentPage === page) cls += " selected";
            return (
              <li
                className={cls}
                key={page}
                onClick={() => {
                  handleChoosePage(page);
                }}
              >
                <div className="presentation__pagination__item--circle">
                  <a
                    className="presentation__pagination__item--number"
                    href={pageUrl}
                  >
                    {page}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </Row>
    </div>
  );
};
export default PresentationList;
