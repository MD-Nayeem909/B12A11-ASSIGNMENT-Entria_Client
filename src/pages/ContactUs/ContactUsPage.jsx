import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Get in touch
          </h1>
          <p className="text-lg text-neutral leading-relaxed">
            আপনার কি কোনো প্রশ্ন আছে বা আমাদের সাথে কাজ করতে আগ্রহী? নিচের
            ফর্মটি পূরণ করুন, আমাদের টিম ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ
            করবে।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="bg-base-200 p-8 md:p-12 rounded-3xl border border-base-300">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-base-100 border border-base-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-base-100 border border-base-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="bg-base-100 border border-base-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Your message here..."
                  className="bg-base-100 border border-base-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>
              <button className="btn btn-primary btn-xl w-full py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-lg">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="flex gap-6 items-start">
              <div className="bg-primary/40 hover:bg-primary/80 p-4 rounded-2xl text-base-content hover:text-white">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Email us</h4>
                <p className="text-neutral">support@entria.com</p>
                <p className="text-neutral/80">info@entria.com</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-primary/40 hover:bg-primary/80 p-4 rounded-2xl text-base-content hover:text-white">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Call us</h4>
                <p className="text-neutral">+880 1518 966 045</p>
                <p className="text-neutral/80">Mon-Fri, 9am - 6pm</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-primary/40 hover:bg-primary/80 p-4 rounded-2xl text-base-content hover:text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Visit us</h4>
                <p className="text-neutral">
                  123 Creative Tower, Tech Avenue
                </p>
                <p className="text-neutral/80">Silicon Valley, CA 94043</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
