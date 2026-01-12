import React from "react";
import { motion } from "framer-motion";

const WinnerCard = ({ user, rank }) => {
  const rankConfigs = {
    1: {
      border: "border-yellow-500",
      glow: "shadow-[0_0_30px_rgba(234,179,8,0.2)]",
      scale: "lg:scale-125 z-10 lg:-translate-y-10 order-1 lg:order-2",
      delay: 0.2, // চ্যাম্পিয়ন আসবে সবার আগে
    },
    2: {
      border: "border-slate-400",
      scale: "order-2 lg:order-1 lg:translate-y-2",
      delay: 0.4,
    },
    3: {
      border: "border-amber-700",
      scale: "order-3 lg:order-3 lg:translate-y-6",
      delay: 0.6,
    },
  };

  const config = rankConfigs[rank];

  return (
    <motion.div
      // ২. এন্ট্রান্স অ্যানিমেশন
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: config.delay, ease: "easeOut" }}
      // ৩. হোভার অ্যানিমেশন
      whileHover={{
        scale: rank === 1 ? 1.3 : 1.05,
        rotateZ: rank === 1 ? 1 : 0,
      }}
      className={`
        flex items-center lg:flex-col gap-4 lg:gap-0 
        p-4 lg:p-6 rounded-2xl lg:rounded-[2.5rem] 
        bg-slate-900/60 backdrop-blur-md border border-white/5 
        w-full lg:max-w-[180px] transition-all duration-300
        ${config.scale} ${config.glow || ""}
      `}
    >
      <div className="relative shrink-0">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full p-1 border-2 ${config.border}`}
        >
          <img
            src={user.profileImage}
            alt={user.name}
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-950 border border-white/10 rounded-md text-[9px] font-black text-white italic">
          #{rank}
        </span>
      </div>

      <div className="text-left lg:text-center mt-0 lg:mt-6 flex-1">
        <p className="text-white font-bold text-base lg:text-lg leading-tight truncate">
          {user.name}
        </p>
        <p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">
          {user.wins} Wins
        </p>
      </div>
    </motion.div>
  );
};

const TopWinnersCard = ({ topUsers }) => {
  const [first, second, third] = topUsers;

  return (
    <section className="relative overflow-hidden bg-slate-950 p-6 md:p-12 lg:p-20 rounded-3xl shadow-2xl">
      {/* Background Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 text-center mb-16 lg:mb-28">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-white italic tracking-tighter"
        >
          TOP <span className="text-yellow-500">WINNERS</span>
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "64px" }}
          className="h-1 bg-yellow-500 mx-auto mt-2 rounded-full"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-stretch lg:items-end gap-6 lg:gap-8 max-w-4xl mx-auto">
        {first && <WinnerCard user={first} rank={1} />}
        {second && <WinnerCard user={second} rank={2} />}
        {third && <WinnerCard user={third} rank={3} />}
      </div>
    </section>
  );
};

export default TopWinnersCard;
