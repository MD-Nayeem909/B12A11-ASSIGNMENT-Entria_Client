import { useQuery } from "@tanstack/react-query";
import Button from "../../components/common/Button";
import NoContestFound from "../../components/ui/NoContestFound";
import axios from "axios";
import ContestCard from "../../components/contest/ContestCard";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Pagination from "../../components/common/Pagination";
import { useState } from "react";

const AllContests = () => {
  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axios(
        import.meta.env.VITE_API_URL + "public/data.json"
      );
      return res.data;
    },
  });

  const { user } = useAuth();
  const navigate = useNavigate();
  function handleDetails(id) {
    // if (!user) return navigate("/auth/login");
    const matchingContest = contests.find((contest) => contest._id === id);
    navigate(`/contest-details/${id}`, { state: { contest: matchingContest } });
  }

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const totalPages = Math.ceil(contests.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const currentContests = contests.slice(startIndex, endIndex);
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <header className="flex items-center justify-between py-10">
        <div className="">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0">
            Browse All Contests
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl">
            Discover amazing creative contests and showcase your creativity
          </p>
        </div>
        <Button>Create Contest</Button>
      </header>
      <main>
        {/* name of each tab group should be unique */}
        <div className="flex justify-between">
          {" "}
          <div className="tabs font-semibold tabs-box w-fit mb-6">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab"
              aria-label="Active Contests"
              defaultChecked
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab"
              aria-label="Completed Contests"
            />
          </div>
          <div className="">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
        </div>

        {isLoading && (
          <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <LoadingSpinner />
          </div>
        )}

        {contests.length === 0 ? (
          <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <NoContestFound />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {currentContests.map((contest) => (
              <ContestCard
                key={contest._id}
                contest={contest}
                handleDetails={handleDetails}
              />
            ))}
          </div>
        )}
      </main>
      <footer>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          goToPage={goToPage}
        />
      </footer>
    </div>
  );
};

export default AllContests;
