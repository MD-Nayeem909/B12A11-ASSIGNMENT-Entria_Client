import { AiOutlinePieChart } from "react-icons/ai";
import StatsCard from "../../../components/ui/StatsCard";
import { useEffect, useState } from "react";
import ContestTableCard from "../../../components/ui/ContestTableCard";
import Sidebar from "../../../components/Dashboard/Sidebar";
import DashNav from "../../../components/Dashboard/DashNav";
import { Link } from "react-router";

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
  // Sidebar Responsive Handler

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">

        {/* Page content here */}
        <div className="px-4">
          {/* Main content */}
          <div className="flex-1 pt-6">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <Link to="/create-contest-form"
                  className="btn btn-primary"
                  onClick={handleCreateContest}
                >
                  Create Contest
                </Link>
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
              <StatsCard
                totalCount={stats.totalContests}
                icon={<AiOutlinePieChart />}
                title="Total Contests"
                tag="Manage all contests from one place"
              />

              <StatsCard
                totalCount={stats.activeContests}
                title="Active Contests"
                tag="Currently accepting submissions"
              />

              <StatsCard
                totalCount={stats.totalParticipants}
                title="Participants"
                tag="Total signed-up participants"
              />

              <StatsCard
                totalCount={stats.pendingSubmissions}
                title="Pending Submissions"
                tag="Submissions awaiting review"
              />
            </section>
            {/* Main grid: Table + Activity */}
            <ContestTableCard
              contests={contests}
              handleView={handleView}
              handleClose={handleClose}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
