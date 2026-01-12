import React from "react";
import { Zap, Medal } from "lucide-react";

const RankedUsersTable = ({ users }) => {
  const getRankStyle = (rank) => {
    if (rank === 1)
      return {
        icon: <Medal className="text-yellow-500" />,
        bg: "bg-yellow-50 text-yellow-700 border-yellow-200",
      };
    if (rank === 2)
      return {
        icon: <Medal className="text-slate-400" />,
        bg: "bg-slate-50 text-slate-700 border-slate-200",
      };
    if (rank === 3)
      return {
        icon: <Medal className="text-amber-600" />,
        bg: "bg-amber-50 text-amber-700 border-amber-200",
      };
    return {
      icon: null,
      bg: "bg-base-200 text-base-content/70 border-transparent",
    };
  };

  return (
    <div className="bg-base-100 rounded-b-[2.5rem] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="table w-full border-separate border-spacing-y-3 px-6">
          {/* Table Head */}
          <thead className="text-base-content/50">
            <tr className="border-none">
              <th className="bg-transparent font-bold uppercase tracking-widest text-[10px] pl-8">
                Rank
              </th>
              <th className="bg-transparent font-bold uppercase tracking-widest text-[10px]">
                Contestant
              </th>
              <th className="bg-transparent font-bold uppercase tracking-widest text-[10px] text-center">
                Total Wins
              </th>
              <th className="bg-transparent font-bold uppercase tracking-widest text-[10px] text-right pr-8">
                Status
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="space-y-4">
            {users.map((user) => {
              const style = getRankStyle(user.rank);
              return (
                <tr
                  key={user.id}
                  className="group hover:bg-base-200/50 transition-all duration-300"
                >
                  {/* Rank Column */}
                  <td className="pl-8 bg-base-200/40 group-hover:bg-transparent rounded-l-2xl">
                    <div className="flex items-center gap-2">
                      {style.icon}
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded-full font-black border ${style.bg}`}
                      >
                        {user.rank}
                      </span>
                    </div>
                  </td>

                  {/* User Info Column */}
                  <td className="bg-base-200/40 group-hover:bg-transparent">
                    <div className="flex items-center gap-4">
                      <div className="avatar">
                        <div className="w-12 h-12 rounded-xl ring ring-offset-2 ring-primary/5 group-hover:ring-primary/20 transition-all">
                          <img src={user.profileImage} alt={user.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-base">{user.name}</div>
                        <div className="text-xs opacity-50 truncate max-w-37.5">
                          {user.username}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Wins Column */}
                  <td className="bg-base-200/40 group-hover:bg-transparent text-center">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-primary/10 text-primary font-black">
                      <Zap size={14} className="fill-primary" />
                      {user.wins}
                    </div>
                  </td>

                  {/* Status/Prize Column (Optional addition) */}
                  <td className="bg-base-200/40 group-hover:bg-transparent text-right pr-8 rounded-r-2xl font-bold text-success">
                    {user.prize ? `$${user.prize}` : "Elite Member"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankedUsersTable;
