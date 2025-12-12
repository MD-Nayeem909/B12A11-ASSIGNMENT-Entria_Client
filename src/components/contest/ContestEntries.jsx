import React from "react";
export default function ContestEntries() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n} className="h-40 bg-base-300 rounded-xl shadow" />
      ))}
    </div>
  );
}
