import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TopWinnersCard from "../../components/leaderboard/TopWinnersCard";
import RankedUsersTable from "../../components/leaderboard/RankedUsersTable";

const LeaderboardPage = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data = [],
    isError,
  } = useQuery({
    queryKey: ["top-winners"],
    queryFn: async () => {
      const res = await axiosSecure("/contests/winners/top");
      console.log(res.data);

      return res.data;
    },
  });

  if (isError) {
    return (
      <p className="text-center text-red-500 mt-10">
        Failed to load leaderboard
      </p>
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
    <div className="sm:p-8">
      <div className="mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gradient mb-10 text-center">
          Official Contest Leaderboard
        </h1>

        <div className="flex flex-col max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TopWinnersCard topUsers={topThree} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RankedUsersTable users={formattedUsers} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
