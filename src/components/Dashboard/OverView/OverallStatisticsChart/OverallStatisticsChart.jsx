import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * Props:
 * data: [{ month, contests, participants }]
 * metric: "contests" | "participants"
 */
const OverallStatisticsChart = ({ data = [], metric = "contests" }) => {
  const labelMap = {
    contests: "Contests Created",
    participants: "Participants Joined",
  };
  
  const StatsTooltip = ({ active, payload, label, metric }) => {
    if (!active || !payload?.length) return null;

    return (
      <div className="bg-base-100 border shadow-md rounded-lg px-4 py-2">
        <p className="font-semibold text-sm mb-1">{label}</p>
        <p className="text-sm">
          {metric === "contests" ? "Contests" : "Participants"}:{" "}
          <span className="font-bold">{payload[0].value}</span>
        </p>
      </div>
    );
  };

  return (
    <div className="bg-base-100 rounded-xl p-6 shadow-md border border-base-200">
      <h2 className="text-2xl font-bold mb-6">
        Overall Statistics ({labelMap[metric]})
      </h2>

      <div className="h-85 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 20, left: 0 }}>
            <defs>
              <linearGradient id="statsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopOpacity={0.6} />
                <stop offset="100%" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              tick={{ fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />

            <CartesianGrid
              strokeDasharray="3 6"
              vertical={false}
              stroke="#e5e7eb"
            />

            <Tooltip content={<StatsTooltip metric={metric} />} />

            <Area
              type="monotone"
              dataKey={metric}
              strokeWidth={3}
              fill="url(#statsGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverallStatisticsChart;
