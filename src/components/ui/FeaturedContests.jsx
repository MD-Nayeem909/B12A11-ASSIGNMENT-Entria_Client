import React from "react";
import NoContestFound from "./NoContestFound";
import PopularContestsSection from "./PopularContestsSection";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../common/LoadingSpinner";

const FeaturedContests = () => {

const { data: contestData = [], isLoading } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axios(
        import.meta.env.VITE_API_URL + "public/data.json"
      );
      return res.data;
    },
  });

  return (
    <div>
      <div className="flex flex-col gap-4 text-center my-20 px-4">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0">
          Featured Creative Contests
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Showcase your creativity and compete with talented creators worldwide.
          Win prizes and recognition.
        </p>
      </div>
      {isLoading && (
          <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <LoadingSpinner />
          </div>
        )}
      {contestData.length === 0 ? (
        <div className="flex justify-center">
          <NoContestFound />
        </div>
      ) : (
        <div>
          <PopularContestsSection user={true} contests={contestData} />
        </div>
      )}
    </div>
  );
};

export default FeaturedContests;
