import React from "react";
import Button from "../common/Button";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../common/LoadingSpinner";

const winners = [
  {
    id: 1,
    name: "Aisha Rahman",
    contest: "Creative Logo Design Challenge",
    prize: "$500",
    image: "https://i.ibb.co/0qX4wyX/winner1.jpg",
  },
  {
    id: 2,
    name: "Rafiul Hasan",
    contest: "AI Article Writing Contest",
    prize: "$300",
    image: "https://i.ibb.co/Lp6dq0H/winner2.jpg",
  },
  {
    id: 3,
    name: "Nusrat Akter",
    contest: "Photography Nature Contest",
    prize: "$400",
    image: "https://i.ibb.co/34CW0bm/winner3.jpg",
  },
];

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
        <div className="bg-base-200 p-6 rounded-2xl shadow">
          <p className="text-4xl font-bold">$1,200+</p>
          <p className="text-gray-500">Prize Money Awarded</p>
        </div>
        <div className="bg-base-200 p-6 rounded-2xl shadow">
          <p className="text-4xl font-bold">30+</p>
          <p className="text-gray-500">Winners Featured</p>
        </div>
        <div className="bg-base-200 p-6 rounded-2xl shadow">
          <p className="text-4xl font-bold">12</p>
          <p className="text-gray-500">Active Contests</p>
        </div>
      </div>

      {/* Winners List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {winners.map((winner) => (
          <div
            key={winner.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl"
          >
            <figure className="h-56 overflow-hidden">
              <img
                src={winner.image}
                alt={winner.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-bold">{winner.name}</h3>
              <p className="text-gray-600 text-sm">🏅 {winner.contest}</p>
              <p className="font-semibold text-primary">
                Prize: {winner.prize}
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
