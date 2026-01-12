import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ContestStatusChart = ({ status = [] }) => {
  // ডাটা ফরম্যাটিং
  const data = status.map((s) => ({
    name: s._id,
    value: s.count,
  }));

  // স্ট্যাটাস অনুযায়ী ডাইনামিক কালার ম্যাপ
  const STATUS_COLORS = {
    Approved: "#10b981", // Emerald
    Pending: "#f59e0b", // Amber
    Ongoing: "#3b82f6", // Blue
    Rejected: "#ef4444", // Rose
    Completed: "#6366f1", // Indigo
  };

  // ডিফল্ট কালার যদি কোনো স্ট্যাটাস না মেলে
  const DEFAULT_COLORS = [
    "#6366f1",
    "#a855f7",
    "#ec4899",
    "#10b981",
    "#f59e0b",
  ];

  const totalContests = data.reduce((acc, curr) => acc + curr.value, 0);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-base-100/90 backdrop-blur-md p-3 border border-base-content/10 shadow-2xl rounded-2xl ring-1 ring-black/5">
          <p className="text-[10px] font-black uppercase opacity-50 tracking-[0.1em] mb-1">
            {payload[0].name}
          </p>
          <p className="text-sm font-black">
            {payload[0].value}{" "}
            <span className="font-normal opacity-60 ml-1">Contests</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-100 bg-base-100 rounded-4xl p-6 border border-base-200 relative overflow-hidden group">
      {/* Header */}
      <div className="mb-2">
        <h2 className="text-lg font-black tracking-tighter uppercase">
          Contest <span className="text-primary">Status</span>
        </h2>
        <p className="text-[10px] opacity-40 font-bold uppercase tracking-tight">
          Current approval & lifecycle stage
        </p>
      </div>

      <div className="w-full h-full relative">
        {/* Center Text for Donut */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] mb-1">
            Total
          </p>
          <p className="text-3xl font-black italic leading-none">
            {totalContests}
          </p>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="68%"
              outerRadius="88%"
              paddingAngle={5}
              dataKey="value"
              stroke="none"
              cornerRadius={8}
              animationDuration={1800}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    STATUS_COLORS[entry.name] ||
                    DEFAULT_COLORS[index % DEFAULT_COLORS.length]
                  }
                  className="hover:opacity-80 transition-opacity cursor-pointer outline-none shadow-xl"
                />
              ))}
            </Pie>

            <Tooltip content={<CustomTooltip />} />

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ paddingTop: "20px" }}
              formatter={(value) => (
                <span className="text-[10px] font-black uppercase opacity-60 tracking-tighter ml-1">
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContestStatusChart;
