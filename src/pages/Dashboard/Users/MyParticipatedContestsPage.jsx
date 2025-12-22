import { Eye, Search } from "lucide-react";
import { useState, useMemo } from "react";
import Pagination2 from "../../../components/common/Pagination2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";

const MyParticipatedContestsPage = () => {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const perPage = 10;

  const axiosSecure = useAxiosSecure();

  const { data: contestsData = [] } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure(`contests?participated=${user.uid}`);
      return res.data.results;
    },
  });
  function readableDate(date) {
    return new Date(date).toLocaleDateString();
  }

  const filteredData = useMemo(() => {
    return contestsData.length > 0
      ? contestsData?.filter((item) =>
          item.title?.toLowerCase().includes(search.toLowerCase())
        )
      : [];
  }, [contestsData, search]);
  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];

      if (fieldA < fieldB) return sortDirection === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortField, sortDirection]);

  const totalPages = Math.ceil(sortedData.length / perPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // ------------------------
  // Status Badge Color Map
  // ------------------------
  const statusColors = {
    approved: "bg-success text-success-content",
    ongoing: "bg-info text-info-content",
    pending: "bg-warning text-warning-content",
    rejected: "bg-error text-error-content",
  };
  return (
    <div className="bg-base-100 p-6 md:m-6 shadow rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <h2 className="text-2xl font-semibold">
          My Participated Contests : {contestsData.length}
        </h2>

        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-3 top-3 z-10 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search creator..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input bg-base-200 input-bordered  pl-10 w-full md:w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
          />
        </div>
      </div>

      {/* TABLE (Desktop only) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="">
              <th
                onClick={() => toggleSort("contest")}
                className="cursor-pointer"
              >
                Contest Name
              </th>
              <th
                onClick={() => toggleSort("client")}
                className="cursor-pointer"
              >
                Client
              </th>
              <th onClick={() => toggleSort("date")} className="cursor-pointer">
                Date
              </th>
              <th
                onClick={() => toggleSort("price")}
                className="cursor-pointer"
              >
                Price
              </th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, i) => (
              <tr key={i} className="hover:bg-base-200 transition">
                <td>{row.title}</td>
                <td>{row.client}</td>
                <td>{readableDate(row.deadline)}</td>
                <td>${row.price.toFixed(2)}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      statusColors[row.status]
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        navigate(`/contest-details/${row._id}`, {
                          state: { contest: row },
                        })
                      }
                      className="flex btn btn-sm items-center gap-1"
                    >
                      <Eye size={16} /> View Contest
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {paginatedData.map((row, i) => (
          <div key={i} className="bg-base-200 rounded-lg p-4 shadow-sm">
            {/* Top row */}
            <div className="flex flex-col justify-between gap-3">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm">{row.title}</h3>
                <p className="font-semibold text-xs">@{row.client}</p>
              </div>
            </div>

            {/* Status */}
            <div className="flex justify-between items-center mt-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  statusColors[row.status]
                }`}
              >
                {row.status}
              </span>
              <p className="font-medium text-sm">${row.price.toFixed(2)} USD</p>
            </div>

            {/* Action */}
            <div className="mt-4">
              <button className="flex btn btn-sm items-center bg-base-100 gap-1 w-full">
                <Eye size={16} /> View Contest
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}

      <Pagination2
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default MyParticipatedContestsPage;
