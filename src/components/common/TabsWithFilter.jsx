import { useState } from "react";
import ContestCard from "../contest/ContestCard";

const TabsWithFilter = ({ contests }) => {
  const [activeTab, setActiveTab] = useState("All");

  // Unique contestType list
  const categories = [
    "All",
    ...new Set(contests.map((item) => item.contestType)),
  ];

  // Filter logic
  const filteredData =
    activeTab === "All"
      ? contests
      : contests.filter((item) => item.contestType === activeTab);

      

  return (
    <div>
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-boxed my-6 font-semibold bg-base-200 py-2 rounded-xl">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            onClick={() => setActiveTab(cat)}
            className={`tab ${activeTab === cat ? "tab-active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Contest List */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredData.map((contest) => (
         <ContestCard contest={contest}/>
        ))}
      </div>
    </div>
  );
};

export default TabsWithFilter;
