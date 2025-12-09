import React from "react";
import { FiUsers } from "react-icons/fi";

const ContestCard = ({ contest, handleDetails }) => {
  return (
    <div
      key={contest._id}
      className="card bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden"
    >
      <figure className="h-36 w-full overflow-hidden">
        <img
          src={contest.image}
          alt={contest.name}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold line-clamp-1">{contest.name}</h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {contest.description?.slice(0, 70)}...
        </p>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FiUsers />
            <span>{contest.participants || 0}</span>
          </div>
          <button
            onClick={() => handleDetails(contest._id)}
            className="btn btn-primary btn-sm"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
