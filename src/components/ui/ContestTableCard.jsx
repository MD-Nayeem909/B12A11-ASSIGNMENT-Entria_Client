import React from "react";
import { Check, X, Trash2, Trophy, MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContestTableCard = ({
  contests,
  handleReject,
  handleDelete,
  handleConfirm,
}) => {
  const statusStyles = {
    approved: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    confirm: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    pending: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    reject: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    Closed: "text-base-content/40 bg-base-content/5 border-base-content/10",
  };

  return (
    <div className="w-full overflow-x-auto custom-scrollbar">
      <table className="table w-full border-separate border-spacing-y-2 min-w-175">
        <thead>
          <tr className="border-none opacity-60">
            <th className="bg-transparent font-medium text-[11px] uppercase tracking-widest pl-6">
              Contest
            </th>
            <th className="bg-transparent font-medium text-[11px] uppercase tracking-widest text-center">
              Category
            </th>
            <th className="bg-transparent font-medium text-[11px] uppercase tracking-widest text-center">
              Entries
            </th>
            <th className="bg-transparent font-medium text-[11px] uppercase tracking-widest text-center">
              Status
            </th>
            <th className="bg-transparent font-medium text-[11px] uppercase tracking-widest text-right pr-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-base-content/80">
          <AnimatePresence mode="popLayout">
            {contests?.map((c) => (
              <motion.tr
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                key={c._id}
                className="group bg-base-200/40 hover:bg-base-200/80 transition-all border border-base-content/5 shadow-sm"
              >
                {/* Contest Info */}
                <td className="py-4 pl-6 border-y border-l border-base-content/5">
                  <div className="flex items-center gap-3">
                    <img
                      src={c.image || "https://i.ibb.co/mJR9zN1/user.png"}
                      className="w-10 h-10 rounded-xl object-cover shadow-sm ring-1 ring-base-content/10"
                      alt="contest"
                    />
                    <div className="max-w-[150px] md:max-w-[200px]">
                      <p className="font-semibold text-[13px] truncate leading-tight mb-1">
                        {c.title}
                      </p>
                      <span className="text-[11px] opacity-50 font-medium flex items-center gap-1">
                        <Trophy size={10} className="text-amber-500" /> $
                        {c.prize}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="text-center py-4 border-y border-base-content/5">
                  <span className="text-[12px] font-medium opacity-70 bg-base-300/50 px-3 py-1 rounded-lg">
                    {c.type}
                  </span>
                </td>

                {/* Entries */}
                <td className="text-center py-4 border-y border-base-content/5">
                  <div className="flex flex-col items-center">
                    <span className="text-[13px] font-semibold">
                      {c.participants?.length || 0}
                    </span>
                  </div>
                </td>

                {/* Status */}
                <td className="text-center py-4 border-y border-base-content/5">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
                      statusStyles[c.status] || "bg-base-300"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="py-4 pr-6 border-y border-r border-base-content/5 text-right">
                  <div className="flex items-center justify-end gap-1">
                    {c.status !== "confirm" && c.status !== "approved" && (
                      <button
                        onClick={() => handleConfirm(c._id)}
                        className="btn btn-ghost btn-xs btn-square hover:bg-emerald-500/20 hover:text-emerald-500 transition-colors"
                      >
                        <Check size={16} />
                      </button>
                    )}

                    {c.status !== "reject" && c.status !== "Closed" && (
                      <button
                        onClick={() => handleReject(c._id)}
                        className="btn btn-ghost btn-xs btn-square hover:bg-amber-500/20 hover:text-amber-500 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(c._id)}
                      className="btn btn-ghost btn-xs btn-square hover:bg-rose-500/20 hover:text-rose-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>

      {/* Mobile Hint */}
      <p className="text-center text-[10px] opacity-30 mt-4 md:hidden">
        Swipe left to see more →
      </p>
    </div>
  );
};

export default ContestTableCard;
