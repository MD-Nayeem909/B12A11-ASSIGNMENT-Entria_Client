import { useEffect, useState } from "react";
import { Link2, Mail, MapPinCheck, TextQuote, User } from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
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
  const photoURL = watch("photoURL");

  //  Update Profile Mutation
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
      setUser((user) => ({
        ...user,
        displayName: displayNameWatch,
        photoURL,
        bio: updatedUser?.bio ?? user.bio,
        address: updatedUser?.address ?? user.address,
      }));
      toast.success("Profile updated successfully!");
      setEditMode(false);
    },
    onError: (err) => toast.error(err.message),
  });

  const accountDelete = async () => {
    await axiosSecure.delete(`users/${user.uid}`);
    await deleteAccount();
    navigate("/");
  };

  // 🔥 Delete Account Mutation
  const deleteMutation = useMutation({
    mutationFn: accountDelete,
    onSuccess: () => {
      setUser(null);
      setDeleteOpen(false);
      toast.success("Account deleted successfully!");
    },
    onError: (err) => toast.error(err.message),
  });

  // Handle Profile Update
  const onSubmit = (data) => {
    updateMutation.mutate(data);
  };

  return (
    <div className="flex justify-center p-4 md:px-8 h-full bg-base-200">
      <div className="w-full">
        {/* Header */}
        <div className="max-w-4xl mx-auto py-10">
          <h1 className="text-3xl font-bold">Hello, {role} 👋</h1>
          <p className="text-sm opacity-80 mt-2">
            Manage your profile and update your information below.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-base-100 rounded-2xl shadow-xl p-10 max-w-4xl mx-auto flex flex-col items-center md:flex-row gap-10">
          {/* Left - Image */}
          <div className="flex flex-col items-center md:w-1/2">
            <div className="relative">
              <img
                src={photoURL || user?.photoURL}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mt-4 text-primary">
                {displayNameWatch || user?.displayName}
              </h2>
              <p className="text-gray-500">{user?.email}</p>
            </div>
            {role[0] === "user" && (
              <div className="w-full">
                <WinPercentageChart />
              </div>
            )}
          </div>

          {/* Right Section — Form or Display */}
          <div className="md:w-1/2">
            {editMode ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="text-sm font-semibold text-primary">
                    Display Name
                  </label>
                  <div className="relative">
                    <input
                      {...register("displayName", { required: true })}
                      className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200 pl-10 mt-2"
                      placeholder="John Doe"
                    />
                    <User
                      size={20}
                      className="absolute left-3 top-7 transform -translate-y-1/2 z-10 text-gray-400"
                    />
                  </div>
                  {errors.displayName && (
                    <p className="text-red-500 text-sm">Name is required</p>
                  )}
                </div>

                {/* PhotoURL Filed */}
                <div>
                  <label className="text-sm font-semibold text-primary mb-2">
                    PhotoURL
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      placeholder="Image URL"
                      {...register("photoURL", {
                        required: "Image URL is required",
                        pattern: {
                          value: /^(https?:\/\/)/i,
                          message: "Enter a valid image URL",
                        },
                      })}
                      className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200 mt-2 pl-10"
                    />
                    <Link2
                      size={20}
                      className="absolute left-3 top-7 transform -translate-y-1/2 z-10 text-gray-400"
                    />
                  </div>
                  {errors.photoURL && (
                    <p className="text-red-500 text-sm">
                      {errors.photoURL.message}
                    </p>
                  )}
                </div>

                {/* Bio Filed */}
                <div>
                  <label className="text-sm font-semibold text-primary mb-2">
                    Bio
                  </label>
                  <div className="relative">
                    <textarea
                      placeholder="Tell something about yourself"
                      {...register("bio")}
                      className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200 mt-2 pl-10"
                    />
                    <TextQuote
                      size={20}
                      className="absolute left-3 top-7 transform -translate-y-1/2 z-10 text-gray-400"
                    />
                  </div>
                </div>

                {/* Address Filed */}
                <div>
                  <label className="text-sm font-semibold text-primary mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <input
                      placeholder="Add your address"
                      {...register("address")}
                      className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200 mt-2 pl-10"
                    />
                    <MapPinCheck
                      size={20}
                      className="absolute left-3 top-7 transform -translate-y-1/2 z-10 text-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-semibold text-primary">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    className="input input-bordered w-full mt-1"
                    disabled
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={updateMutation.isPending}
                  >
                    {updateMutation.isPending ? "Saving..." : "Save Changes"}
                  </button>

                  <button
                    onClick={() => setEditMode(false)}
                    className="btn bg-rose-500 text-white"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="text-indigo-600" />
                  <p className="text-primary font-medium">
                    {user?.displayName}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="text-indigo-600" />
                  <p className="text-primary font-medium">{user?.email}</p>
                </div>

                <div className="flex items-center gap-2">
                  <TextQuote className="text-indigo-600" />
                  <p className="text-primary font-medium">
                    {user?.bio || "No bio added yet"}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <MapPinCheck className="text-indigo-600" />
                  <p className="text-primary font-medium">
                    {user?.address || "No address added yet"}
                  </p>
                </div>

                <button
                  onClick={() => setEditMode(true)}
                  className="btn border-2 border-indigo-500 text-primary w-full"
                >
                  Update Profile
                </button>

                <button
                  onClick={() => setDeleteOpen(true)}
                  className="btn bg-rose-600 hover:bg-rose-700 text-white w-full"
                >
                  Delete Account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={() => deleteMutation.mutate()}
        loading={deleteMutation.isPending}
      />
    </div>
  );
};

export default Profile;
