import { ArrowLeft, ArrowRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, goToPage }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const totalPages = Math.ceil(data.length / limit);
  return (
    <div className="flex justify-center items-center-10">
      <div className="join">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="btn join-item rounded-l-full"
          disabled={currentPage === 1}
        >
          <ArrowLeft />
        </button>
        {Array.from({ length: totalPages || 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`join-item btn ${
              currentPage === index + 1 ? "bg-primary text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          className="btn join-item rounded-r-full"
          disabled={currentPage === totalPages}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
