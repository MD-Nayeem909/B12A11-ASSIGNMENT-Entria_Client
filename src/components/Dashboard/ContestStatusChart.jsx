import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ContestStatusChart = () => {
  // Sample contest data (you can replace with real DB data)
  const data = [
    { name: "Pending", value: 15 },
    { name: "Ongoing", value: 22 },
    { name: "Completed", value: 40 },
    { name: "Rejected", value: 8 },
    { name: "Under Review", value: 13 },
    { name: "Scheduled", value: 10 },
    { name: "Draft", value: 6 },
    { name: "Cancelled", value: 4 },
    { name: "Successful", value: 30 },
  ];

  const COLORS = [
    "#8e2de2",
    "#8627e2",
    "#7d22e2",
    "#751ce1",
    "#6c17e1",
    "#6411e1",
    "#5b0be1",
    "#5306e0",
    "#4a00e0",
  ];

  return (
    <div className="w-full h-96 bg-base-100 shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Contest Status Overview</h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* Smooth gradient effect */}
          <defs>
            <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8e2de2" />
              <stop offset="100%" stopColor="#4a00e0" />
            </linearGradient>
          </defs>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            innerRadius={60}
            paddingAngle={3}
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContestStatusChart;
