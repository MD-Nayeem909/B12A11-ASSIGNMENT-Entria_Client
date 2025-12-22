import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import useContestSearch from "../../hooks/useContestSearch";
const SearchItem = ({ item }) => (
  <li className="flex items-center justify-between p-3 transition-all duration-300 ease-in-out bg-black/5 dark:bg-gray-500/10 hover:bg-black/10 dark:hover:bg-gray-500/20 rounded-xl hover:scale-[1.02] cursor-pointer">
    <div className="flex items-center gap-4">
      {item.icon}
      <span className="text-gray-700 dark:text-gray-200">{item.title}</span>
    </div>
    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
      <span
        style={{
          backgroundColor: item.color,
          boxShadow: `0 0 8px ${item.color}`,
        }}
        className="w-2 h-2 rounded-full"
      ></span>
      <span>{item.type}</span>
    </div>
  </li>
);
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: items = [] } = useContestSearch(searchTerm);
  return (
    <div className="w-full">
      <div className="relative flex items-center justify-center font-sans w-full px-4 py-8">
        {}
        <div className="w-full max-w-2xl mx-auto p-4 space-y-6 bg-accent text-accent-content backdrop-blur-3xl border border-black/10 dark:border-white/5 rounded-3xl shadow-lg dark:shadow-2xl dark:shadow-purple-500/15">
          {}
          <div className="relative p-px rounded-2xl ocean-animated-gradient shadow-lg shadow-purple-500/20 dark:shadow-purple-600/30 transition-shadow duration-300 hover:shadow-purple-500/40 dark:hover:shadow-purple-600/50 focus-within:shadow-purple-500/40 dark:focus-within:shadow-purple-600/50">
            <div className="flex items-center w-full px-4 py-2 bg-white/80 dark:bg-gray-900/90 rounded-[15px]">
              <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search the app.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-1 text-lg text-gray-800  placeholder-gray-400 dark:placeholder-gray-500 bg-transparent focus:outline-none flex-1 min-w-0"
              />
            </div>
          </div>

          {}
          {items.length > 0 && (
            <div className="px-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
                  Recent search
                </h2>
                <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:text-black dark:hover:text-white">
                  Clear all
                </button>
              </div>

              <ul className="space-y-2">
                {items.map((item) => (
                  <SearchItem key={item._id} item={item} />
                ))}
                {items.length === 0 && (
                  <p className="text-center text-gray-400 dark:text-gray-500 py-4">
                    No results found for &quot;{searchTerm}&quot;
                  </p>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
