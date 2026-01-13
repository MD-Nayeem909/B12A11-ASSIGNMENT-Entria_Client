import React from "react";

const Statistics = () => {
  const stats = [
    { label: "Active Contests", value: "150+", color: "text-primary" },
    { label: "Total Participants", value: "25K+", color: "text-secondary" },
    { label: "Prize Awarded", value: "$100K+", color: "text-accent" },
    { label: "Success Rate", value: "98%", color: "text-success" },
  ];

  return (
    <section className="bg-base-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center group p-6 rounded-3xl hover:bg-base-200 transition-all"
            >
              <h2
                className={`text-4xl md:text-5xl font-black mb-2 italic tracking-tighter ${stat.color}`}
              >
                {stat.value}
              </h2>
              <p className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
