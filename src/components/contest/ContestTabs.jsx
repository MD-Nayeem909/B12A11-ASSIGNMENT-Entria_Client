import React, { useState } from "react";
import ContestBrief from "./ContestBrief";
import ContestEntries from "./ContestEntries";

export default function ContestTabs() {
  const [tab, setTab] = useState("brief");

  return (
    <div className="bg-base-100 p-6 rounded-xl shadow">
      <div className="tabs tabs-bordered">
        <button
          className={`tab ${tab === "brief" ? "tab-active" : ""}`}
          onClick={() => setTab("brief")}
        >
          Brief
        </button>
        <button
          className={`tab ${tab === "entries" ? "tab-active" : ""}`}
          onClick={() => setTab("entries")}
        >
          Entries
        </button>
      </div>

      <div className="mt-4">
        {tab === "brief" && <ContestBrief />}
        {tab === "entries" && <ContestEntries />}
      </div>
    </div>
  );
}
