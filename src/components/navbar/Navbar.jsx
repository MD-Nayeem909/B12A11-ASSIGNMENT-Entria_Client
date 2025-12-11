import React from "react";
import Button from "../common/Button";
import { Link, NavLink } from "react-router";
import Logo from "../common/logo";
import { useTheme } from "../../Providers/ThemeProvider";
import useAuth from "../../hooks/useAuth";
import UserProfileDropdown from "../common/UserProfileDropdown";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const { theme, toggleTheme } = useTheme();

  const handleLogout = async () => {
    await logOut();
    localStorage.removeItem("token");
    toast.success("Logout successful!");
    window.location.href = "/";
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "All Contests", path: "/contests" },
    { name: "My Contests", path: "/my_contests" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Dashboard", path: "/dashboard" },
  ];
  const link = links.map((link) => (
    <li key={link.name}>
      <a href={link.path}>{link.name}</a>
    </li>
  ));

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        {user ? (
          <div className="navbar-end flex items-center dropdown-end">
            <UserProfileDropdown user={user} handleLogout={handleLogout} />
          </div>
        ) : (
          <div className="navbar-end flex gap-4 items-center">
            <NavLink to="/auth/login" className="btn btn-ghost">
              Sign In
            </NavLink>
            <NavLink to="/auth/register">
              <Button className="btn btn-primary">Get Started</Button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
