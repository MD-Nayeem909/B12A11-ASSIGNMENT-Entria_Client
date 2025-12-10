import React, { useState } from "react";

const Pagination = ({ currentPage, totalPages, goToPage }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const totalPages = Math.ceil(data.length / limit);
  return (
    <div className="flex justify-center items-center my-10">
      <div className="join">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="join-item btn"
          disabled={currentPage === 1}
        >
          {"<<"}
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`join-item btn ${
              currentPage === index + 1 ? "btn-active" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          className="join-item btn"
          disabled={currentPage === totalPages}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
