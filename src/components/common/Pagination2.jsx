import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Pagination2 = ({ currentPage, totalPages, setCurrentPage }) => {
  // পেজ নম্বর জেনারেট করার লজিক (সর্বোচ্চ ৫টি নম্বর দেখাবে)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // মোবাইলে এটি আরও কম করা যেতে পারে

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-10 px-4">
      {/* বাম পাশের টেক্সট - মোবাইলে লুকানো থাকতে পারে */}
      <p className="text-sm font-medium opacity-60 hidden md:block">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex items-center gap-1 sm:gap-2">
        {/* Previous Button */}
        <button
          className="btn btn-sm sm:btn-md btn-ghost border border-base-300 shadow-sm disabled:opacity-30"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <HiChevronLeft size={20} />
          <span className="hidden sm:inline ml-1">Prev</span>
        </button>

        {/* Page Numbers */}
        <div className="flex gap-1">
          {getPageNumbers()[0] > 1 && (
            <span className="px-2 self-end pb-1 opacity-50">...</span>
          )}

          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300
                ${
                  currentPage === page
                    ? "bg-primary text-primary-content shadow-lg shadow-primary/30"
                    : "hover:bg-base-200 text-base-content/70"
                }`}
            >
              {page}
            </button>
          ))}

          {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
            <span className="px-2 self-end pb-1 opacity-50">...</span>
          )}
        </div>

        {/* Next Button */}
        <button
          className="btn btn-sm sm:btn-md btn-ghost border border-base-300 shadow-sm disabled:opacity-30"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <span className="hidden sm:inline mr-1">Next</span>
          <HiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Pagination2;
