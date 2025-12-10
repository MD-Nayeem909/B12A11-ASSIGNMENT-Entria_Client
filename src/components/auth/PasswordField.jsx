import { useState } from "react";
import { EyeIcon, EyeOffIcon, LockIcon } from "./AuthIcons";

const PasswordField = ({ register }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="block text-sm mb-2">Password</label>
      <div className="relative">
        <span className="absolute left-3 inset-y-0 flex items-center text-gray-400">
          <LockIcon />
        </span>

        <input
          {...register("password", { required: true })}
          type={show ? "text" : "password"}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
          placeholder="********"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 inset-y-0 flex items-center"
        >
          {show ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
