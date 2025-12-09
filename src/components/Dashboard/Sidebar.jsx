import logo from "../../assets/logo.png";
import { FaUsersCog } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { LuSettings2 } from 'react-icons/lu';
import { MdOutlineEditNote } from 'react-icons/md';
import { Link } from 'react-router';

const Sidebar = () => {
    return (
        <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow gap-4">
            {/* List item */}
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <img src={logo} alt="" className="w-10" />
                <span className="is-drawer-close:hidden font-bold text-2xl">
                  Entria
                </span>
              </Link>
            </li>
            {/* List item */}
            <li>
              <Link
                to="/dashboard"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard"
              >
                {/* Home icon */}
                <FiHome size={20} />
                <span className="is-drawer-close:hidden ">Dashboard</span>
              </Link>
            </li>
            {/* List item */}
            <li>
              <Link
                to="/dashboard/manage-users"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Manage Users"
              >
                {/* Home icon */}
                <FaUsersCog size={20} />
                <span className="is-drawer-close:hidden ">Manage Users</span>
              </Link>
            </li>
            {/* List item */}
            <li>
              <Link
                to="/dashboard/manage-contests"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Manage Contests"
              >
                {/* Home icon */}
                <MdOutlineEditNote size={20} />
                <span className="is-drawer-close:hidden ">Manage Contests</span>
              </Link>
            </li>
            {/* List item */}
            <li>
              <Link
                to="/dashboard/settings"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <LuSettings2 size={20} />
                <span className="is-drawer-close:hidden">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Sidebar;