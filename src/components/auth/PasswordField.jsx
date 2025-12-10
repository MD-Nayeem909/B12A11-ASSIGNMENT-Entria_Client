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
          className="w-full pl-10 pr-12 py-3 border rounded-lg bg-white dark:bg-black"
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
