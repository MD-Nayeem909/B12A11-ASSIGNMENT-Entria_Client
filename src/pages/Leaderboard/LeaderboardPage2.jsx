import React from "react";
import { motion } from "framer-motion";
import leaderboardData from "../../components/leaderboard/leaderboardData";
import TopWinnersCard from "../../components/leaderboard/TopWinnersCard";
import RankedUsersTable from "../../components/leaderboard/RankedUsersTable";

const LeaderboardPage2 = () => {
  const topThree = leaderboardData.slice(0, 3);
  const allUsersForTable = leaderboardData;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      {/* ... H1 এবং অন্যান্য অংশ একই থাকবে ... */}

      <div className="mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
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

export default LeaderboardPage2;

// // src/pages/LeaderboardPage.js

// import React from 'react';
// import TopWinnersCard from '../components/TopWinnersCard';
// import RankedUsersTable from '../components/RankedUsersTable';
// import leaderboardData from '../data/leaderboardData';

// const LeaderboardPage = () => {
//   const topThree = leaderboardData.slice(0, 3);
//   const allUsersForTable = leaderboardData;

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
//           Official Contest Leaderboard
//         </h1>

//         {/* Main Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//           {/* Left Side: Top 3 Winners Card (Takes 1/3 width on large screens) */}
//           <div className="lg:col-span-1">
//             <TopWinnersCard topUsers={topThree} />
//           </div>

//           {/* Right Side: Ranked Users Table (Takes 2/3 width on large screens) */}
//           <div className="lg:col-span-2">
//             <RankedUsersTable users={allUsersForTable} />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeaderboardPage;
