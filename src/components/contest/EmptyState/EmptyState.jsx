import React from "react";
import NoContestFound from "../../ui/NoContestFound";

const EmptyState = ({ filteredContests }) => {
  return (
    <div>
      {filteredContests.length === 0 && (
        <div className="flex justify-center">
          <NoContestFound />
        </div>
      )}
    </div>
  );
};

export default EmptyState;
