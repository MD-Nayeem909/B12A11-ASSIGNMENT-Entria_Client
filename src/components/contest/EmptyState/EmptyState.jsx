import React from "react";
import NoContestFound from "../../ui/NoContestFound";

const EmptyState = ({ filteredContests }) => {
  return (
    <div className="h-96 flex items-center justify-center rounded-lg">
      {filteredContests.length === 0 && (
        <div className="flex justify-center">
          <NoContestFound />
        </div>
      )}
    </div>
  );
};

export default EmptyState;
