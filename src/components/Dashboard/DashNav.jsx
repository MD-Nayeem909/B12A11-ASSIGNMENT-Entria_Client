import React, { useEffect, useState } from "react";
import { FiBell, FiMenu } from "react-icons/fi";
import UserProfileDropdown from "../Profile/UserProfileDropdown";
import Theme from "../common/Theme";
import { useTheme } from "../../Providers/ThemeProvider";
import useRole from "../../hooks/useRole";
import { motion, AnimatePresence } from "framer-motion";

const DashNav = () => {
  const [role] = useRole();
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="navbar bg-base-100/80 backdrop-blur-md px-4 py-2 border-b border-base-200"
    >
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
          <FiMenu size={24} />
        </label>
      </div>

      <div className="flex-1 flex flex-col items-start ml-2 lg:ml-0">
        <div className="flex items-center gap-2">
          <h2 className="text-lg md:text-2xl font-black tracking-tight leading-none">
            Welcome,
          </h2>
          <span className="badge badge-primary badge-outline font-bold uppercase text-[10px]">
            {role}
          </span>
        </div>
        <p className="text-[10px] md:text-sm opacity-50 hidden sm:block">
          Overview of your contest activities
        </p>
      </div>

      <div className="flex-none flex items-center gap-1 md:gap-3">
        {/* Notifications */}
        <button className="btn btn-ghost btn-circle btn-sm md:btn-md relative">
          <FiBell size={20} />
          <span className="badge badge-xs badge-primary absolute top-1 right-1"></span>
        </button>

        {/* Theme Toggle */}
        <div className="p-1">
          <Theme theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* User Profile */}
        <div className="ml-2">
          <UserProfileDropdown />
        </div>
      </div>
    </motion.nav>
  );
};

export default DashNav;
