import { useEffect, useState } from "react";
import { Crown } from "lucide-react";
import LeaderboardCard from "../../components/leaderboard/LeaderboardCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const LeaderboardPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axios(
        import.meta.env.VITE_API_URL + "public/rank.json"
      );
      return res.data;
    },
  });

  // Fetch leaderboard data
  useEffect(() => {
    // fetch("/api/leaderboard")
    fetch("public/rank.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort users by wins (highest first)
        const sorted = data.sort((a, b) => b.wins - a.wins);
        setUsers(sorted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full h-60 flex items-center justify-center text-purple-600 text-xl">
        Loading Leaderboard...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-6">
        <Crown /> Leaderboard – Contest Wins
      </h1>

      <div className="bg-white shadow-xl rounded-2xl divide-y">
        {users.map((user, index) => (
          <LeaderboardCard key={user.id} user={user} rank={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;
