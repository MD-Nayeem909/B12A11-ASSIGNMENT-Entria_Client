import { ArrowLeft, ArrowRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, goToPage }) => {
  const handlePageChange = (page) => {
    goToPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center my-12">
      <div className="join shadow-sm border border-base-300 rounded-full overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="btn btn-ghost join-item px-4 hover:bg-base-200"
          disabled={currentPage === 1}
        >
          <ArrowLeft size={18} />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`join-item btn btn-md border-none ${
                currentPage === pageNumber
                  ? "btn-primary text-white"
                  : "btn-ghost hover:bg-base-200"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="btn btn-ghost join-item px-4 hover:bg-base-200"
          disabled={currentPage === totalPages}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
