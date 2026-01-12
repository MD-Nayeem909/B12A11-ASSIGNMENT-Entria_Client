import React from "react";
import { motion } from "framer-motion";
import { Shield, Mail } from "lucide-react";

const roles = ["user", "creator", "admin"];

const UserRow = ({ user, index, onChangeRole, loading, activeMutationId }) => {
  const isUpdating = loading && activeMutationId === user._id;

  const roleStyles = {
    admin: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    creator: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    user: "text-primary bg-primary/10 border-primary/20",
  };

  return (
    <motion.tr
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-base-200/40 hover:bg-base-200/80 transition-all border border-base-content/5 shadow-sm"
    >
      <td className="py-4 pl-6 border-y border-l border-base-content/5">
        {index + 1}
      </td>

      {/* User Profile Section - Fixed Image Shape */}
      <td className="py-4 border-y border-base-content/5">
        <div className="flex items-center gap-3 min-w-37.5">
          <div className="relative shrink-0">
            {/* flex-shrink-0 ইমেজকে চ্যাপ্টা হতে দিবে না */}
            <img
              src={user.image || "https://i.ibb.co/mJR9zN1/user.png"}
              alt={user.name}
              className="w-10 h-10 min-w-10 min-h-10 rounded-xl object-cover ring-1 ring-base-content/10 group-hover:ring-primary/30 transition-all shadow-sm"
            />
            {user.role === "admin" && (
              <div className="absolute -top-1 -right-1 bg-rose-500 text-white p-0.5 rounded-full ring-2 ring-base-100 shadow-sm">
                <Shield size={8} fill="currentColor" />
              </div>
            )}
          </div>
          <span className="font-semibold text-[13px] tracking-tight truncate max-w-30">
            {user.name}
          </span>
        </div>
      </td>

      <td className="py-4 border-y border-base-content/5">
        <div className="flex items-center gap-2 opacity-60 text-[12px] font-medium min-w-45">
          <Mail size={12} className="shrink-0" />
          <span className="truncate">{user.email}</span>
        </div>
      </td>

      <td className="text-center py-4 border-y border-base-content/5">
        <span
          className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border whitespace-nowrap ${
            roleStyles[user.role]
          }`}
        >
          {user.role}
        </span>
      </td>

      <td className="py-4 pr-6 border-y border-r border-base-content/5 text-right">
        <div className="flex justify-end items-center gap-2">
          <select
            className={`select select-bordered select-xs h-8 rounded-lg bg-base-100/80 border-base-content/10 text-[11px] font-bold uppercase tracking-tighter focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all ${
              isUpdating ? "opacity-50 cursor-not-allowed" : ""
            }`}
            value={user.role}
            disabled={isUpdating}
            onChange={(e) => onChangeRole(e.target.value)}
          >
            {roles.map((role) => (
              <option
                key={role}
                value={role}
                className="bg-base-200 my-2 py-2 text-base-content uppercase z-100"
              >
                {role}
              </option>
            ))}
          </select>
          {isUpdating && (
            <span className="loading loading-spinner loading-xs text-primary"></span>
          )}
        </div>
      </td>
    </motion.tr>
  );
};

export default UserRow;
