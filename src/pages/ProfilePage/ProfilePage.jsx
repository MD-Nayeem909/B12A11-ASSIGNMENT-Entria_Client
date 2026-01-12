import { useEffect, useState } from "react";
import {
  Mail,
  MapPinCheck,
  TextQuote,
  ShieldCheck,
  Trash2,
  Edit3,
} from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import DeleteModal from "../../components/common/ModalsButton/DeleteModal";
import useRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import WinPercentageChart from "./WinPercentageChart";

const Profile = () => {
  const { user, setUser, updateUserProfile, deleteAccount } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const role = useRole();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  // React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const { data: profileStats } = useQuery({
    queryKey: ["profileStats", user?.uid],
    enabled: !!user?.uid,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.uid}`);
      return res.data;
    },
  });

  console.log(profileStats);
  

  useEffect(() => {
    if (user) {
      reset({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        bio: user.bio || "",
        address: user.address || "",
      });
    }
  }, [user, reset]);

  // Watch displayName for live UI update
  const displayNameWatch = watch("displayName");
  const photoURLWatch = watch("photoURL");

  const updateMutation = useMutation({
    mutationFn: async (data) => {
      await updateUserProfile(data.displayName, data.photoURL);
      const res = await axiosSecure.patch(`users/update/${user.uid}`, {
        bio: data.bio,
        address: data.address,
      });
      return res.data;
    },
    onSuccess: (updatedUser) => {
      setUser((prev) => ({
        ...prev,
        displayName: displayNameWatch,
        photoURL: photoURLWatch,
        bio: updatedUser?.bio ?? prev.bio,
        address: updatedUser?.address ?? prev.address,
      }));
      toast.success("Profile updated!");
      setEditMode(false);
    },
    onError: (err) => toast.error(err.message),
  });

  // Handle Profile Update
  const onSubmit = (data) => updateMutation.mutate(data);

  const accountDelete = async () => {
    await axiosSecure.delete(`users/${user.uid}`);
    await deleteAccount();
    navigate("/");
  };

  //  Delete Account Mutation
  const deleteMutation = useMutation({
    mutationFn: accountDelete,
    onSuccess: () => {
      setUser(null);
      setDeleteOpen(false);
      toast.success("Account deleted successfully!");
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <div className="p-4 md:p-10 bg-base-200 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter uppercase">
              Profile <span className="text-primary">Settings</span>
            </h2>
            <p className="text-[11px] opacity-40 font-bold uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
              <ShieldCheck size={14} /> Manage your personal information
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side: Photo & Role */}
          <div className="bg-base-100 p-8 rounded-3xl shadow-sm border border-base-content/5 flex flex-col items-center">
            <div className="relative">
              <img
                src={photoURLWatch || user?.photoURL}
                className="w-32 h-32 rounded-full object-cover border-4 border-base-200 shadow-xl"
                alt="Profile"
              />
              <div className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg">
                <ShieldCheck size={16} />
              </div>
            </div>
            <h2 className="text-xl font-bold mt-4 uppercase tracking-tight">
              {displayNameWatch || user?.displayName}
            </h2>
            <div className="badge badge-primary badge-outline mt-1 font-bold text-[10px] uppercase tracking-widest">
              {role}
            </div>

            <div className="w-full mt-8">
              {(role === "user" || role?.[0] === "user") && (
                <WinPercentageChart
                  participated={profileStats?.participatedCount || 0}
                  won={profileStats?.wonCount || 0}
                />
              )}
            </div>
          </div>

          {/* Right Side: Form / Display */}
          <div className="lg:col-span-2 bg-base-100 p-8 rounded-3xl shadow-sm border border-base-content/5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-xs uppercase tracking-[0.2em] opacity-30">
                Personal Details
              </h3>
              {!editMode && (
                <button
                  onClick={() => setEditMode(true)}
                  className="btn btn-sm btn-ghost gap-2 font-bold text-[10px] uppercase"
                >
                  <Edit3 size={14} /> Edit
                </button>
              )}
            </div>

            {editMode ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-[10px] uppercase opacity-50">
                        Name
                      </span>
                    </label>
                    <input
                      {...register("displayName", { required: true })}
                      className="input input-bordered border placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-[10px] uppercase opacity-50">
                        Photo URL
                      </span>
                    </label>
                    <input
                      {...register("photoURL", { required: true })}
                      className="input input-bordered border placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div className="form-control md:col-span-2">
                    <label className="label">
                      <span className="label-text font-bold text-[10px] uppercase opacity-50">
                        Bio
                      </span>
                    </label>
                    <div>
                      <textarea
                        {...register("bio")}
                        className="textarea border placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200 w-full"
                      />
                    </div>
                  </div>

                  <div className="form-control md:col-span-2">
                    <label className="label">
                      <span className="label-text font-bold text-[10px] uppercase opacity-50">
                        Address
                      </span>
                    </label>
                    <input
                      {...register("address")}
                      className="input input-bordered border placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200 w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    type="submit"
                    disabled={updateMutation.isPending}
                    className="btn btn-primary rounded-xl px-6 font-bold uppercase text-[10px]"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditMode(false)}
                    className="btn btn-ghost rounded-xl px-6 font-bold uppercase text-[10px]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <DetailRow
                  icon={<Mail size={16} />}
                  label="Email Address"
                  value={user?.email}
                />
                <DetailRow
                  icon={<TextQuote size={16} />}
                  label="Biography"
                  value={user?.bio || "No bio added yet."}
                />
                <DetailRow
                  icon={<MapPinCheck size={16} />}
                  label="Address"
                  value={user?.address || "Not specified"}
                />

                <div className="pt-8 border-t border-base-content/5 mt-10">
                  <button
                    onClick={() => setDeleteOpen(true)}
                    className="btn btn-ghost text-rose-500 btn-sm font-bold text-[10px] uppercase tracking-widest hover:bg-rose-500/10 rounded-xl"
                  >
                    <Trash2 size={14} /> Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={() => deleteMutation.mutate()}
        loading={deleteMutation.isPending}
      />
    </div>
  );
};

// Internal Helper to avoid Import Errors
const DetailRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div className="p-2 bg-primary/5 text-primary rounded-lg">{icon}</div>
    <div>
      <p className="text-[10px] font-bold uppercase opacity-30 tracking-widest">
        {label}
      </p>
      <p className="font-semibold text-sm">{value}</p>
    </div>
  </div>
);

export default Profile;
