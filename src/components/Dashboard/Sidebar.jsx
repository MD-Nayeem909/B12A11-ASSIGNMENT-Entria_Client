import { MdOutlineEditNote } from "react-icons/md";
import {
  Contact,
  Crown,
  FilePlusCorner,
  Pickaxe,
  SquarePen,
  LayoutDashboard,
} from "lucide-react";
import { FaUsersCog } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router";
import useRole from "../../hooks/useRole";

export default function Sidebar() {
  const [role] = useRole();

  const allLinks = [
    {
      name: "Overview",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
      roles: ["admin", "creator", "user"],
    },
    {
      name: "My Profile",
      icon: <Contact size={20} />,
      path: "my_profile",
      roles: ["admin", "creator", "user"],
    },

    // Admin Links
    {
      name: "Manage Contests",
      icon: <MdOutlineEditNote size={22} />,
      path: "manage_contests",
      roles: ["admin"],
    },
    {
      name: "Manage Users",
      icon: <FaUsersCog size={20} />,
      path: "manage_users",
      roles: ["admin"],
    },

    // Creator Links
    {
      name: "Create Contest",
      icon: <SquarePen size={20} />,
      path: "create_contest_form",
      roles: ["creator"],
    },
    {
      name: "My Created",
      icon: <FilePlusCorner size={20} />,
      path: "created_contests",
      roles: ["creator"],
    },

    // User Links
    {
      name: "Winning Contests",
      icon: <Crown size={20} />,
      path: "my_winning_contests",
      roles: ["user"],
    },
    {
      name: "Participated",
      icon: <Pickaxe size={20} />,
      path: "my_participated_contests",
      roles: ["user"],
    },
  ];

  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <div className="flex flex-col w-64 md:w-72 min-h-full bg-base-100 border-r border-base-200 p-6">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 mt-15 lg:mt-0 mb-10 px-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-black uppercase">Entria</span>
        </Link>

        {/* Navigation Links */}
        <nav className="grow space-y-1">
          <p className="text-[10px] font-bold text-base-content/40 uppercase tracking-[0.2em] mb-4 px-3">
            Main Menu
          </p>

          {allLinks
            .filter((link) => link.roles.includes(role))
            .map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-300 group
                  ${
                    isActive
                      ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                      : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
                  }`
                }
              >
                <span className="transition-transform group-hover:scale-110">
                  {link.icon}
                </span>
                <span className="text-sm">{link.name}</span>
              </NavLink>
            ))}
        </nav>

        {/* Sidebar Footer (Optional) */}
        <div className="mt-auto pt-6 border-t border-base-200">
          <div className="bg-primary/5 p-4 rounded-2xl">
            <p className="text-[10px] font-bold text-primary uppercase">
              Pro Account
            </p>
            <p className="text-xs opacity-60 mt-1">
              Enjoy all premium contest features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
