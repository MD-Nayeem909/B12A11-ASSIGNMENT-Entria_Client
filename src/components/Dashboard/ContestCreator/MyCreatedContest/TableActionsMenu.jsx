import React, { useState } from "react";
import { ChevronDown, MessageSquare, Eye, Users } from "lucide-react";

export default function TableActionsMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="btn btn-xs btn-outline flex gap-1"
        onClick={() => setOpen(!open)}
      >
        Actions <ChevronDown size={14} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-base-100 shadow rounded-xl p-2 z-100">
          <ul className="menu text-sm">
            <li>
              <a className="flex items-center gap-2">
                <MessageSquare size={14} /> Chat
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2">
                <Eye size={14} /> View Entry
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2">
                <Users size={14} /> View All Entries
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
