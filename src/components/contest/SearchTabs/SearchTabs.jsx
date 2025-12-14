import { Search } from "lucide-react";

const SearchTabs = ({
  search,
  setSearch,
  activeTab,
  setActiveTab,
  contestTypes,
}) => {
  return (
    <div className="flex flex-col relative lg:flex-row lg:items-center justify-between gap-4 mb-8">
      <input
        type="text"
        placeholder="Search Contests...."
        className="input input-bordered lg:max-w-sm px-10 block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search className="absolute -top-1 w-6 h-6 m-3 text-gray-400 z-10" />

      <div className="tabs tabs-boxed">
        {contestTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`tab ${activeTab === type ? "tab-active" : ""}`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchTabs;
