import { useState } from "react";
import { EyeIcon, EyeOffIcon, LockIcon } from "./AuthIcons";

const PasswordField = ({ register }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="block text-neutral font-bold text-sm mb-2">Password</label>
      <div className="relative">
        <span className="absolute left-3 inset-y-0 flex items-center text-neutral">
          <LockIcon />
        </span>

        <input
          {...register("password", { required: true })}
          type={show ? "text" : "password"}
          className="block w-full pl-10 pr-3 py-3 border border-base-300 rounded-lg bg-base-100 text-base-content placeholder-neutral focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent transition-all duration-200"
          placeholder="Password"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 inset-y-0 flex items-center text-neutral"
        >
          {show ? <EyeIcon /> :  <EyeOffIcon /> }
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
