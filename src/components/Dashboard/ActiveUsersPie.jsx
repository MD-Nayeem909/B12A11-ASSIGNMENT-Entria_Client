import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ActiveUsersPie = () => {
  const data = [
    { name: "Active Users", value: 420 },
    { name: "Inactive Users", value: 180 },
    { name: "New Users", value: 95 },
  ];

  const COLORS = ["#7AD94A", "#C7F1A6", "#E4FFE0"];

  return (
    <div className="w-full h-80 bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Active Users Overview</h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActiveUsersPie;
