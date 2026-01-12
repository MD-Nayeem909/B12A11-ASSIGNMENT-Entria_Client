import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative bg-primary rounded-[3rem] p-8 md:p-20 overflow-hidden shadow-2xl shadow-primary/20">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
              Stay in the <span className="opacity-50">Loop.</span>
            </h2>
            <p className="text-white/70 mt-6 font-medium">
              Get notified about the biggest contests and exclusive prizes
              before anyone else.
            </p>

            <form className="mt-10 flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-lg bg-white/10 border-white/20 text-white rounded-2xl w-full focus:outline-none placeholder:text-white/40"
              />
              <button className="btn btn-lg bg-white text-primary border-none rounded-2xl px-10 font-bold uppercase tracking-widest hover:bg-base-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
