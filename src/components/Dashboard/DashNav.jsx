import React from "react";
import { FiBell } from "react-icons/fi";
import { GoSidebarCollapse } from "react-icons/go";
import useAuth from "../../hooks/useAuth";
import UserProfileDropdown from "../Profile/UserProfileDropdown";
import Theme from "../common/Theme";
import { useTheme } from "../../Providers/ThemeProvider";
import useRole from "../../hooks/useRole";

const DashNav = () => {
  const { user } = useAuth();
  const [role, isRoleLoading] = useRole();
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar w-full bg-base-100 shadow">
      <label
        htmlFor="my-drawer-4"
        aria-label="open sidebar"
        className="btn btn-square btn-ghost"
      >
        {/* Sidebar toggle icon */}
        <GoSidebarCollapse size={20} />
      </label>
      <header className="flex items-center justify-between w-full px-4 ">
        <div className="flex flex-col items-baseline">
          <div className="flex flex-col md:flex-row justify-center items-end gap-2">
            <h2 className="text-2xl font-bold">Welcome back,</h2>
            <span className="">{role}</span>
          </div>
          <p className="text-sm hidden md:block">
            Here's the activity overview for your contests
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="btn btn-ghost btn-circle">
            <FiBell size={18} />
          </button>
          <button className="btn btn-ghost btn-circle">
            <Theme theme={theme} toggleTheme={toggleTheme} />
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
