import { Search } from "lucide-react";

const Searchbar = ({ search, setSearch }) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 z-10 text-gray-400" size={18} />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input bg-base-200 input-bordered  pl-10 w-full md:w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
      />
    </div>
  );
};

export default Searchbar;
