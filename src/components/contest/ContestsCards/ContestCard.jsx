import React from "react";
import { Users, Trophy, Calendar } from "lucide-react"; // আইকন ব্যবহারের জন্য (optional)

const ContestCard = ({ handleDetails, contest }) => {
  return (
    <div
      key={contest._id}
      className="group card bg-base-200 border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
    >
      {/* Image Container with Badge Overlay */}
      <figure className="relative h-52 overflow-hidden">
        <img
          src={contest.image}
          alt={contest.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="badge badge-secondary shadow-lg py-3 px-4 font-medium uppercase text-[10px] tracking-wider">
            {contest.type}
          </span>
        </div>
      </figure>

      <div className="card-body p-5 gap-3">
        {/* Title & Description */}
        <div>
          <h2 className="card-title text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
            {contest.title}
          </h2>
          <p className="text-sm text-base-content/70 line-clamp-2 mt-1 leading-relaxed">
            {contest.description}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 py-3 border-y border-base-200 my-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Users size={16} className="text-primary" />
            <span>{contest.participants.length || 0} Joined</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium justify-end">
            <Trophy size={16} className="text-accent" />
            <span className="text-secondary">${contest.prize}</span>
          </div>
        </div>

        {/* Footer: Deadline & Action */}
        <div className="card-actions justify-between items-center mt-2">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-base-content/50 font-bold tracking-tight">
              Deadline
            </span>
            <span className="text-xs font-semibold flex items-center gap-1">
               {new Date(contest.deadline).toLocaleDateString()}
            </span>
          </div>
          
          <button
            onClick={() => handleDetails(contest._id)}
            className="btn btn-primary btn-sm px-6 rounded-full shadow-md hover:shadow-primary/30"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;