import React from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  Image as ImageIcon,
  FileText,
  Info,
} from "lucide-react";

export default function CreateContestForm() {
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const contest = location.state?.contest;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: contest
      ? {
          ...contest,
          deadline: contest.deadline ? new Date(contest.deadline) : null,
        }
      : {},
  });

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      deadline: data.deadline ? new Date(data.deadline).toISOString() : null,
      price: parseFloat(data.price),
      prize: parseFloat(data.prize),
      status: contest ? contest.status : "pending", // ডিফাল্ট স্ট্যাটাস
    };
    try {
      const apiCall = contest
        ? axiosSecure.patch(`creator/contests/${contest._id}`, payload)
        : axiosSecure.post("creator/contests", payload);

      await apiCall;
      toast.success(contest ? "Contest updated!" : "Contest created!");
      navigate("/dashboard/created_contests");
    } catch (error) {
      toast.error(error.response?.data?.message || "Operation failed");
    }
  };

  const inputStyle =
    "w-full bg-base-200 border-none rounded-xl px-4 py-3 duration-300 rounded-lg focus:outline-none bg-base-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-4xl p-8 md:p-12 rounded-3xl bg-base-100 shadow-xl my-12 border border-base-200"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black italic tracking-tighter">
          {contest ? "EDIT" : "CREATE"}{" "}
          <span className="text-primary">CONTEST</span>
        </h2>
        <p className="text-base-content/50 text-sm mt-2">
          Fill in the details to launch your next challenge
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
        {/* INPUT GROUP */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contest Name */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold opacity-70 ml-1">
              <FileText size={16} className="text-primary" /> Contest Title
            </label>
            <input
              type="text"
              className={inputStyle}
              {...register("title", { required: "Title is required" })}
              placeholder="e.g. Modern Logo Design Challenge"
            />
            {errors.title && (
              <span className="text-error text-xs ml-1">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold opacity-70 ml-1">
              <ImageIcon size={16} className="text-primary" /> Thumbnail Image
              URL
            </label>
            <input
              type="text"
              className={inputStyle}
              {...register("image", { required: "Image URL is required" })}
              placeholder="https://imgur.com/your-image.jpg"
            />
            {errors.image && (
              <span className="text-error text-xs ml-1">
                {errors.image.message}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-bold opacity-70 ml-1">
            <Info size={16} className="text-primary" /> Detailed Description
          </label>
          <textarea
            className={`${inputStyle} min-h-30`}
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="What is this contest about?"
          />
        </div>

        {/* Price, Prize, Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Price */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold opacity-70 ml-1">
              <DollarSign size={16} className="text-primary" /> Entry Fee
            </label>
            <input
              type="number"
              className={inputStyle}
              {...register("price", { required: true, min: 0 })}
            />
          </div>

          {/* Prize Money */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold opacity-70 ml-1">
              Prize Pool
            </label>
            <input
              type="number"
              className={inputStyle}
              {...register("prize", { required: true, min: 1 })}
            />
          </div>
          {/* Category */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold opacity-70 ml-1">
              Category
            </label>
            <select
              className={`${inputStyle} appearance-none cursor-pointer`}
              {...register("type", { required: true })}
            >
              <option value="">Select Type</option>
              <option value="Design">Design</option>
              <option value="Writing">Writing</option>
              <option value="Business">Business</option>
              <option value="Photography">Photography</option>
            </select>
          </div>
        </div>

        {/* Task Instruction */}
        <div>
          <label className="label mb-2 font-semibold">Task Instructions</label>
          <textarea
            className="textarea bg-base-200 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            rows={3}
            {...register("instruction", { required: true })}
            placeholder="Submit a logo, maintain color palette, etc."
          ></textarea>
          {errors.instruction && (
            <p className="text-red-500 text-sm">Instruction required</p>
          )}
        </div>

        {/* Deadline with Time Picker */}
        <div className="space-y-2 bg-base-200/50 p-6 rounded-2xl border border-dashed border-base-300">
          <label className="flex items-center gap-2 text-sm font-bold opacity-70 mb-2">
            <Calendar size={18} className="text-primary" /> Set Deadline (Date &
            Time)
          </label>
          <Controller
            name="deadline"
            control={control}
            rules={{ required: "Deadline is required" }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                showTimeSelect // টাইম সিলেক্ট অপশন অন করা হয়েছে
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="Time"
                minDate={new Date()}
                dateFormat="MMMM d, yyyy h:mm aa" // মে মাস ১০, ২০২৪ ১২:৩০ PM ফরম্যাট
                placeholderText="Click to select date and time"
                className={`${inputStyle} !bg-base-100 border border-base-300`}
                wrapperClassName="w-full"
              />
            )}
          />
          {errors.deadline && (
            <p className="text-error text-xs mt-1">{errors.deadline.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="btn btn-primary w-full h-14 rounded-xl shadow-lg shadow-primary/20 text-lg font-bold"
        >
          {contest ? "Update Contest Information" : "Launch Contest Now"}
        </motion.button>
      </form>
    </motion.section>
  );
}
