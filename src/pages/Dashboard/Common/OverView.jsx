import { AiOutlinePieChart } from "react-icons/ai";
import { FiActivity, FiUsers, FiClock, FiLayers } from "react-icons/fi"; // আরও আইকন
import StatsCard from "../../../components/Dashboard/OverView/StatsCard/StatsCard";
import ActiveUsersChart from "../../../components/Dashboard/OverView/ActiveUsersOverview/ActiveUsersPie";
import ContestStatusChart from "../../../components/Dashboard/OverView/ContestStatusOverview/ContestStatusChart";
import AllContestReport from "../../../components/Dashboard/OverView/AllContestReports/AllContestReport";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import OverallStatisticsChart from "../../../components/Dashboard/OverView/OverallStatisticsChart/OverallStatisticsChart";
import AdminPaymentHistory from "../../../components/Dashboard/OverView/AdminPaymentHistory/AdminPaymentHistory";
import useRole from "../../../hooks/useRole";
import { ShieldCheck } from "lucide-react";

const Dashboard = () => {
  const [role] = useRole();

  const {
    data: stats = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      const res = await axios(
        import.meta.env.VITE_BASE_URL + "dashboard/stats"
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <span className="loading loading-ring loading-lg text-primary"></span>
        <p className="font-bold animate-pulse text-base-content/50">
          Building your dashboard...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-10 text-rose-500 bg-rose-50 rounded-2xl border border-rose-100">
        Error: {error.message}
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
    <div className="space-y-8 pb-12 pt-6 px-6">
      {/* 1. Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
        <div>
          <h2 className="text-2xl font-black tracking-tighter uppercase">
            System <span className="text-primary">Overview</span>
          </h2>
          <p className="text-[11px] opacity-40 font-bold uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
            <ShieldCheck size={14} /> Real-time analytics and platform
            performance
          </p>
        </div>
      </header>

      {/* 2. Key Stats Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          totalCount={totalContests}
          icon={<FiLayers size={24} />}
          title="Total Contests"
          tag="Lifetime created"
        />
        <StatsCard
          totalCount={activeContests}
          icon={<FiActivity size={24} />}
          title="Active"
          tag="Currently live"
          color="text-emerald-500"
        />
        <StatsCard
          totalCount={totalParticipants}
          icon={<FiUsers size={24} />}
          title="Participants"
          tag="Community size"
        />
        <StatsCard
          totalCount={pendingSubmissions}
          icon={<FiClock size={24} />}
          title="Pending"
          tag="Needs review"
        />
      </section>

      {/* 3. Main Analytics Grid (Two Columns) */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Large Chart Area */}
        <div className="xl:col-span-2 space-y-8">
          {role === "admin" && (
            <OverallStatisticsChart
              data={stats.monthlyStats}
              metric="contests"
            />
          )}

          {/* Recent Reports Table */}
          {role === "admin" && <AllContestReport />}
        </div>

        {/* Sidebar Charts Area */}
        <div className="space-y-8">
          <div className="bg-base-100 p-6 rounded-2xl border border-base-200 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 opacity-40 text-center">
              User Distribution
            </h3>
            <ActiveUsersChart />
          </div>

          <div className="bg-base-100 p-6 rounded-2xl border border-base-200 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 opacity-40 text-center">
              Contest Status
            </h3>
            <ContestStatusChart status={contestStatus} />
          </div>
        </div>
      </section>

      {/* 4. Full Width Transactions Section */}
      {role === "admin" && (
        <section className="pt-4">
          <AdminPaymentHistory />
        </section>
      )}
    </div>
  );
};

export default Dashboard;
