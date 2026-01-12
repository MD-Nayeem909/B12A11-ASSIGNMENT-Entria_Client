import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TopWinnersCard from "../../components/leaderboard/TopWinnersCard";
import RankedUsersTable from "../../components/leaderboard/RankedUsersTable";
import { Trophy, Medal, Star } from "lucide-react";

const LeaderboardPage = () => {
  const axiosSecure = useAxiosSecure();

  const { data = [], isError, isLoading } = useQuery({
    queryKey: ["top-winners"],
    queryFn: async () => {
      const res = await axiosSecure("/contests/winners/top");
      return res.data;
    },
  });

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-ring loading-lg text-primary"></span>
    </div>
  );

  if (isError) {
    return (
      <div className="text-center py-20">
        <Trophy size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-red-500 font-medium">Failed to load leaderboard. Please try again.</p>
      </div>
    );
  }

  const formattedUsers = data.map((item, index) => ({
    rank: index + 1,
    id: item.userId,
    name: item.name,
    username: item.email,
    profileImage: item.image || "https://i.ibb.co/4pDNDk1/avatar.png",
    wins: item.totalWins,
    prize: item.totalPrize,
  }));

  const topThree = formattedUsers.slice(0, 3);

  return (
    <div className="min-h-screen bg-base-200/30 pb-20">
      {/* Header Section */}
      <div className="bg-base-100 border-b border-base-300 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-3 mb-4"
          >
            <Star className="text-warning fill-warning" size={28} />
            <span className="uppercase tracking-[0.3em] text-sm font-bold text-base-content/60">
              Hall of Fame
            </span>
            <Star className="text-warning fill-warning" size={28} />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-linear-to-r from-primary via-secondary to-primary bg-300% animate-gradient text-transparent bg-clip-text">
            Elite Leaderboard
          </h1>
          <p className="text-base-content/60 max-w-xl mx-auto text-lg">
            Celebrating the top achievers and legendary creators of our community. 
            Are you ready to claim your spot?
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Podium/Top 3 Section */}
        <div className="mb-20">
           <TopWinnersCard topUsers={topThree} />
        </div>

        {/* Full Ranking Table Section */}
        <div className="bg-base-100 rounded-[2.5rem] shadow-xl shadow-base-300/50 overflow-hidden border border-base-200">
          <div className="p-8 border-b border-base-200 flex flex-col md:flex-row gap-4 items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Medal className="text-primary" /> Global Rankings
            </h2>
            <div className="badge badge-primary badge-outline p-4 font-bold whitespace-nowrap">
              Total {formattedUsers.length} Winners
            </div>
          </div>
          <RankedUsersTable users={formattedUsers} />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;