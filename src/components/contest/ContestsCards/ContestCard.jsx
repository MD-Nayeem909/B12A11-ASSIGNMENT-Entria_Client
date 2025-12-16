import React from "react";

const ContestCard = ({ handleDetails, contest }) => {
  return (
    <div
      key={contest._id}
      className="card bg-base-100 shadow-md hover:shadow-xl transition"
    >
      <figure className="h-56 overflow-hidden">
        <img
          src={contest.image}
          alt={contest.title}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </figure>

      <div className="card-body">
        <span className="badge bg-[#ede9fe] text-[#2f0d68] border-[#a684ff] dark:bg-[#2f0d68] dark:text-[#ede9fe] dark:border-[#a684ff] px-4 w-fit">{contest.type}</span>
        <h2 className="card-title line-clamp-1">{contest.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">
          {contest.description}
        </p>

        <div className="flex justify-between text-sm mt-4">
          <span>👥 {contest.participants} joined</span>
          <span>🏆 ${contest.prize}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-400">
            Deadline: {contest.deadline}
          </span>
          <button
            onClick={() => handleDetails(contest._id)}
            className="btn btn-primary btn-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
