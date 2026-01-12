import ContestTableCard from "../../../components/ui/ContestTableCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Search, Filter, RefreshCw, Trash2, CheckCircle, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import Pagination2 from "../../../components/common/Pagination2";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2"; // ডিলিট কনফার্মেশনের জন্য

const ManageContests = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;

  const { data: contestsData = { results: [] }, isLoading, isRefetching } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure(`/contests`);
      return res.data;
    },
  });

  const allResults = contestsData?.results || [];

  const filteredData = useMemo(() => {
    return allResults.filter((c) => {
      const matchesTab = activeTab === "All" ? true : c.type === activeTab;
      const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [allResults, activeTab, search]);

 
  const totalPages = Math.ceil(filteredData.length / limit);
  const paginatedContests = filteredData.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  
  const contestTypes = useMemo(() => {
    return ["All", ...new Set(allResults.map((item) => item.type))];
  }, [allResults]);

  const createMutation = (url, method = 'patch', successMsg) => {
    return useMutation({
      mutationFn: (id) => axiosSecure[method](url(id)),
      onSuccess: () => {
        queryClient.invalidateQueries(["contests"]);
      },
    });
  };

  const confirmMutation = createMutation((id) => `/contests/${id}?status=confirm`);
  const rejectMutation = createMutation((id) => `/contests/${id}?status=reject`);
  const deleteMutation = createMutation((id) => `/contests/${id}`, 'delete');

  return (
    <div className="space-y-6 pb-10 p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
        <div>
          <h1 className="text-2xl font-black tracking-tighter uppercase">
            Manage <span className="text-primary">Contests</span>
          </h1>
          <p className="text-[11px] opacity-40 font-bold uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
            Total Found: {filteredData.length} Contests
          </p>
        </div>
        
        <button 
          onClick={() => queryClient.refetchQueries(["contests"])}
          className={`btn btn-circle btn-ghost ${isRefetching ? 'animate-spin' : ''}`}
        >
          <RefreshCw size={20} />
        </button>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="bg-base-100 p-4 rounded-xl border border-base-200 shadow-sm flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors" size={20} />
          <input
            type="text"
            placeholder="Search by contest title..."
            className="input input-bordered pl-12 w-full bg-base-200/50 border-none rounded-2xl focus:ring-2 ring-primary/20"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
          <Filter size={16} className="opacity-30 ml-2" />
          {contestTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                setActiveTab(type);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap
                ${activeTab === type 
                  ? "bg-primary text-primary-content shadow-lg shadow-primary/30" 
                  : "bg-base-200 hover:bg-base-300 opacity-60"}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* DATA TABLE AREA */}
      <div className="bg-base-100 rounded-xl border border-base-200 overflow-hidden shadow-sm min-h-100">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-96 gap-4">
             <span className="loading loading-bars loading-lg text-primary"></span>
             <p className="text-xs font-black opacity-30 uppercase tracking-[0.3em]">Loading Contests</p>
          </div>
        ) : (
          <div className="p-2">
            <ContestTableCard
              contests={paginatedContests}
              handleConfirm={(id) => confirmMutation.mutate(id)}
              handleReject={(id) => rejectMutation.mutate(id)}
              handleDelete={(id) => {
                 Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#6366f1",
                    cancelButtonColor: "#f43f5e",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) deleteMutation.mutate(id);
                  });
              }}
            />
            
            {filteredData.length === 0 && (
              <div className="text-center py-20 opacity-20">
                <Trash2 size={64} className="mx-auto mb-4" />
                <p className="text-xl font-black italic">No Contests Found</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination2
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default ManageContests;