import React from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateContestForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const deadline = watch("deadline");

  const onSubmit = (data) => {
    console.log("Contest Created:", data);
  };

  return (
    <section className="mx-auto max-w-4xl p-10 rounded-xl bg-white/70 shadow-xl my-12 border border-white/30">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Create New Contest
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
        {/* INPUT GROUP */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contest Name */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700 mb-2">
              Contest Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
              {...register("name", { required: true })}
              placeholder="Contest title here"
            />
            {errors.name && <p className="text-red-500 text-sm">Required</p>}
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="text"
              className="input input-bordered w-full border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
              {...register("image", { required: true })}
              placeholder="https://example.com/image.jpg"
            />
            {errors.image && <p className="text-red-500 text-sm">Required</p>}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="label font-semibold mb-2 text-gray-700">
            Description
          </label>
          <textarea
            className="textarea textarea-bordered border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200 w-full"
            rows={4}
            {...register("description", { required: true })}
            placeholder="Explain contest purpose and details..."
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">Description required</p>
          )}
        </div>

        {/* Price + Prize Money */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Price */}
          <div>
            <label className="label font-semibold text-gray-700 mb-2">
              Entry Price ($)
            </label>
            <input
              type="number"
              className="input input-bordered w-full border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
              {...register("price", { required: true, min: 0 })}
              placeholder="$$"
            />
            {errors.price && <p className="text-red-500 text-sm">Required</p>}
          </div>

          {/* Prize Money */}
          <div>
            <label className="label font-semibold text-gray-700 mb-2">
              Prize Money ($)
            </label>
            <input
              type="number"
              className="input input-bordered w-full border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
              {...register("prize", { required: true, min: 1 })}
              placeholder="$$$"
            />
            {errors.prize && <p className="text-red-500 text-sm">Required</p>}
          </div>
        </div>

        {/* Task Instruction */}
        <div>
          <label className="label mb-2 font-semibold text-gray-700">
            Task Instructions
          </label>
          <textarea
            className="textarea textarea-bordered w-full border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
            rows={3}
            {...register("instruction", { required: true })}
            placeholder="Submit a logo, maintain color palette, etc."
          ></textarea>
          {errors.instruction && (
            <p className="text-red-500 text-sm">Instruction required</p>
          )}
        </div>

        {/* Contest Type + Deadline */}
        <div className="flex items-center gap-6">
          {/* Contest Type */}
          <div>
            <label className="label font-semibold text-gray-700 mb-2">
              Contest Type
            </label>
            <select
              className="select select-bordered w-full border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
              {...register("type", { required: true })}
            >
              <option value="">Choose type</option>
              <option value="Design">Design</option>
              <option value="Writing">Writing</option>
              <option value="Business">Business</option>
              <option value="Gaming">Gaming</option>
              <option value="Photography">Photography</option>
            </select>
            {errors.type && <p className="text-red-500 text-sm">Required</p>}
          </div>

          {/* Deadline */}
          <div>
            <label className="label font-semibold text-gray-700 mb-2">
              Deadline
            </label>
            <div>
              <DatePicker
                selected={deadline}
                onChange={(date) => setValue("deadline", date)}
                className="input input-bordered border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
                placeholderText="Select deadline"
                dateFormat="yyyy-MM-dd"
              />
            </div>

            {errors.deadline && (
              <p className="text-red-500 text-sm">Deadline required</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button className="btn btn-primary w-full rounded-lg shadow-md hover:shadow-xl transition-all">
          Create Contest
        </button>
      </form>
    </section>
  );
}
