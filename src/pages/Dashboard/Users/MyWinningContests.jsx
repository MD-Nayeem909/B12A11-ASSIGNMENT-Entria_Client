import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import Pagination2 from "../../../components/common/Pagination2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyWinningContests = () => {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const axiosSecure = useAxiosSecure();
  const perPage = 10;

  const { data: contestsData = [] } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure("contests/my_winned_contests");
      console.log(res.data);
      return res.data?.winnerContests;
    },
    enabled: true,
  });

  function readableDate(date) {
    return new Date(date).toLocaleDateString();
  }

  const filteredContests = useMemo(() => {
    if (!Array.isArray(contestsData)) return [];
    return contestsData?.filter((c) =>
      c.contest?.title?.toLowerCase().includes(search?.toLowerCase())
    );
  }, [contestsData, search]);

  const totalPages = Math.ceil((filteredContests.length || 0) / perPage);
  const paginatedData = filteredContests.slice(
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

  return (
    <div className="bg-base-100 p-6 md:m-6 shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <h2 className="text-2xl font-semibold">My Winning Contests</h2>

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

      {/* TABLE (Desktop) */}
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
              <th onClick={() => toggleSort("date")} className="cursor-pointer">
                Date
              </th>
              <th
                onClick={() => toggleSort("prize")}
                className="cursor-pointer"
              >
                Prize
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, i) => (
              <tr key={i} className="">
                <td>{row.contest?.title || "N/A"}</td>
                <td>{readableDate(row.createdAt)}</td>
                <td>${row.prizeMoney}</td>
                <td>
                  <div className="flex w-full">
                    <button className="btn">Manage Files</button>

                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="btn">
                        ▾
                      </label>

                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-45"
                      >
                        <li>
                          <a>Chat</a>
                        </li>
                        <li>
                          <a>View Entry</a>
                        </li>
                      </ul>
                    </div>
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
                <h3 className="font-semibold text-sm">{row.contest?.title || "N/A"}</h3>
                <p className="font-semibold text-xs">@{row.winner?.name}</p>
              </div>
            </div>

            {/* Status */}
            <div className="mt-2">
              <p className="font-medium text-sm text-right">
                ${row.prizeMoney} USD
              </p>
            </div>

            {/* Action */}
            <div className="mt-4">
              <div className="flex gap-1 w-full">
                <button className="btn btn-sm w-full flex-1 bg-base-100">
                  Manage Files
                </button>

                <div className="dropdown dropdown-end btn btn-sm">
                  <label tabIndex={0} className="btn btn-sm">
                    ▾
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow rounded-box w-52 bg-base-100"
                  >
                    <li>
                      <a>Chat</a>
                    </li>
                    <li>
                      <a>View Entry</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <Pagination2
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MyWinningContests;
