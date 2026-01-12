import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const OverallStatisticsChart = ({ data = [], metric = "contests" }) => {
  
  const config = {
    contests: {
      label: "Contests Created",
      color: "#6366f1", // Indigo
      gradient: "url(#colorContests)",
    },
    participants: {
      label: "Participants Joined",
      color: "#10b981", // Emerald
      gradient: "url(#colorParticipants)",
    },
  };

  const currentConfig = config[metric] || config.contests;

  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-base-100/80 backdrop-blur-md border border-base-content/10 shadow-2xl rounded-2xl p-4 ring-1 ring-black/5">
          <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest mb-1">
            {label}
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: currentConfig.color }}
            ></div>
            <p className="text-sm font-black">
              {payload[0].value.toLocaleString()}{" "}
              <span className="font-normal opacity-70">{metric}</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-base-100 rounded-xl p-4 md:p-8 shadow-sm border border-base-300 w-full overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl md:text-2xl font-black tracking-tighter">
            OVERALL{" "}
            <span style={{ color: currentConfig.color }}>STATISTICS</span>
          </h2>
          <p className="text-[10px] opacity-50 font-bold uppercase tracking-widest mt-1">
            Monthly Performance Tracking • {currentConfig.label}
          </p>
        </div>

        <div className="px-4 py-1.5 rounded-full bg-base-200 text-[10px] font-bold self-start md:self-auto">
          LIVE DATA
        </div>
      </div>

      <div className="h-75 md:h-100 w-full -ml-4 md:-ml-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorContests" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient
                id="colorParticipants"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke="currentColor"
              className="opacity-[0.05]"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fontWeight: 600, opacity: 0.5 }}
              dy={15}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fontWeight: 600, opacity: 0.5 }}
              dx={-10}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: currentConfig.color,
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
            />

            <Area
              type="monotone"
              dataKey={metric}
              stroke={currentConfig.color}
              strokeWidth={4}
              fillOpacity={1}
              fill={currentConfig.gradient}
              animationDuration={2000}
              activeDot={{
                r: 6,
                strokeWidth: 0,
                fill: currentConfig.color,
                className: "animate-pulse",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverallStatisticsChart;
