import React, { useState, useEffect } from "react";
import Hero from "../ui/Hero";

const HeroSection = () => {
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
    <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden bg-base-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        {/* Text Content */}
        <div className="">
          <Hero />
        </div>

        {/* Animated Image Grid */}
        <div className="relative flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4 max-w-150 p-4">
            {images.map((img, index) => (
              <div
                key={index}
                className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 transform 
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
      </div>
    </section>
  );
};

export default HeroSection;
