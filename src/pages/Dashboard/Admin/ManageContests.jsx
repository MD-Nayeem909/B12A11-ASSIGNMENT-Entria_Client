import ContestTableCard from "../../../components/ui/ContestTableCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import Pagination2 from "../../../components/common/Pagination2";
const ManageContests = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  /* =========================
     Fetch contests (paginated)
  ========================== */
  const { data = { results: [] } } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure(`/contests`);
      return res.data;
    },
    enabled: true,
  });

  const dataLength = data?.results?.length || 1;

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const totalPages = Math.ceil(dataLength / limit);
  const currentContests = data?.results?.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  /* =========================
     Mutations
  ========================== */
  const confirmMutation = useMutation({
    mutationFn: (id) => axiosSecure.patch(`/contests/${id}?status=confirm`),
    onSuccess: () => queryClient.invalidateQueries(["contests"]),
  });

  const rejectMutation = useMutation({
    mutationFn: (id) => axiosSecure.patch(`/contests/${id}?status=reject`),
    onSuccess: () => queryClient.invalidateQueries(["contests"]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => axiosSecure.delete(`/contests/${id}`),
    onSuccess: () => queryClient.invalidateQueries(["contests"]),
  });

  // Unique contestType list
  const contestTypes = useMemo(() => {
    const all = currentContests || [];
    return ["All", ...new Set(all.map((item) => item.type))];
  }, [currentContests]);

  const filteredContests = useMemo(() => {
    return currentContests
      ?.filter((c) => (activeTab === "All" ? true : c.type === activeTab))
      .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()));
  }, [currentContests, activeTab, search]);

  return (
    <div className="md:m-6 space-y-4">
      <h1 className="text-2xl font-semibold">
        {" "}
        Manage All Contest :{" "}
        <span className="font-bold">{filteredContests?.length}</span>{" "}
      </h1>

      {/* SEARCH + SHOW COUNT */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">
        <div className="flex gap-4 w-full">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search my Contests"
              className="input input-bordered bg-base-200 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute -top-1 w-5 m-3 text-gray-400 z-10" />
          </div>

          <div className="flex items-center gap-3">
            <select
              className="select select-bordered border focus:outline focus:ring-2 bg-base-200 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 w-25"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {contestTypes.map((contestType, index) => (
                <option key={index} value={contestType}>
                  {contestType}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <ContestTableCard
        contests={filteredContests}
        handleConfirm={(id) => confirmMutation.mutate(id)}
        handleReject={(id) => rejectMutation.mutate(id)}
        handleDelete={(id) => deleteMutation.mutate(id)}
      />
      <Pagination2
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ManageContests;
