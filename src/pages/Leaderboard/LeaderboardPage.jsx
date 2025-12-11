// import { useEffect, useState } from "react";
import { Crown } from "lucide-react";
import LeaderboardCard from "../../components/leaderboard/LeaderboardCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const LeaderboardPage = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

  const { data: users = [], isLoading : loading} = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axios(
        import.meta.env.VITE_API_URL + "public/rank.json"
      );
      const sorted = res.data.sort((a, b) => b.wins - a.wins);
      return sorted;
    },
  });

  // Fetch leaderboard data
//   useEffect(() => {
//     // fetch("/api/leaderboard")
//     fetch("public/rank.json")
//       .then((res) => res.json())
//       .then((data) => {
//         // Sort users by wins (highest first)
//         const sorted = data.sort((a, b) => b.wins - a.wins);
//         setUsers(sorted);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

  if (loading) {
    return (
      <div className="w-full h-60 flex items-center justify-center text-purple-600 text-xl">
        Loading Leaderboard...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto min-h-[calc(100vh-506px)] flex flex-col justify-center p-6">
      <div className="flex items-center justify-center gap-2 text-3xl font-bold mb-6">
        <Crown size={30} /> 
        <span className="text-3xl font-bold">Leaderboard - Contest Wins</span>
      </div>

      <div className="bg-white shadow-xl rounded-2xl divide-y">
        {users.map((user, index) => (
          <LeaderboardCard key={user.id} user={user} rank={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;
