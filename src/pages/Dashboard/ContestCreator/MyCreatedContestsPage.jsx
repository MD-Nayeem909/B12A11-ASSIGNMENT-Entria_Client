import { useState } from "react";
import { Edit, Search, Trash2, Users } from "lucide-react";
import StatusBadge from "../../../components/Dashboard/ContestCreator/MyCreatedContest/StatusBadge";
import { Link, useNavigate } from "react-router";
import Pagination2 from "../../../components/common/Pagination2";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const MyCreatedContestsPage = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["my_contests"],
    queryFn: async () => {
      const res = await axiosSecure(
        import.meta.env.VITE_BASE_URL + "creator/contests/my_contests"
      );
      return res.data;
    },
  });

  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`contests/${id}`
      );
      toast.success(res.data.message);
      return res.data;
    },
    onSuccess: () => {
      // refetch my contests
      queryClient.invalidateQueries(["my_contests"]);
    },
  });

  const handleView = (id) => {
    navigate(`/dashboard/submitted_tasks/${id}`);
  };

  const handleEdit = (id, state) => {

    navigate(`/dashboard/create_contest_form?contestId=${id}`, {
      state: { contest: state },
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This contest will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  const filtered = contests.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const perPage = 10;
  const totalPages = Math.ceil(filtered.length / perPage);

  const paginatedData = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const statusColors = {
    Completed: "bg-success text-success-content",
    Ongoing: "bg-info text-info-content",
    Pending: "bg-warning text-warning-content",
    Rejected: "bg-error text-error-content",
  };

  return (
    <div className="mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">My Created Contests</h1>

      {/* SEARCH + SHOW COUNT */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">
        <Link
          to="/dashboard/create_contest_form"
          className="btn btn-primary w-full md:w-fit"
        >
          Create Contest
        </Link>
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
            <select className="select select-bordered border focus:outline focus:ring-2 bg-base-200 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 w-25">
              <option>All types</option>
              <option>Design</option>
              <option>Writing</option>
              <option>Ideas</option>
            </select>
          </div>
        </div>
      </div>

      <div className="">
        {/* TABLE (Desktop only) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Contest Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Submissions</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedData.map((c) => (
                <tr key={c._id}>
                  <td>{c.title}</td>
                  <td>{c.type}</td>
                  <td>
                    <StatusBadge status={c.status} />
                  </td>
                  <td>
                    {/* ALWAYS SHOW: SEE SUBMISSIONS */}
                    <button
                      onClick={() => handleView(c._id)}
                      className="btn btn-xs btn-primary flex justify-center items-center"
                    >
                      <Users size={14} /> See Submissions
                    </button>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      {/* CONDITIONAL: Edit/Delete ONLY for pending */}
                      {c.status === "pending" ? (
                        <>
                          <button
                            onClick={() => handleEdit(c._id, c)}
                            className="btn btn-xs btn-outline flex gap-1"
                          >
                            <Edit size={14} /> Edit
                          </button>
                          <button
                            disabled={deleteMutation.isLoading}
                            onClick={() => handleDelete(c._id)}
                            className="btn btn-xs btn-error flex gap-1"
                          >
                            <Trash2 size={14} />
                            {deleteMutation.isLoading
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </>
                      ) : (
                        <span className="mx-auto">- - - - - -</span>
                      )}
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
                  <p className="font-semibold text-xs">@{row.type}</p>
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
              </div>

              {/* Action */}
              <div className="mt-4">
                <div className="flex gap-1 w-full">
                  <button
                    onClick={() => handleView(row._id)}
                    className="btn btn-sm btn-primary flex-1 justify-center w-full items-center rounded-r-none"
                  >
                    <Users size={14} /> See Submissions
                  </button>

                  {row.status === "Pending" && (
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-sm btn-primary rounded-l-none"
                      >
                        ▾
                      </label>

                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
                      >
                        <li>
                          <button
                            onClick={() => handleEdit(row._id)}
                            className="btn btn-xs btn-secondary flex gap-1"
                          >
                            <Edit size={14} /> Edit
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleDelete(row._id)}
                            className="btn btn-xs btn-error flex gap-1"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* PAGINATION */}
        <div>
          <Pagination2
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default MyCreatedContestsPage;
