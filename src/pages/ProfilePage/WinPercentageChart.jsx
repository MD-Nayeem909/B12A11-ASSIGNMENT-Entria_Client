import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const WinPercentageChart = ({ participated, won }) => {
  const winPercentage =
    participated > 0 ? Math.round((won / participated) * 100) : 0;

  const data = [
    { name: "Participated", value: participated, color: "#6366f1" },
    { name: "Won", value: won, color: "#10b981" },
    { name: "Win Rate %", value: winPercentage, color: "#f59e0b" },
  ];

  // Custom Tooltip for Classy Look
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-base-100 p-3 shadow-xl border border-base-content/10 rounded-xl">
          <p className="text-[10px] font-black uppercase opacity-50 tracking-widest">
            {payload[0].payload.name}
          </p>
          <p className="text-sm font-bold text-primary">
            {payload[0].value}
            {payload[0].payload.name === "Win Rate %" ? "%" : ""}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-base-200/30 p-4 rounded-3xl border border-base-content/5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] opacity-40">
          Performance stats
        </h3>
        <div className="px-2 py-1 bg-primary/10 rounded-md">
          <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">
            {winPercentage}% Success
          </span>
        </div>
      </div>
      <div className="w-full h-45">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
          >
            <defs>
              {/* Gradients for a premium look */}
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="currentColor" stopOpacity={0.8} />
                <stop offset="95%" stopColor="currentColor" stopOpacity={0.3} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="currentColor"
              opacity={0.05}
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "currentColor",
                fontSize: 10,
                fontWeight: 600,
                opacity: 0.5,
              }}
              interval={0}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "currentColor", fontSize: 10, opacity: 0.3 }}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
            />

            <Bar dataKey="value" radius={[8, 8, 8, 8]} barSize={35}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-4 border-t border-base-content/5 flex justify-around items-center">
        <div className="text-center">
          <p className="text-[10px] font-bold opacity-30 uppercase tracking-tighter">
            Total
          </p>
          <p className="text-sm font-black">{participated}</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] font-bold opacity-30 uppercase tracking-tighter">
            Victories
          </p>
          <p className="text-sm font-black text-emerald-500">{won}</p>
        </div>
      </div>
    </div>
  );
};

export default WinPercentageChart;
