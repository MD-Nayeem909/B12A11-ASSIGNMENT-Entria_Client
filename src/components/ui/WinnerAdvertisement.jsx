import React from "react";
import Button from "../common/Button";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../common/LoadingSpinner";
import { Trophy } from "lucide-react";

export default function WinnerAdvertisement() {
  const axiosSecure = useAxiosSecure();

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["top-winners"],
    queryFn: async () => {
      const res = await axiosSecure("/contests/winners/top");
      return res.data;
    },
  });

  const { data: statsData = {} } = useQuery({
    queryKey: ["leaderboard-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("contests/leaderboard/stats");
      return res.data;
    },
  });
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 mt-10">
        Failed to load leaderboard
      </p>
    );
  }

  return (
    <section className="my-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">🏆 Recent Contest Winners</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Meet the talented contestants who took the spotlight! Get inspired and
          join upcoming contests to become the next winner.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-center">
        <div className="bg-base-100 p-6 rounded-2xl hover:shadow-xl transition duration-300 shadow-md">
          <p className="text-4xl font-bold">${statsData.totalPrizeMoney}+</p>
          <p className="">Prize Money Awarded</p>
        </div>
        <div className="bg-base-100 p-6 rounded-2xl hover:shadow-xl transition duration-300 shadow-md">
          <p className="text-4xl font-bold">{statsData.totalWinners}+</p>
          <p className="">Winners Featured</p>
        </div>
        <div className="bg-base-100 p-6 rounded-2xl hover:shadow-xl transition duration-300 shadow-md">
          <p className="text-4xl font-bold">{statsData.activeContests}</p>
          <p className="">Active Contests</p>
        </div>
      </div>

      {/* Winners List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((winner) => (
          <div
            key={winner.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-2xl"
          >
            <figure className="h-56 overflow-hidden">
              <img
                src={winner.image}
                alt={winner.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-xl font-bold">{winner.name}</h3>
              <p className="text-md">🏅 {winner.contests[0].title}</p>
              <p className="font-semibold flex items-center justify-center gap-2 text-primary">
                <Trophy /> Prize: {winner.totalPrize}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button>Join a Contest Now</Button>
      </div>
    </section>
  );
}
