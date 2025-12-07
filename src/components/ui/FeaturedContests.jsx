import React from "react";
import NoContestFound from "./NoContestFound";

const FeaturedContests = () => {
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
      <div className="flex justify-center">
        <NoContestFound />
      </div>
    </div>
  );
};

export default FeaturedContests;
