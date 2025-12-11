import { useQuery } from "@tanstack/react-query";
import Button from "../../components/common/Button";
import NoContestFound from "../../components/ui/NoContestFound";
import axios from "axios";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Pagination from "../../components/common/Pagination";
import { useState } from "react";
import TabsWithFilter from "../../components/common/TabsWithFilter";
import { Link } from "react-router";

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
        <Link to="/create-contest-form">
          <Button>Create Contest</Button>
        </Link>
      </header>
      <main>
        {/* name of each tab group should be unique */}

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
          <TabsWithFilter contests={currentContests} />
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
