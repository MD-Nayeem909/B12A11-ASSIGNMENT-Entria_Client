import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useMemo } from "react";
import { Link } from "react-router";
import Button from "../../components/common/Button";
import NoContestFound from "../../components/ui/NoContestFound";
import Pagination from "../../components/common/Pagination";
import TabsWithFilter from "../../components/common/TabsWithFilter";
import ContestCardSkeleton from "../../components/contest/ContestCardSkeleton";

const AllContests = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}contests?status=approved`
      );
      return res.data.results || res.data;
    },
  });
  const filteredContests = useMemo(() => {
    if (activeTab === "All") return contests;
    return contests.filter((contest) => contest.type === activeTab);
  }, [contests, activeTab]);

  const totalPages = Math.ceil(filteredContests.length / limit);
  const currentContests = filteredContests.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 min-h-screen">
      <header className="flex flex-col md:flex-row md:items-center justify-between py-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Browse All Contests
          </h2>
          <p className="text-base-content/70 text-lg mt-2 max-w-2xl">
            Discover amazing creative contests and showcase your talent to the
            world.
          </p>
        </div>
        <Link to="/create-contest-form">
          <Button className="btn-primary shadow-lg">Create Contest</Button>
        </Link>
      </header>

      <main className="mb-20">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <ContestCardSkeleton key={index} />
            ))}
          </div>
        ) : contests.length === 0 ? (
          <NoContestFound />
        ) : (
          <>
            <TabsWithFilter
              contests={currentContests}
              onTabChange={handleTabChange}
              activeTab={activeTab}
            />
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  goToPage={(page) => setCurrentPage(page)}
                />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default AllContests;
