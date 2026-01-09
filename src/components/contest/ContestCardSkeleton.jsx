import React from "react";

const ContestCardSkeleton = () => {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden h-full">
      {/* Image Skeleton */}
      <div className="skeleton h-52 w-full rounded-none"></div>

      <div className="card-body p-5 gap-3">
        {/* Badge Skeleton */}
        <div className="skeleton h-5 w-20 rounded-full"></div>

        {/* Title Skeleton */}
        <div className="skeleton h-7 w-3/4 mt-2"></div>

        {/* Description Skeleton */}
        <div className="space-y-2 mt-2">
          <div className="skeleton h-3 w-full"></div>
          <div className="skeleton h-3 w-5/6"></div>
        </div>

        {/* Info Grid Skeleton */}
        <div className="grid grid-cols-2 gap-2 py-4 border-y border-base-200 my-2">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-16 justify-self-end"></div>
        </div>

        {/* Footer Skeleton */}
        <div className="flex justify-between items-center mt-2">
          <div className="space-y-1">
            <div className="skeleton h-2 w-10"></div>
            <div className="skeleton h-3 w-16"></div>
          </div>
          <div className="skeleton h-9 w-24 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ContestCardSkeleton;
