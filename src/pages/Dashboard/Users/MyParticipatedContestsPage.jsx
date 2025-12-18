import { Eye, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const MyParticipatedContestsPage = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialData = [
    {
      contest: "#C1001",
      client: "Rasel Ahmed",
      date: "Jan 6, 2025",
      price: 4500,
      status: "Completed",
    },
    {
      contest: "#C1002",
      client: "Rakib Hossain",
      date: "Jan 8, 2025",
      price: 9800,
      status: "Completed",
    },
    {
      contest: "#C1003",
      client: "Abu Sufian",
      date: "12 Feb, 2025",
      price: 2000,
      status: "Ongoing",
    },
    {
      contest: "#C1004",
      client: "Jhankar Mahbub",
      date: "22 Dec, 2024",
      price: 8500,
      status: "Pending",
    },
    {
      contest: "#C1005",
      client: "Mahadi Hasan",
      date: "10 Jan, 2025",
      price: 3000,
      status: "Rejected",
    },
  ];

  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const filteredData = useMemo(() => {
    return initialData.filter((item) =>
      item.client.toLowerCase().includes(search.toLowerCase())
    );
  }, [initialData, search]);

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
    Completed: "bg-success text-success-content",
    Ongoing: "bg-info text-info-content",
    Pending: "bg-warning text-warning-content",
    Rejected: "bg-error text-error-content",
  };
  return (
    <div className="bg-base-100 p-6 md:m-6 shadow rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <h2 className="text-2xl font-semibold">My Participated Contests</h2>

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
                <td>{row.contest}</td>
                <td>{row.client}</td>
                <td>{row.date}</td>
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
                    <button className="flex btn btn-sm items-center gap-1">
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
                <h3 className="font-semibold text-sm">{row.contest}</h3>
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
      <div className="flex justify-between items-center mt-6">
        <button
          className="btn flex bg-primary text-primary-content items-center shadow gap-2 disabled:bg-[#ede9fe] disabled:text-[#a684ff] dark:disabled:bg-[#2f0d68] dark:disabled:text-[#8e51ff]"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          <HiChevronLeft /> Previous
        </button>

        {/* pages */}
        <div className="flex gap-3">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded-full ${
                currentPage === i + 1
                  ? "bg-primary text-primary-content font-medium"
                  : "text-primary font-semibold"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          className="btn flex items-center bg-primary text-primary-content shadow gap-2 disabled:bg-[#ede9fe] disabled:text-[#a684ff] dark:disabled:bg-[#2f0d68] dark:disabled:text-[#8e51ff]"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next <HiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MyParticipatedContestsPage;
