import React from "react";
import Button from "../common/Button";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Trophy, Rocket, DollarSign } from "lucide-react";
import { Link } from "react-router";

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

  if (isLoading)
    return (
      <div className="h-96 flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );

  return (
    <section className="py-20 bg-base-200/50 rounded-[3rem] px-6 my-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Hall of Fame
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Meet the creative minds who conquered the spotlight. Your journey to
            success starts here!
          </p>
        </div>

        {/* Stats Section with Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          <StatCard
            icon={<DollarSign className="text-success" />}
            value={`$${statsData.totalPrizeMoney || 0}+`}
            label="Prize Money Awarded"
          />
          <StatCard
            icon={<Trophy className="text-warning" />}
            value={`${statsData.totalWinners || 0}+`}
            label="Total Winners"
          />
          <StatCard
            icon={<Rocket className="text-primary" />}
            value={statsData.activeContests || 0}
            label="Active Contests"
          />
        </div>

        {/* Winners List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.slice(0, 3).map((winner, index) => (
            <div
              key={index}
              className="group relative bg-base-100 rounded-[2rem] p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-300"
            >
              {/* Winner Rank Badge */}
              <div className="absolute -top-4 -right-4 bg-warning text-warning-content w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-base-100 z-10">
                #{index + 1}
              </div>

              <div className="flex flex-col items-center">
                <div className="avatar mb-6">
                  <div className="w-28 rounded-2xl ring ring-primary ring-offset-base-100 ring-offset-4 group-hover:scale-105 transition-transform">
                    <img src={winner.image} alt={winner.name} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-1">{winner.name}</h3>
                <p className="text-primary font-medium text-sm mb-4 uppercase tracking-widest">
                  {winner.contests?.[0]?.title || "Top Performer"}
                </p>

                <div className="bg-base-200 px-6 py-2 rounded-full flex items-center gap-2">
                  <Trophy size={18} className="text-warning" />
                  <span className="font-bold">Won: ${winner.totalPrize}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contests">
            <button className="btn btn-primary btn-lg rounded-full px-12 shadow-xl shadow-primary/30 hover:scale-105 transition-all">
              Join a Contest Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Sub-component for Stats
const StatCard = ({ icon, value, label }) => (
  <div className="bg-base-100 p-8 rounded-3xl flex flex-col items-center border border-base-200 shadow-sm hover:border-primary/30 transition-colors">
    <div className="p-4 bg-base-200 rounded-2xl mb-4">{icon}</div>
    <p className="text-4xl font-black">{value}</p>
    <p className="text-base-content/60 font-medium">{label}</p>
  </div>
);
