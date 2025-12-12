import React from "react";
import { Trophy, Users } from "lucide-react";

const WinnerCard = ({ user, rank }) => {
  const rankStyles = {
    1: "sunset-animated-gradient border-3 border-yellow-200 shadow-xl scale-110 -translate-y-8",
    2: "bg-[#a684ff] border-3 border-gray-200 shadow-md",
    3: "bg-[#a684ff] border-3 border-gray-200 shadow-md",
  };

  const rankTextStyles = {
    1: "text-[#f5f3ff]",
    2: "text-[#f5f3ff]",
    3: "text-[#f5f3ff]",
  };

  return (
    <div
      className={`
      flex flex-col items-center p-4 rounded-xl w-[140px] transition-all duration-300
      ${rankStyles[rank]}
      ${rank === 1 ? "z-10" : ""}
    `}
    >
      {/* Rank Badge */}
      <div
        className={`
        absolute -top-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg
        ${
          rank === 1
            ? "bg-yellow-600 text-white shadow-lg"
            : rank === 2
            ? "bg-gray-500 text-white"
            : "bg-amber-900 text-white"
        }
      `}
      >
        {rank}
      </div>

      <Trophy className={`w-10 h-10 ${rankTextStyles[rank]} mt-2`} />

      {/* Profile Image (using placeholder for dynamic example) */}
      <img
        src={user.profileImage}
        alt={user.name}
        className="w-16 h-16 rounded-full border-2 border-white mt-3 object-cover"
      />

      <p className="text-sm font-semibold mt-2">{user.name}</p>
      <p className={`text-xs font-bold mt-1 ${rankTextStyles[rank]}`}>
        {user.username}
      </p>
      <p className={`text-sm font-extrabold mt-1 ${rankTextStyles[rank]}`}>
        {user.wins} Wins
      </p>
    </div>
  );
};

const TopWinnersCard = ({ topUsers }) => {
  const [first, second, third] = topUsers;

  return (
    <div className="animated-gradient text-white p-6 md:p-10 rounded-xl shadow-2xl h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-center mb-20">
        <Users className="w-8 h-8 mr-2 text-yellow-300" />
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-white">
          GIVEAWAY WINNERS
        </h2>
      </div>

      {/* Winners List */}
      <div className="flex justify-center items-end gap-2 sm:gap-4 md:gap-6 mb-12">
        {second && <WinnerCard user={second} rank={2} />}
        {first && <WinnerCard user={first} rank={1} />}
        {third && <WinnerCard user={third} rank={3} />}
      </div>

      {/* Footer / CTA */}
      <div className="text-center mt-auto">
        <h3 className="text-xl font-bold mb-2">
          Congratulations to All Winners
        </h3>
        <p className="text-sm opacity-90 mb-6 max-w-sm mx-auto">
          Thank you for participating in this event. Follow our social media and
          stay tuned for next giveaway.
        </p>
      </div>
    </div>
  );
};

export default TopWinnersCard;
