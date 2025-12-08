import { useState, useEffect } from "react";
import {
  FiHome,
  FiList,
  FiUser,
  FiSettings,
  FiBell,
  FiLogOut,
} from "react-icons/fi";
import { AiOutlinePieChart } from "react-icons/ai";
import Logo from "../../../components/common/logo";

const Dashboard = () => {
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
  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <aside className=" w-64 bg-base-50 shadow-md hidden md:block">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="p-4 border-b flex flex-col gap-2">
              <Logo />
              <p className="text-sm text-gray-500">Contest management</p>
            </div>
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelected("dashboard")}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                      selected === "dashboard"
                        ? "bg-primary text-primary-content"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <FiHome /> <span>Dashboard</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelected("contests")}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                      selected === "contests"
                        ? "bg-primary text-primary-content"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <FiList /> <span>All Contests</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelected("creators")}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                      selected === "creators"
                        ? "bg-primary text-primary-content"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <FiUser /> <span>Creators</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelected("settings")}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                      selected === "settings"
                        ? "bg-primary text-primary-content"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <FiSettings /> <span>Settings</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-auto p-4">
            <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-error hover:text-error-content">
              <FiLogOut /> <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

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
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
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
            <button className="btn btn-primary" onClick={handleCreateContest}>
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
                <h3 className="text-2xl font-bold">{stats.totalContests}</h3>
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
            <h3 className="text-2xl font-bold">{stats.totalParticipants}</h3>
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
  );
};

export default Dashboard;
