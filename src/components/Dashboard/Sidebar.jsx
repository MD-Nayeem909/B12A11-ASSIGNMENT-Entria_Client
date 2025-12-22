import { MdOutlineEditNote } from "react-icons/md";
import {
  Contact,
  Crown,
  FilePlusCorner,
  Pickaxe,
  SquarePen,
} from "lucide-react";
import { FaUsersCog } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { FiHome } from "react-icons/fi";
import useRole from "../../hooks/useRole";

export default function Sidebar() {
  const links = [
    {
      name: "Homepage",
      icon: <img src={logo} alt="" className="w-10" />,
      path: "/",
    },
    { name: "Overview", icon: <FiHome size={20} />, path: "/dashboard" },
    { name: "My Profile", icon: <Contact size={20} />, path: "my_profile" },
    {
      name: "Manage Contests",
      icon: <MdOutlineEditNote size={20} />,
      path: "manage_contests",
    },
    {
      name: "Manage Users",
      icon: <FaUsersCog size={20} />,
      path: "manage_users",
    },
    {
      name: "Create New Contests",
      icon: <SquarePen size={20} />,
      path: "create_contest_form",
    },
    {
      name: "My Created Contests",
      icon: <FilePlusCorner size={20} />,
      path: "created_contests",
    },
    {
      name: "My Winning Contests",
      icon: <Crown size={20} />,
      path: "my_winning_contests",
    },
    {
      name: "My Participated Contests",
      icon: <Pickaxe size={20} />,
      path: "my_participated_contests",
    },
  ];

  const [role] = useRole();

  return (
    <div className="drawer-side is-drawer-close:overflow-visible shadow">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex min-h-full flex-col items-start bg-base-100 is-drawer-close:w-14 is-drawer-open:w-64 gap-4">
        {/* Sidebar content here */}
        {links.map((link) => {
          if (
            (role !== "admin" && link.path === "manage_contests") ||
            (role !== "admin" && link.path === "manage_users") ||
            (role !== "creator" && link.path === "create_contest_form") ||
            (role !== "creator" && link.path === "created_contests") ||
            (role !== "user" && link.path === "my_winning_contests") ||
            (role !== "user" && link.path === "my_participated_contests")
          ) {
            return null;
          } else {
            return (
              <NavLink
                key={link.name}
                to={link.path}
                end
                data-tip={link.name}
                className={({ isActive }) =>
                  `${
                    link.className
                  } flex items-center gap-3 p-3 rounded-lg transition is-drawer-close:tooltip is-drawer-close:tooltip-right 
               ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`
                }
              >
                {link.icon}
                <span className="is-drawer-close:hidden font-medium text-sm">
                  {link.name}
                </span>
              </NavLink>
            );
          }
        })}
      </div>
    </div>
  );
}
