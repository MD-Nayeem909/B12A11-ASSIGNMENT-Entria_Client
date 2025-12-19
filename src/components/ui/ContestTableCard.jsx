import React from "react";
import Contests from "../contest/Contests";

const ContestTableCard = ({
  contests,
  handleReject,
  handleDelete,
  handleConfirm,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Contests Table */}
      <div className="lg:col-span-4 bg-base-100 p-4 shadow-md rounded-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Manage Contests</h3>
          <div className="text-sm text-gray-500">Showing latest contests</div>
        </div>
        <Contests
          contests={contests}
          handleReject={handleReject}
          handleDelete={handleDelete}
          handleConfirm={handleConfirm}
        />
        <div className="mt-4 flex justify-end">
          {/* Load More */}
          {hasNextPage && (
            <div className="flex justify-center">
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="btn btn-outline btn-primary btn-sm"
              >
                {isFetchingNextPage ? "Loading..." : "View More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContestTableCard;
