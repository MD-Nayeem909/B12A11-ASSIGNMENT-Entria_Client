import React from "react";
import { motion } from "framer-motion";

const StatsCard = ({
  title,
  tag,
  totalCount,
  icon,
  color = "text-primary",
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative overflow-hidden p-6 bg-base-100 rounded-[1.8rem] border border-base-200 shadow-sm transition-all duration-300 hover:shadow-xl group"
    >
      {/* Background Decorative Element */}
      <div
        className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 bg-current ${color}`}
      />

      <div className="flex items-start justify-between relative z-10">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] opacity-40">
            {title}
          </p>
          <div className="flex items-baseline gap-1">
            <h3 className="text-3xl font-black italic tracking-tighter">
              {totalCount?.toLocaleString() || "0"}
            </h3>
          </div>
        </div>

        {/* Icon Container with Glassmorphism */}
        <div
          className={`p-3 rounded-2xl bg-base-200/50 group-hover:bg-primary group-hover:text-primary-content transition-all duration-500 ${color}`}
        >
          {icon ? React.cloneElement(icon, { size: 22 }) : " "}
        </div>
      </div>

      {/* Footer / Tag */}
      <div className="mt-6 flex items-center gap-2">
        <div
          className={`w-1 h-1 rounded-full bg-current ${color} opacity-40`}
        />
        <p className="text-[10px] font-bold opacity-50 uppercase tracking-tight">
          {tag}
        </p>
      </div>

      {/* Bottom Accent Line */}
      <div
        className={`absolute bottom-0 left-0 h-1 bg-current opacity-0 group-hover:opacity-100 transition-all duration-500 w-full ${color}`}
      />
    </motion.div>
  );
};

export default StatsCard;
