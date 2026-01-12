import React from "react";

const Blogs = () => {
  const posts = [
    {
      title: "How to win your first Coding Contest",
      date: "Jan 12, 2026",
      cat: "Tips",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
    },
    {
      title: "Top 10 Photography Gears for 2026",
      date: "Jan 10, 2026",
      cat: "Equipment",
      img: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=500",
    },
  ];

  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <p className="text-xs font-bold opacity-40 uppercase tracking-widest mt-2">
              Read and learn from the pros
            </p>
          </div>
          <button className="btn btn-ghost btn-sm font-bold uppercase tracking-widest text-[10px]">
            View All Posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-video">
                <img
                  src={post.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={post.title}
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white text-black text-[10px] font-black uppercase px-4 py-2 rounded-full shadow-xl">
                    {post.cat}
                  </span>
                </div>
              </div>
              <div className="mt-6 px-2">
                <p className="text-[10px] font-bold opacity-30 uppercase tracking-widest">
                  {post.date}
                </p>
                <h3 className="text-2xl font-bold mt-2 group-hover:text-primary transition-colors leading-tight uppercase tracking-tighter italic">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
