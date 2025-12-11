import React from "react";
import { FiBell } from "react-icons/fi";
import { GoSidebarCollapse } from "react-icons/go";
import useAuth from "../../hooks/useAuth";
import UserProfileDropdown from "../common/UserProfileDropdown";

const DashNav = () => {
  const { user } = useAuth();
  return (
    <nav className="navbar space-x-2 w-full bg-base-100">
      <label
        htmlFor="my-drawer-4"
        aria-label="open sidebar"
        className="btn btn-square btn-ghost"
      >
        {/* Sidebar toggle icon */}
        <GoSidebarCollapse size={20} />
      </label>
      <header className="flex items-center justify-between w-full px-4">
        <div>
          <h2 className="text-2xl font-semibold">
            Welcome back,<span>{user?.displayName}</span>
          </h2>
          <p className="text-sm text-gray-500">
            Here's the activity overview for your contests
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="btn btn-ghost btn-circle">
            <FiBell size={18} />
          </button>
          <div className="dropdown dropdown-end">
            <UserProfileDropdown />
          </div>
        </div>
      </header>
    </nav>
  );
};

export default DashNav;
