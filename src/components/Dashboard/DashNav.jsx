import React from "react";
import { FiBell } from "react-icons/fi";
import { GoSidebarCollapse } from "react-icons/go";

const DashNav = () => {
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
          <h2 className="text-2xl font-semibold">Welcome back, Admin</h2>
          <p className="text-sm text-gray-500">
            Here's the activity overview for your contests
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="btn btn-ghost btn-circle">
            <FiBell size={18} />
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.pravatar.cc/100" alt="avatar" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default DashNav;
