import { React, useState } from "react";
import { Link } from "react-router-dom";

import "./css/Pagination.css";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(props.page);

  const handleChoosePage = (page) => {
    setCurrentPage(page);
    props.changePage(page);
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {props.pagination.map((page) => {
          const pageUrl = `/my-presentations?page=${page}`;
          let cls = "pagination__item";
          if (currentPage === page) cls += " selected";
          return (
            <li
              className={cls}
              key={page}
              onClick={() => {
                handleChoosePage(page);
              }}
            >
              <div className="pagination__item--circle">
                <Link className="pagination__item--number" to={pageUrl}>
                  {page}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
