import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Search from "../common/Search";

const Hero = () => {
  const contests = [
    {
      id: 1,
      title: "Portrait of the Month",
      info: "125 photos • 89 participants",
      image:
        "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800",
    },
    {
      id: 2,
      title: "Wildlife Awards 2026",
      info: "450 photos • 210 participants",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
    },
    {
      id: 3,
      title: "Feel Free",
      info: "89 photos • 45 participants",
      image:
        "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=800",
    },
    {
      id: 4,
      title: "Urban Streets",
      info: "312 photos • 150 participants",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800",
    },
  ];

  return (
    <section className="relative flex justify-center items-center overflow-hidden py-5">
      <div className="mx-auto px-4 text-center">
        {/* Header Section */}
        <div className="my-12">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-base-content">
            More than <span className="italic text-primary"> contests.</span>
          </h1>
            <Search />
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <p className="text-base-content/80 max-w-2xl text-lg leading-relaxed flex flex-col md:flex-row items-center gap-0 md:gap-2">
              Join the community of{" "}
              <span className="text-primary font-bold">137,745</span>{" "}
              photographers for free.
            </p>
            <button className="btn btn-primary px-6 py-2.5 rounded-md font-bold text-xs md:text-sm shadow-xl hover:scale-105 transition-all">
              Find your challenge
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full max-w-6xl mx-auto h-110">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 100,
              slideShadows: false,
            }}
            modules={[Autoplay, Pagination, EffectCoverflow]}
            className="mySwiper pb-200!"
          >
            {contests.map((contest) => (
              <SwiperSlide
                key={contest.id}
                className="w-75! md:w-140! group transition-transform duration-500"
              >
                {/* CSS to elevate the active slide */}
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                .swiper-slide-active .card-container {
                  transform: translateY(10px);
                  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
                }
                .swiper-slide:not(.swiper-slide-active) .card-container::after {
                  content: "";
                  position: absolute;
                  inset: 0;
                  background: rgba(0, 0, 0, 0.2);
                  transition: background 0.5s ease;
                  pointer-events: none;
                  z-index: 10;
                  backdrop-filter: blur(2px);
                }
                .swiper-slide-active .card-container::after {
                  background: rgba(0, 0, 0, 0);
                }
                `,
                  }}
                />

                <div className="card-container relative h-75 rounded-4xl overflow-hidden transition-all duration-500">
                  <img
                    src={contest.image}
                    alt={contest.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay (Only visible on active or hover) */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-left text-white opacity-0 group-[.swiper-slide-active]:opacity-100 transition-opacity duration-500">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">
                      {contest.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest opacity-70 mt-1">
                      {contest.info}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Link */}
        <p className="text-base-content/80 max-w-2xl mx-auto text-lg leading-relaxed relative z-1 flex flex-col md:flex-row items-center gap-0 md:gap-2">
          100+ active contests are waiting for you.{" "}
          <Link
            to="/contests"
            className="text-primary/80 hover:text-primary font-bold border-b-2 border-primary"
          >
            Browse now.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Hero;
