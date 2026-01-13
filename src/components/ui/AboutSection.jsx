import React, { useEffect, useState } from "react";
import { ArrowRight, Trophy } from "lucide-react";
import { Link } from "react-router";

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://marketplace.canva.com/EAFJFFXPtCY/1/0/1600w/canva-blue-simple-photo-contest-facebook-post-fZ7pBpEgz68.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgHIOnx44o5fsWGxrcF-0INkrWG8JlxNSBQ&s",
    "https://t4.ftcdn.net/jpg/02/68/87/93/360_F_268879310_Y3P6Eq7lwmY69KZBjuIY8l3cLARXuXLI.jpg",
    "https://kingcenter.stanford.edu/sites/g/files/sbiybj16611/files/styles/large/public/media/image/2025_photo_contest_claudius_mundoma_0.jpeg?itok=3G-FaYEj",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section id="about" className="overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Visual Image Grid */}
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden transform -rotate-4 hover:rotate-0 transition-transform duration-500">
              <div className="grid grid-cols-2 gap-6 max-w-150">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`rounded-4xl overflow-hidden shadow-2xl transition-all duration-1000 transform 
                ${
                  currentImage === index
                    ? "scale-105 border-4 border-primary"
                    : "scale-95 opacity-50"
                }`}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover"
                      alt="Contest"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-5 -left-4 p-4 bg-base-100/80 shadow-2xl rounded-3xl z-20 hidden md:block border border-primary/20">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                  <Trophy size={30} />
                </div>
                <div>
                  <p className="text-2xl font-black italic uppercase leading-none">
                    Global
                  </p>
                  <p className="text-[10px] font-black opacity-80 text-neutral uppercase tracking-widest">
                    Platform
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none mb-6">
                Our <span className="text-primary">Mission</span> & Vision
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>

              <p className="text-xl font-bold text-base-content/80 leading-relaxed italic border-l-4 border-primary/20 pl-6 mb-6">
                "আমরা এমন একটি মঞ্চ তৈরি করছি যেখানে আপনার সৃজনশীলতা কোনো সীমানা
                মানবে না।"
              </p>

              <p className="text-base-content/60 leading-relaxed text-sm">
                বিশ্বের প্রতিটি প্রান্তের প্রতিভাকে একত্রিত করাই আমাদের লক্ষ্য।
                আপনি যেখান থেকেই অংশ নিন না কেন, আমাদের প্ল্যাটফর্ম আপনাকে আপনার
                দক্ষতা প্রদর্শনের এবং নিজেকে ছাড়িয়ে যাওয়ার সেরা সুযোগ করে দেয়।
              </p>
            </div>

            {/* Stats Grid - Small & Professional */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="group cursor-default">
                <p className="text-3xl font-black group-hover:text-primary transition-colors tracking-tighter">
                  44M+
                </p>
                <p className="text-[9px] font-black uppercase opacity-40 tracking-[0.2em] mt-1">
                  Interactions
                </p>
              </div>
              <div className="group cursor-default">
                <p className="text-3xl font-black group-hover:text-primary transition-colors tracking-tighter">
                  119T+
                </p>
                <p className="text-[9px] font-black uppercase opacity-40 tracking-[0.2em] mt-1">
                  Opportunities
                </p>
              </div>
              <div className="group cursor-default">
                <p className="text-3xl font-black group-hover:text-primary transition-colors tracking-tighter">
                  46K
                </p>
                <p className="text-[9px] font-black uppercase opacity-40 tracking-[0.2em] mt-1">
                  New Creators
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link to="/about-us">
                <button className="btn btn-primary rounded-full px-8 font-black uppercase text-[11px] tracking-widest gap-3 group">
                  Discover More{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
