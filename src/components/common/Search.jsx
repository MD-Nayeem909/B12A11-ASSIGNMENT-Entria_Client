import { useState, useRef, useEffect } from "react";
import { Search as SearchIcon, X, ArrowRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useContestSearch from "../../hooks/useContestSearch";

const SearchItem = ({ item }) => (
  <motion.li
    whileHover={{ x: 5 }}
    className="flex items-center justify-between p-4 mb-2 transition-all bg-base-200/50 hover:bg-primary hover:text-primary-content rounded-2xl cursor-pointer group"
  >
    <div className="flex items-center gap-4">
      <div className="p-2 bg-base-100 rounded-lg group-hover:bg-primary-focus">
        <Zap className="w-4 h-4 text-primary" />
      </div>
      <div>
        <p className="font-bold text-sm leading-tight">{item.title}</p>
        <p className="text-[10px] opacity-60 uppercase tracking-widest mt-1">
          {item.type}
        </p>
      </div>
    </div>
    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
  </motion.li>
);

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { data: items = [] } = useContestSearch(searchTerm);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      className="w-full max-w-2xl mx-auto py-6 md:py-10 px-4 md:px-0"
      ref={searchRef}
    >
      <div className="relative">
        <div
          className={`
          relative flex items-center w-full px-4 md:px-5 py-3 md:py-4 transition-all duration-500
          bg-base-100 border-2 rounded-4xl md:rounded-4xl shadow-md focus-within:shadow-lg
          ${
            isFocused
              ? "border-primary ring-4 ring-primary/10"
              : "border-base-content/5"
          }
        `}
        >
          <SearchIcon
            className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
              isFocused ? "text-primary" : "text-base-content/40"
            }`}
          />
          <input
            type="text"
            placeholder="Search contests..." 
            value={searchTerm}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 md:px-4 text-base md:text-lg bg-transparent focus:outline-none text-base-content placeholder:text-base-content/30"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="hover:rotate-90 transition-transform"
            >
              <X className="w-4 h-4 md:w-5 md:h-5 opacity-40 hover:opacity-100" />
            </button>
          )}
        </div>

        {/* Search Results Dropdown */}
        <AnimatePresence>
          {isFocused && (searchTerm || items.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="absolute left-0 right-0 w-full mt-2 md:mt-4 bg-base-100 border border-base-content/5 rounded-3xl md:rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden z-50 backdrop-blur-xl"
            >
              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-4 px-2">
                  <h2 className="text-[10px] font-black tracking-[0.2em] text-base-content/40 uppercase">
                    {items.length > 0
                      ? `Results (${items.length})`
                      : "Searching..."}
                  </h2>
                </div>
                <ul className="max-h-[60vh] md:max-h-100 overflow-y-auto pr-1 custom-scrollbar">
                  {items.map((item) => (
                    <SearchItem key={item._id} item={item} />
                  ))}

                  {searchTerm && items.length === 0 && (
                    <div className="text-center py-8 md:py-12">
                      <p className="text-sm text-base-content/50 italic px-4">
                        No results for "{searchTerm}"
                      </p>
                    </div>
                  )}
                </ul>
              </div>

              <div className="bg-base-200/50 p-3 md:p-4 text-center border-t border-base-content/5">
                <p className="text-[9px] md:text-[10px] text-base-content/30 font-medium">
                  Press <kbd className="kbd kbd-xs">Enter</kbd> to see all
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
