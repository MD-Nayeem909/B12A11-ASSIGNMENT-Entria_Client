import { AiOutlinePieChart } from "react-icons/ai";
import StatsCard from "../../../components/Dashboard/OverView/StatsCard/StatsCard";
import BestContests from "../../../components/Dashboard/OverView/BestPerformingContests/BestContests";
import ActiveUsersChart from "../../../components/Dashboard/OverView/ActiveUsersOverview/ActiveUsersPie";
import Transactions from "../../../components/Dashboard/OverView/TransactionsOverView/Transactions";
import ContestStatusChart from "../../../components/Dashboard/OverView/ContestStatusOverview/ContestStatusChart";
import AllContestReport from "../../../components/Dashboard/OverView/AllContestReports/AllContestReport";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import OverallStatisticsChart from "../../../components/Dashboard/OverView/OverallStatisticsChart/OverallStatisticsChart";

const Dashboard = () => {
  // const [stats, setStats] = useState({
  //   totalContests: 24,
  //   activeContests: 8,
  //   totalParticipants: 1324,
  //   pendingSubmissions: 39,
  // });

  const {
    data: stats = [],
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      const res = await axios(
        import.meta.env.VITE_BASE_URL + "dashboard/stats"
      );
      console.log(res.data);

      return res.data;
    },
  });
  if (isLoading) {
    return <div className="p-10 text-center">Loading dashboard...</div>;
  }

  if (isError) {
    return (
      <div className="p-10 text-red-500">
        Failed to load dashboard: {error.message}
      </div>
    );
  }

  const {
    totalContests,
    activeContests,
    totalParticipants,
    pendingSubmissions,
    contestStatus,
  } = stats;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="px-4">
          {/* Main content */}
          <div className="flex flex-col gap-8 flex-1 pb-10">
            {/* Stats + Chart */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <StatsCard
                totalCount={totalContests}
                icon={<AiOutlinePieChart />}
                title="Total Contests"
                tag="Manage all contests from one place"
              />

              <StatsCard
                totalCount={activeContests}
                title="Active Contests"
                tag="Currently accepting submissions"
              />

              <StatsCard
                totalCount={totalParticipants}
                title="Participants"
                tag="Total signed-up participants"
              />

              <StatsCard
                totalCount={pendingSubmissions}
                title="Pending Submissions"
                tag="Submissions awaiting review"
              />
            </section>
            <Transactions list={[]} />
            <OverallStatisticsChart
              data={stats.monthlyStats}
              metric="contests"
            />
            <AllContestReport />
            {/* Main grid: Table + Activity */}
            <BestContests contests={[]} />
            <ActiveUsersChart />
            <ContestStatusChart status={contestStatus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
