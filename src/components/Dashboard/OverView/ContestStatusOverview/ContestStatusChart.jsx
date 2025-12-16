import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ContestStatusChart = ({status}) => {
  // Sample contest data (you can replace with real DB data)
  const data = status.map(s => ({
    name: s._id,
    value: s.count,
  }));

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
      >
        {(percent * 100).toFixed(0)}%
      </text>
    );
  };

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

      <div className="w-full h-[85%]">
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
              innerRadius="45%"
              outerRadius="80%"
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              labelComponent={renderCustomLabel}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="none"
                />
              ))}
            </Pie>

            <Tooltip  />
            <Legend layout="vertical" align="right" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContestStatusChart;
