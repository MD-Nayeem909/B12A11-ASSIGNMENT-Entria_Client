import { Users } from "lucide-react";
import logo from "../../assets/logo.png";
import { FaUsersCog } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";
import { MdOutlineEditNote } from "react-icons/md";
import { NavLink } from "react-router";

const Sidebar = () => {
  const links = [
    {
      name: "Homepage",
      icon: <img src={logo} alt="" className="w-10" />,
      path: "/",
    },
    { name: "Overview", icon: <FiHome size={20} />, path: "/dashboard" },
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
      name: "Participants",
      icon: <Users size={20} />,
      path: "participants",
    },
    { name: "Settings", icon: <LuSettings2 size={20} />, path: "settings" },
  ];
  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
        {/* Sidebar content here */}
        <nav className="menu w-full grow gap-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
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
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
