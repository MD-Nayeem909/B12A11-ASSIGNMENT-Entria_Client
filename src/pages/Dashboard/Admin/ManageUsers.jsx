import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import UserRow from "../../../components/ui/UserRow";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // fetch users
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
      
    },
  });

  // role update mutation
  const roleMutation = useMutation({
    mutationFn: ({ userId, role }) =>
      axiosSecure.patch(`users/role/${userId}`, { role }),
    onSuccess: () => {
      toast.success("User role updated");
      queryClient.invalidateQueries(["users"]);
    },
    onError: (err) =>
      toast.error(err.response?.data?.message || "Role update failed"),
  });

  if (isLoading) return <p>Loading users...</p>;

  return (
    <div className="p-6 bg-base-100 md:m-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, idx) => (
              <UserRow
                key={user._id}
                user={user}
                index={idx}
                onChangeRole={(role) =>
                  roleMutation.mutate({
                    userId: user._id,
                    role,
                  })
                }
                loading={roleMutation.isPending}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
