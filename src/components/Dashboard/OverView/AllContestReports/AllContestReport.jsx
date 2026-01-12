import {
  Search,
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
  Download,
} from "lucide-react";
import { useState, useMemo } from "react";
import { FiEdit2, FiMoreVertical, FiEye } from "react-icons/fi";
import Pagination2 from "../../../common/Pagination2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { motion, AnimatePresence } from "framer-motion";

const AllContestReport = () => {
  const axiosSecure = useAxiosSecure();

  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axiosSecure("admin/reports");
      return res.data;
    },
  });

  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 7;

  // Search Logic
  const filteredData = useMemo(() => {
    return contests.filter(
      (item) =>
        item.creatorId?.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [contests, search]);

  // Sort Logic
  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      let fieldA = sortField === "creator" ? a.creatorId?.name : a[sortField];
      let fieldB = sortField === "creator" ? b.creatorId?.name : b[sortField];

      if (fieldA < fieldB) return sortDirection === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortField, sortDirection]);

  // Pagination Logic
  const totalPages = Math.ceil(sortedData.length / perPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  console.log(paginatedData);

  const toggleSort = (field) => {
    setSortDirection(
      sortField === field && sortDirection === "asc" ? "desc" : "asc"
    );
    setSortField(field);
  };

  const statusColors = {
    Completed: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    Ongoing: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    Pending: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    Rejected: "bg-rose-500/10 text-rose-600 border-rose-500/20",
  };

  const SortIcon = ({ field }) => {
    if (sortField !== field)
      return <ArrowUpDown size={14} className="ml-1 opacity-30" />;
    return sortDirection === "asc" ? (
      <ChevronUp size={14} className="ml-1 text-primary" />
    ) : (
      <ChevronDown size={14} className="ml-1 text-primary" />
    );
  };

  return (
    <div className="bg-base-100 rounded-xl border border-base-200 overflow-hidden shadow-sm">
      {/* Header Section */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-base-200 bg-base-200/20">
        <div>
          <h2 className="text-xl md:text-2xl font-black tracking-tighter">
            CONTEST <span className="text-primary">REPORTS</span>
          </h2>
          <p className="text-xs opacity-50 font-bold uppercase tracking-widest mt-1">
            Admin Management Console
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral group-focus-within:text-primary transition-colors z-10"
              size={18}
            />
            <input
              type="text"
              placeholder="Search creators..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input bg-base-200 input-bordered  pl-10 w-full md:w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ease-in-out"
            />
          </div>
          <button className="btn btn-square btn-outline border-base-300 rounded-2xl hover:bg-primary hover:border-primary transition-all">
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="table w-full border-separate border-spacing-y-2 px-6">
          <thead>
            <tr className="text-[11px] font-black uppercase tracking-[0.15em] text-base-content/40 border-none">
              <th className="bg-transparent">#</th>
              <th
                onClick={() => toggleSort("creator")}
                className="cursor-pointer bg-transparent hover:text-primary transition-colors"
              >
                <div className="flex items-center">
                  Creator <SortIcon field="creator" />
                </div>
              </th>
              <th
                onClick={() => toggleSort("createdAt")}
                className="cursor-pointer bg-transparent hover:text-primary"
              >
                <div className="flex items-center">
                  Date <SortIcon field="createdAt" />
                </div>
              </th>
              <th
                onClick={() => toggleSort("prize")}
                className="cursor-pointer bg-transparent hover:text-primary"
              >
                <div className="flex items-center">
                  Prize <SortIcon field="prize" />
                </div>
              </th>
              <th className="bg-transparent text-center">Status</th>
              <th className="bg-transparent text-right hidden">Actions</th>
            </tr>
          </thead>

          <tbody className="space-y-4">
            <AnimatePresence mode="popLayout">
              {paginatedData.map((row, i) => (
                <motion.tr
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={row._id}
                  className="group bg-base-200/30 hover:bg-base-200/60 transition-all"
                >
                  <td className="font-bold opacity-30">
                    {(currentPage - 1) * perPage + i + 1}
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-10 h-10 rounded-xl ring-2 ring-primary/5">
                          <img
                            src={
                              row.creatorId?.image ||
                              "https://i.ibb.co/mJR9zN1/user.png"
                            }
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-sm tracking-tight">
                          {row.creatorId?.name}
                        </p>
                        <p className="text-[10px] opacity-50 font-medium">
                          {row.creatorId?.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-sm font-medium opacity-70">
                    {new Date(row.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="font-black text-sm text-primary">
                    ${row.prize?.toLocaleString()}
                  </td>
                  <td className="text-center">
                    <span
                      className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
                        statusColors[row.status] ||
                        "bg-base-200 text-success border-base-300"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="text-right hidden">
                    <div className="flex items-center justify-end gap-2">
                      <button className="btn btn-ghost btn-xs rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
                        <FiEye size={16} />
                      </button>
                      <button className="btn btn-ghost btn-xs rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
                        <FiEdit2 size={16} />
                      </button>
                      <button className="btn btn-ghost btn-xs rounded-lg">
                        <FiMoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>

        {/* Empty State */}
        {!isLoading && paginatedData.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 opacity-30">
            <Search size={48} className="mb-4" />
            <p className="text-lg font-bold italic">
              No matching reports found
            </p>
          </div>
        )}
      </div>

      {/* PAGINATION AREA */}
      <div className="p-6 border-t border-base-200 bg-base-200/10">
        <Pagination2
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default AllContestReport;
