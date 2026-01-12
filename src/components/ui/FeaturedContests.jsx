import React from "react";
import NoContestFound from "./NoContestFound";
import PopularContestsSection from "./PopularContestsSection";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ContestCardSkeleton from "../contest/ContestCardSkeleton";

const FeaturedContests = () => {
  const { data: contestData = [], isLoading } = useQuery({
    queryKey: ["contests", "featured"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}contests?status=approved&sortBy=participants`
      );
      return res.data.results;
    },
  });

  return (
    <section className="container mx-auto">
      {/* Header Section */}
      <div className="flex flex-col gap-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-base-content">
          Featured Creative Contests
        </h2>
        <p className="text-base-content/70 text-lg max-w-2xl mx-auto leading-relaxed">
          Showcase your creativity and compete with talented creators worldwide.
          Win prizes and recognition.
        </p>
      </div>

      {/* Logic for Rendering */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <ContestCardSkeleton key={index} />
          ))}
        </div>
      ) : contestData.length === 0 ? (
        <div className="flex justify-center py-10">
          <NoContestFound />
        </div>
      ) : (
        <div className="animate-in fade-in duration-700">
           <PopularContestsSection user={true} contests={contestData} />
        </div>
      )}
    </section>
  );
};

export default FeaturedContests;