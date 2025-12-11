import React from "react";
import Contests from "../contest/Contests";

const ContestTableCard = ({
  contests,
  handleClose,
  handleDelete,
  handleView,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Contests Table */}
      <div className="lg:col-span-4 bg-base-100 p-4 shadow-md rounded-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Contests</h3>
          <div className="text-sm text-gray-500">Showing latest contests</div>
        </div>
        <Contests contests={contests} handleClose={handleClose} handleDelete={handleDelete} handleView={handleView} />
        <div className="mt-4 flex justify-end">
          <button className="btn btn-sm btn-outline">View all contests</button>
        </div>
      </div>
    </div>
  );
};

export default ContestTableCard;
