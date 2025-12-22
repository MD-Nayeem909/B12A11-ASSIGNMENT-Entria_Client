import React from "react";
import { Award, User, Zap } from "lucide-react";

const RankedUsersTable = ({ users }) => {
  const getRankBadgeColor = (rank) => {
    if (rank === 1) return "bg-yellow-100 text-yellow-800";
    if (rank === 2) return "bg-gray-100 text-gray-800";
    if (rank === 3) return "bg-amber-100 text-amber-800";
    return "bg-blue-100 text-blue-800";
  };

  return (
    <div className="bg-base-100 p-6 md:p-8 rounded-b-2xl shadow-xl">
      <div className="flex items-center mb-6 border-b pb-3">
        <Award className="w-6 h-6 mr-2" />
        <h2 className="text-2xl font-bold">Complete Leaderboard</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-base-200">
          <thead className="bg-base-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium  uppercase tracking-wider rounded-tl-lg">
                # Rank
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                <User className="w-4 h-4 inline mr-1" /> User
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium  uppercase tracking-wider rounded-tr-lg">
                <Zap className="w-4 h-4 inline mr-1" /> Contest Wins
              </th>
            </tr>
          </thead>
          <tbody className="bg-base-200 divide-y divide-base-100">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-base-100 transition-colors cursor-pointer"
              >
                {/* Rank */}
                <td className="px-4 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${getRankBadgeColor(
                      user.rank
                    )}`}
                  >
                    {user.rank}
                  </span>
                </td>

                {/* User Info (Image + Name) */}
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full object-cover mr-3 border border-gray-200"
                      src={user.profileImage}
                      alt={user.name}
                    />
                    <div>
                      <div className="text-sm font-semibold">{user.name}</div>
                      <div className="text-xs">{user.username}</div>
                    </div>
                  </div>
                </td>

                {/* Wins */}
                <td className="px-4 py-4 whitespace-nowrap text-right text-base font-extrabold">
                  {user.wins}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankedUsersTable;
