import React from "react";

const Categories = () => {
  const categories = [
    "Photography",
    "Coding",
    "Gaming",
    "Writing",
    "Design",
    "Marketing",
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Explore <span className="text-primary">Categories</span>
            </h2>
            <p className="text-base-content/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Find your passion and compete
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-base-200/40 p-8 rounded-4xl border border-base-300 hover:border-primary/30 transition-all cursor-pointer group shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="font-bold">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold mt-6 uppercase tracking-tight">
                {cat}
              </h3>
              <p className="text-sm opacity-50 mt-2">
                Join elite creators in the {cat} world and win prizes.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
