import React from "react";
import Button from "../common/Button";

const NoContestFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p className="text-muted-foreground text-xl max-w-2xl font-semibold">
        No active contests at the moment
      </p>
      <p className="text-muted-foreground text-lg max-w-2xl">
        Be the first to create an exciting contest!
      </p>
      <Button>Be the First to Create</Button>
    </div>
  );
};

export default NoContestFound;
