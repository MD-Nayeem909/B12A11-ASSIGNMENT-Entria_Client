import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import { FiEdit2, FiMoreVertical, FiSearch } from "react-icons/fi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const AllContestReport = () => {
  // ------------------------
  // SAMPLE DATA (Replace with API data)
  // ------------------------
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialData = [
    {
      id: "#C1001",
      creator: "Rasel Ahmed",
      date: "Jan 6, 2025",
      price: 4500,
      status: "Completed",
    },
    {
      id: "#C1002",
      creator: "Rakib Hossain",
      date: "Jan 8, 2025",
      price: 9800,
      status: "Completed",
    },
    {
      id: "#C1003",
      creator: "Abu Sufian",
      date: "12 Feb, 2025",
      price: 2000,
      status: "Ongoing",
    },
    {
      id: "#C1004",
      creator: "Jhankar Mahbub",
      date: "22 Dec, 2024",
      price: 8500,
      status: "Pending",
    },
    {
      id: "#C1005",
      creator: "Mahadi Hasan",
      date: "10 Jan, 2025",
      price: 3000,
      status: "Rejected",
    },
  ];

  // ------------------------
  // States
  // ------------------------
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  // ------------------------
  // Filter + Search
  // ------------------------
  const filteredData = useMemo(() => {
    return initialData.filter((item) =>
      item.creator.toLowerCase().includes(search.toLowerCase())
    );
  }, [initialData, search]);

  // ------------------------
  // Sorting
  // ------------------------
  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];

      if (fieldA < fieldB) return sortDirection === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortField, sortDirection]);

  // ------------------------
  // Pagination
  // ------------------------
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
    Completed: "bg-green-100 text-green-600",
    Ongoing: "bg-blue-100 text-blue-600",
    Pending: "bg-orange-100 text-orange-600",
    Rejected: "bg-red-100 text-red-600",
  };

  return (
    <div className="bg-base-100 p-6 shadow-lg rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">All Contest Reports</h2>

        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-3 z-10 top-3 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search creator..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered outline-none pl-10 w-64 rounded-xl bg-base-200"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-gray-600">
              <th onClick={() => toggleSort("id")} className="cursor-pointer">
                ID
              </th>
              <th
                onClick={() => toggleSort("creator")}
                className="cursor-pointer"
              >
                Creator
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
              <tr key={i} className="transition hover:bg-base-200">
                <td>{row.id}</td>
                <td>{row.creator}</td>
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
                    <button className="flex items-center gap-1 text-gray-400 cursor-pointer">
                      <FiEdit2 size={16} /> Edit
                    </button>
                    <FiMoreVertical size={18} className="cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-6">
        <button
          className="btn btn-outline flex items-center gap-2"
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
                  ? "bg-success text-success-content font-bold"
                  : "text-gray-600"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          className="btn btn-outline flex items-center gap-2"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next <HiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default AllContestReport;
