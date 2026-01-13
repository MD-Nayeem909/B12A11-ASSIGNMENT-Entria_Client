import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import { useTheme } from "../../Providers/ThemeProvider";
import useAuth from "../../hooks/useAuth";
import UserProfileDropdown from "../Profile/UserProfileDropdown";
import toast from "react-hot-toast";
import LogoIcon from "../common/LogoIcon";
// এখানে ArrowRight, X, এবং Menu অবশ্যই থাকতে হবে
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll logic
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const handleLogout = async () => {
    try {
      await logOut();
      localStorage.removeItem("token");
      toast.success("Logout successful!");
      setIsMenuOpen(false);
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

  const linkStyles = ({ isActive }) =>
    `text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-200 hover:text-primary ${
      isActive
        ? "text-primary border-b-2 border-primary pb-1"
        : "text-base-content/60"
    }`;

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 bg-base-200/80 backdrop-blur-md border-b border-base-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-17.5">
          {/* Mobile Menu Trigger & Logo */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-ghost lg:hidden mr-2 px-2"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <Link to="/" className="flex items-center">
              <LogoIcon />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-8">
              {visibleLinks.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} className={linkStyles}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle btn-sm"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-warning" />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {user ? (
              <UserProfileDropdown user={user} handleLogout={handleLogout} />
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link
                  to="/auth/login"
                  className="text-[10px] font-bold uppercase tracking-widest hover:text-primary"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth/register"
                  className="btn btn-primary btn-xs md:btn-sm rounded-full px-5 font-bold uppercase tracking-tighter italic shadow-lg shadow-primary/20"
                >
                  Join Now
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* --- Responsive Mobile Menu --- */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-125 opacity-100 pb-6 mt-2"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="border-t border-base-300/30 pt-4">
            <ul className="flex flex-col gap-2">
              {visibleLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between p-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.15em] transition-all ${
                        isActive
                          ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                          : "bg-base-300/30 text-base-content/70 hover:bg-base-300"
                      }`
                    }
                  >
                    {link.name}
                    <ArrowRight size={14} className="opacity-40" />
                  </NavLink>
                </li>
              ))}

              {!user && (
                <div className="grid grid-cols-2 gap-3 pt-4 px-2">
                  <Link
                    to="/auth/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn btn-ghost bg-base-300/30 rounded-xl text-[10px] font-black uppercase"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn btn-primary rounded-xl text-[10px] font-black uppercase"
                  >
                    Join
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
