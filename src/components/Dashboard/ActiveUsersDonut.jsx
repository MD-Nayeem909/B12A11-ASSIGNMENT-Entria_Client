import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ActiveUsersDonut = () => {
  const data = [
    { name: "Active Users", value: 420 },
    { name: "Inactive Users", value: 180 },
    { name: "New Users", value: 95 },
  ];

  // Gradient color palette (light → strong lime)
  const COLORS = ["url(#greenGradient)", "#C8F7B5", "#E8FFE0"];

  return (
    <div className="w-full h-80 bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Active Users Overview</h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* GRADIENT DEFINE */}
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B6EF6E" />
              <stop offset="100%" stopColor="#7AD94A" />
            </linearGradient>
          </defs>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={110}
            paddingAngle={4}
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`slice-${index}`}
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

export default ActiveUsersDonut;
