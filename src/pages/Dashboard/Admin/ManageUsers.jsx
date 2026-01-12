import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import UserRow from "../../../components/ui/UserRow";
import { Users, ShieldCheck } from "lucide-react";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const roleMutation = useMutation({
    mutationFn: ({ userId, role }) =>
      axiosSecure.patch(`users/role/${userId}`, { role }),
    onSuccess: () => {
      toast.success("User role updated successfully");
      queryClient.invalidateQueries(["users"]);
    },
    onError: (err) =>
      toast.error(err.response?.data?.message || "Role update failed"),
  });

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-100 gap-3">
        <span className="loading loading-ring loading-lg text-primary"></span>
        <p className="text-[11px] font-bold uppercase tracking-widest opacity-40">
          Syncing Users...
        </p>
      </div>
    );

  return (
    <div className="space-y-6 pb-10 p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
        <div>
          <h2 className="text-2xl font-black tracking-tighter uppercase">
            User <span className="text-primary">Management</span>
          </h2>
          <p className="text-[11px] opacity-40 font-bold uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
            <ShieldCheck size={14} /> Total {users.length} registered accounts
          </p>
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto custom-scrollbar bg-base-100 rounded-xl border border-base-content/5 shadow-sm">
        <table className="table w-full border-separate border-spacing-y-2 min-w-200">
          <thead>
            <tr className="border-none opacity-50">
              <th className="bg-transparent font-medium text-[11px] uppercase tracking-widest pl-8">
                #
              </th>
              <th className="bg-transparent font-medium text-[11px] uppercase tracking-widest">
                User Profile
              </th>
              <th className="bg-transparent font-medium text-[11px] uppercase tracking-widest">
                Email Address
              </th>
              <th className="bg-transparent font-medium text-[11px] uppercase tracking-widest text-center">
                Current Role
              </th>
              <th className="bg-transparent font-medium text-[11px] uppercase tracking-widest text-right pr-8">
                Modify Permission
              </th>
            </tr>
          </thead>

          <tbody className="text-base-content/80">
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
                activeMutationId={roleMutation.variables?.userId}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
