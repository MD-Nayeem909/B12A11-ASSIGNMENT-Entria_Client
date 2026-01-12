import React from "react";
import { NavLink, Link } from "react-router";
import { useTheme } from "../../Providers/ThemeProvider";
import useAuth from "../../hooks/useAuth";
import UserProfileDropdown from "../Profile/UserProfileDropdown";
import toast from "react-hot-toast";
import LogoIcon from "../common/LogoIcon";
import { Sun, Moon, Menu } from "lucide-react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = async () => {
    try {
      await logOut();
      localStorage.removeItem("token");
      toast.success("Logout successful!");
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  const navLinks = [
    { name: "Home", path: "/", public: true },
    { name: "All Contests", path: "/contests", public: true },
    { name: "Leaderboard", path: "/leaderboard", public: true },
    {
      name: "Create Contest",
      path: "/dashboard/create_contest_form",
      public: false,
    },
    { name: "Dashboard", path: "/dashboard", public: false },
  ];

  const visibleLinks = navLinks.filter((link) => link.public || !!user);

  // Active Link Styling function
  const linkStyles = ({ isActive }) =>
    `font-medium transition-colors duration-200 hover:text-primary ${
      isActive
        ? "text-primary border-b-2 border-primary pb-1"
        : "text-base-content/70"
    }`;

  const renderLinks = visibleLinks.map((link) => (
    <li key={link.path}>
      <NavLink to={link.path} className={linkStyles}>
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="sticky top-0 z-50 bg-base-200/80 backdrop-blur-md border-b border-base-200">
      <div className="navbar container mx-auto px-4 min-h-18">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden mr-2"
            >
              <Menu size={24} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-200"
            >
              {renderLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <LogoIcon />
          </Link>
        </div>

        {/* Navbar Center (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8 px-1">{renderLinks}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2 md:gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun size={22} className="text-warning" />
            ) : (
              <Moon size={22} />
            )}
          </button>

          {user ? (
            <UserProfileDropdown user={user} handleLogout={handleLogout} />
          ) : (
            <div className="flex gap-2 items-center">
              <NavLink
                to="/auth/login"
                className="btn btn-ghost btn-sm md:btn-md"
              >
                Sign In
              </NavLink>
              <NavLink to="/auth/register" className="hidden md:block">
                <button className="btn btn-primary btn-sm md:btn-md rounded-full px-6 shadow-lg shadow-primary/20 whitespace-nowrap">
                  Get Started
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
