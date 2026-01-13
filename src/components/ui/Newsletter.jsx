import React, { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const validationEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validationEmail(email)) {
      return toast.error("Please enter a valid email address.");
    }
    toast.success("Thanks for subscribing!");
    setEmail("");
  };
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative bg-primary/20 rounded-[3rem] p-8 md:p-20 overflow-hidden shadow-2xl shadow-primary/20">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase italic tracking-tighter leading-none">
              Stay in the <span className="opacity-50">Loop.</span>
            </h2>
            <p className="text-primary mt-6 font-medium">
              Get notified about the biggest contests and exclusive prizes
              before anyone else.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col md:flex-row gap-4"
            >
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email"
                className="input input-lg bg-base-200 border-base-300 text-primary rounded-2xl w-full focus:outline-none placeholder:text-neutral/60"
              />
              <button className="btn btn-lg bg-base-200/80 text-primary border-none rounded-2xl px-10 font-bold uppercase tracking-widest hover:bg-base-100">
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
