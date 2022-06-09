import React from "react";
import './Pagination.css'

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
    <div className='pag-container'>
      <div>
        {currentPage > 1 ? (
          <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        ) : (
          " "
        )}
        {pageNum &&
          pageNum.map((e, i) => (
            <label key={e} onClick={() => paginated(e)}>
              {" "}
              {currentPage + i}{" "}
            </label>
          ))}
        {currentPage < pageNum.length ? (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
