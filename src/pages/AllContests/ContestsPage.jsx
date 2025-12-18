import { useMemo, useState } from "react";
import SearchTabs from "../../components/contest/SearchTabs/SearchTabs";
import ContestHeader from "../../components/contest/ContestHeader/AllContestsHeader";
import ContestCard from "../../components/contest/ContestsCards/ContestCard";
import EmptyState from "../../components/contest/EmptyState/EmptyState";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Pagination from "../../components/common/Pagination";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ContestsPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { data: contestsData = [], isLoading } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure(import.meta.env.VITE_BASE_URL + "contests?status=approved");
      return res.data.results;
    },
  });
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const totalPages = Math.ceil(contestsData.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const currentContests = contestsData.slice(startIndex, endIndex);
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Unique contestType list
  const contestTypes = [
    "All",
    ...new Set(currentContests.map((item) => item.type)),
  ];

  const filteredContests = useMemo(() => {
    return currentContests
      .filter((c) => (activeTab === "All" ? true : c.type === activeTab))
      .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()));
  }, [activeTab, currentContests, search]);

  function handleDetails(id) {
    if (!user) return navigate("/auth/login");
    const matchingContest = filteredContests.find(
      (contest) => contest._id === id
    );
    navigate(`/contest-details/${id}`, { state: { contest: matchingContest } });
  }

  return (
    <section className="max-w-7xl mx-auto md:px-4 py-10">
      <div>
        <ContestHeader />
      </div>

      <div>
        <SearchTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          contestTypes={contestTypes}
          search={search}
          setSearch={setSearch}
        />
        {isLoading && (
          <div className="h-96 flex items-center justify-center rounded-lg">
            <LoadingSpinner />
          </div>
        )}
      </div>

      {filteredContests?.length === 0 && (
        <div className="">
          <EmptyState filteredContests={filteredContests} />
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {filteredContests?.map((contest) => (
          <ContestCard
            key={contest._id}
            handleDetails={handleDetails}
            user={user}
            contest={contest}
          />
        ))}
      </div>

      <div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          goToPage={goToPage}
        />
      </div>
    </section>
  );
};

export default ContestsPage;
