import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Pagination2 = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-around items-center mt-6">
      <button
        className="btn btn-sm flex bg-primary text-primary-content items-center shadow gap-2 disabled:bg-[#ede9fe] disabled:text-[#a684ff] dark:disabled:bg-[#2f0d68] dark:disabled:text-[#8e51ff]"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <HiChevronLeft /> Previous
      </button>

      {/* pages */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition
                ${
                  currentPage === page
                    ? "bg-primary text-primary-content font-medium"
                    : "text-primary font-semibold"
                }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className="btn btn-sm flex items-center bg-primary text-primary-content shadow gap-2 disabled:bg-[#ede9fe] disabled:text-[#a684ff] dark:disabled:bg-[#2f0d68] dark:disabled:text-[#8e51ff]"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next <HiChevronRight />
      </button>
    </div>
  );
};

export default Pagination2;
