import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useContestSearch = (searchTerm) => {
  const axiosSecure = useAxiosSecure();

  return useQuery({
    queryKey: ["contest-search", searchTerm],
    enabled: !!searchTerm,
    queryFn: async () => {
      const res = await axiosSecure.get(`contests/search?q=${searchTerm}`);
      return res.data;
    },
    staleTime: 1000 * 60,
    keepPreviousData: true,
  });
};

export default useContestSearch;
