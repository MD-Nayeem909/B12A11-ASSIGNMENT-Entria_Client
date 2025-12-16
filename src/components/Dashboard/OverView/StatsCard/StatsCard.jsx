import React from "react";

const StatsCard = ({ title, tag, totalCount, icon }) => {
  return (
    <div className="card p-4 shadow-md bg-base-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold">{totalCount}</h3>
        </div>
        <div className="text-4xl text-primary">
          {icon ? icon : " "}
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2">
        {tag}
      </p>
    </div>
  );
};

export default StatsCard;
