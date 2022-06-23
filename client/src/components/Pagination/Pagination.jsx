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
        {currentPage > 1 ? (
          <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        ) : (
          " "
        )}
        <div className="div-list-container">
          <ul>
            {pageNum &&
              pageNum.map((e, i) => (
                <li key={e} onClick={() => paginated(e)}>
                  <label>{currentPage + i}</label>
                </li>
              ))}
          </ul>
        </div>
        {currentPage < pageNum.length ? (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
