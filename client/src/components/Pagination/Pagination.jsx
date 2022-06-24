import React from "react";
import "./Pagination.css";

export default function Pagination({
  characters,
  charsByPage,
  paginated,
  currentPage,
  setCurrentPage,
}) {
  const pageNum = [];

  for (let i = 1; i <= Math.ceil(characters / charsByPage); i++) {
    pageNum.push(i);
  }

  return (
    <div className="pag-container">
      <div>
        <div className="div-list-container">
          <ul className="div-list-container-ul">
            {currentPage > 1 ? (
              <button
                className="custom-btn btn-7"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>
            ) : (
              " "
            )}
            {pageNum &&
              pageNum.map((e, i) => (
                <li
                  key={e}
                  className="div-list-container-ul-li"
                  onClick={() => paginated(e)}
                >
                  <label className="custom-btn btn-7">{currentPage + i}</label>
                </li>
              ))}
            {currentPage < pageNum.length ? (
              <button
                className="custom-btn btn-7"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            ) : (
              " "
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
