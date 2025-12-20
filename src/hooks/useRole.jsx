import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  
  const { data: role, isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["role"],
    queryFn: async () => {
      const result = await axiosSecure("users/role");
      return result.data.role;
    },
  });
  return [role, isRoleLoading];
};

export default useRole;
