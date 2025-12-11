import { Medal } from "lucide-react";

const rankColors = {
  1: "text-yellow-500",
  2: "text-gray-400",
  3: "text-orange-500",
};

const LeaderboardCard = ({ user, rank }) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-purple-50">
      {/* Rank */}
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold w-10 text-center">
          {rank <= 3 ? (
            <Medal className={`${rankColors[rank]} w-8 h-8`} />
          ) : (
            `#${rank}`
          )}
        </span>

        {/* User Info */}
        <div>
          <p className="font-semibold text-lg">{user.name}</p>
          <p className="text-sm text-gray-500">Total Wins: {user.wins}</p>
        </div>
      </div>

      {/* Win Badge */}
      <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">
        {user.wins} Wins
      </span>
    </div>
  );
};

export default LeaderboardCard;
