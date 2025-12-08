import React from "react";
import { useState, useEffect } from "react";
import { FiBell, FiHome } from "react-icons/fi";
import { AiOutlinePieChart } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { LuSettings2 } from "react-icons/lu";
import { Link } from "react-router";

const Sidebar = () => {
  const [stats, setStats] = useState({
    totalContests: 24,
    activeContests: 8,
    totalParticipants: 1324,
    pendingSubmissions: 39,
  });

  const [contests, setContests] = useState([
    {
      id: "c1",
      title: "Logo Design - Startup X",
      type: "Design",
      status: "Active",
      entries: 54,
      prize: "$500",
    },
    {
      id: "c2",
      title: "Write: 1000-word Review",
      type: "Writing",
      status: "Closed",
      entries: 120,
      prize: "$300",
    },
    {
      id: "c3",
      title: "Mobile Game Concept",
      type: "Ideas",
      status: "Pending",
      entries: 0,
      prize: "$1,200",
    },
  ]);

  const [selected, setSelected] = useState("dashboard");

  useEffect(() => {
    // Example: fetch stats from backend
    // axios.get('/api/dashboard/stats').then(res => setStats(res.data))
  }, []);

  function handleCreateContest() {
    // navigate to contest creation page or open modal
    alert("Open contest creation flow (replace with navigation)");
  }

  function handleView(contestId) {
    alert(`View contest ${contestId} (replace with navigation)`);
  }

  function handleClose(contestId) {
    // call backend to close contest
    alert(`Close contest ${contestId} (call API)`);
  }
  function handleDelete(contestId) {
    // call backend to delete contest
    alert(`Delete contest ${contestId} (call API)`);
  }
  // Sidebar Responsive Handler

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-100">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
        </nav>
        {/* Page content here */}
        <div className="p-4">
          {/* Main content */}
          <div className="flex-1 pt-6">
            {/* Topbar */}
            <header className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold">Welcome back, Admin</h2>
                <p className="text-sm text-gray-500">
                  Here's the activity overview for your contests
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button className="btn btn-ghost btn-circle">
                  <FiBell size={18} />
                </button>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://i.pravatar.cc/100" alt="avatar" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
                  >
                    <li>
                      <a>Profile</a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <button
                  className="btn btn-primary"
                  onClick={handleCreateContest}
                >
                  Create Contest
                </button>
                <button className="btn btn-outline">Import</button>
                <button className="btn btn-ghost">Export</button>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Search contests..."
                  className="input input-bordered"
                />
                <select className="select select-bordered">
                  <option>All types</option>
                  <option>Design</option>
                  <option>Writing</option>
                  <option>Ideas</option>
                </select>
              </div>
            </div>
            {/* Stats + Chart */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="card p-4 shadow-md bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Contests</p>
                    <h3 className="text-2xl font-bold">
                      {stats.totalContests}
                    </h3>
                  </div>
                  <div className="text-4xl text-primary">
                    <AiOutlinePieChart />
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Manage all contests from one place
                </p>
              </div>

              <div className="card p-4 shadow-md bg-white">
                <p className="text-sm text-gray-500">Active Contests</p>
                <h3 className="text-2xl font-bold">{stats.activeContests}</h3>
                <p className="text-xs text-gray-400 mt-2">
                  Currently accepting submissions
                </p>
              </div>

              <div className="card p-4 shadow-md bg-white">
                <p className="text-sm text-gray-500">Participants</p>
                <h3 className="text-2xl font-bold">
                  {stats.totalParticipants}
                </h3>
                <p className="text-xs text-gray-400 mt-2">
                  Total signed-up participants
                </p>
              </div>
            </section>
            {/* Main grid: Table + Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Contests Table */}
              <div className="lg:col-span-4 bg-base-100 p-4 shadow-md rounded-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Contests</h3>
                  <div className="text-sm text-gray-500">
                    Showing latest contests
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Entries</th>
                        <th>Prize</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contests.map((c) => (
                        <tr key={c.id}>
                          <td>{c.title}</td>
                          <td>{c.type}</td>
                          <td>
                            <span
                              className={`badge ${
                                c.status === "Active"
                                  ? "badge-success"
                                  : c.status === "Closed"
                                  ? "badge-neutral"
                                  : "badge-info"
                              }`}
                            >
                              {c.status}
                            </span>
                          </td>
                          <td>{c.entries}</td>
                          <td>{c.prize}</td>
                          <td>
                            <div className="flex items-center gap-2">
                              {c.status !== "Active" && (
                                <button
                                  className="btn btn-xs"
                                  onClick={() => handleView(c.id)}
                                >
                                  Confirm
                                </button>
                              )}
                              {c.status !== "Closed" && (
                                <button
                                  className="btn btn-xs btn-warning"
                                  onClick={() => handleClose(c.id)}
                                >
                                  Reject
                                </button>
                              )}

                              <button
                                className="btn btn-xs btn-error"
                                onClick={() => handleDelete(c.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="btn btn-sm btn-outline">
                    View all contests
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow gap-4">
            {/* List item */}
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <img src={logo} alt="" className="w-10" />
                <span className="is-drawer-close:hidden font-bold text-2xl">Entria</span>
              </Link>
            </li>
            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <FiHome size={20} />
                <span className="is-drawer-close:hidden ">Homepage</span>
              </button>
            </li>

            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <LuSettings2 size={20} />
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
