import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ActiveUsersPie = () => {
  const data = [
    { name: "Active Users", value: 420 },
    { name: "Inactive Users", value: 180 },
    { name: "New Users", value: 95 },
  ];

  const COLORS = ["#6366f1", "#a855f7", "#ec4899"];
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-base-100/90 backdrop-blur-sm p-3 border border-base-content/10 shadow-xl rounded-xl">
          <p className="text-[10px] font-black uppercase opacity-50 tracking-widest">
            {payload[0].name}
          </p>
          <p className="text-sm font-bold">
            {payload[0].value.toLocaleString()}{" "}
            <span className="font-normal opacity-70">Users</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-100 bg-base-100 rounded-4xl p-6 border border-base-200 relative group">
      <div className="flex justify-between items-start mb-2 px-2">
        <div>
          <h2 className="text-lg font-black tracking-tighter">
            USER <span className="text-primary">DISTRIBUTION</span>
          </h2>
          <p className="text-[10px] opacity-40 font-bold uppercase tracking-tight">
            Active session analysis
          </p>
        </div>
      </div>

      <div className="w-full h-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em]">
            Total
          </p>
          <p className="text-2xl font-black italic leading-none">{total}</p>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="65%"
              outerRadius="85%"
              paddingAngle={8}
              dataKey="value"
              stroke="none"
              cornerRadius={10}
              animationBegin={0}
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  className="hover:opacity-80 transition-opacity cursor-pointer outline-none"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              iconType="circle"
              formatter={(value) => (
                <span className="text-[11px] font-bold uppercase opacity-70 px-2">
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

export default ActiveUsersPie;
