import React from "react";

import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "UI Designer",
      text: "Winning the Creative Design contest changed my career. The community here is amazing!",
      image: "https://i.pravatar.cc/150?u=1",
    },
    {
      name: "Sarah Chen",
      role: "Full Stack Dev",
      text: "The coding challenges are tough but rewarding. Highly recommend for any serious developer.",
      image: "https://i.pravatar.cc/150?u=2",
    },
    {
      name: "James Bond",
      role: "Photographer",
      text: "Platform is smooth, and payments are always on time. Best place for photographers.",
      image: "https://i.pravatar.cc/150?u=3",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter">
            Winner <span className="text-primary">Stories</span>
          </h2>
          <p className="text-base-content/80 max-w-2xl mx-auto text-lg leading-relaxed">
            What our champions say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-base-200/40 p-8 rounded-[2.5rem] shadow-sm border border-base-300 relative group hover:-translate-y-2 transition-all duration-500"
            >
              <Quote
                className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors"
                size={40}
              />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-warning text-warning"
                  />
                ))}
              </div>

              <p className="text-base-content/70 italic mb-8 leading-relaxed">
                "{rev.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-12 h-12 rounded-2xl object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-tight">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] font-bold opacity-40 uppercase">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
