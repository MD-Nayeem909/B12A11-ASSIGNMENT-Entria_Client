import { AiOutlinePieChart } from "react-icons/ai";
import StatsCard from "../../../components/ui/StatsCard";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import DashboardChart from "../../../components/ui/DashboardChart";
import BestContests from "../../../components/Dashboard/BestContests";
import ActiveUsersChart from "../../../components/Dashboard/ActiveUsersPie";
import Transactions from "../../../components/Dashboard/Transactions";
import ActiveUsersDonut from "../../../components/Dashboard/ActiveUsersDonut";
import ContestStatusChart from "../../../components/Dashboard/ContestStatusChart";
import AllContestReport from "../../../components/Dashboard/AllContestReport";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalContests: 24,
    activeContests: 8,
    totalParticipants: 1324,
    pendingSubmissions: 39,
  });

  useEffect(() => {
    // Example: fetch stats from backend
    // axios.get('/api/dashboard/stats').then(res => setStats(res.data))
  }, []);

  // Sidebar Responsive Handler

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="px-4">
          {/* Main content */}
          <div className="flex flex-col gap-8 flex-1 py-20">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <Link
                  to="/dashboard/create-contest-form"
                  className="btn btn-primary"
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
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
            <Transactions list={[]} />
            <DashboardChart />
            <AllContestReport />
            {/* Main grid: Table + Activity */}
            <BestContests contests={[]} />
            <div className="flex flex-col md:flex-row gap-6">
              <ActiveUsersChart />
              <ActiveUsersDonut />
            </div>
            <ContestStatusChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
