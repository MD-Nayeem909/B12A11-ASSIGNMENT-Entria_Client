import React from "react";
import { motion } from "framer-motion";
import leaderboardData from "../../components/leaderboard/leaderboardData";
import TopWinnersCard from "../../components/leaderboard/TopWinnersCard";
import RankedUsersTable from "../../components/leaderboard/RankedUsersTable";

const LeaderboardPage = () => {
  const topThree = leaderboardData.slice(0, 3);
  const allUsersForTable = leaderboardData;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      {/* ... H1 এবং অন্যান্য অংশ একই থাকবে ... */}

      <div className="mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gradient mb-10 text-center">
          Official Contest Leaderboard
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Animated Top Winners Card */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TopWinnersCard topUsers={topThree} />
          </motion.div>

          {/* Right Side: Animated Ranked Users Table */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <RankedUsersTable users={allUsersForTable} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
