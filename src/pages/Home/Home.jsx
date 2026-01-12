import React from "react";
import ReadyToGet from "../../components/ui/ReadyToGet";
import Hero from "../../components/ui/Hero";
import FeaturedContests from "../../components/ui/FeaturedContests";
import WinnerAdvertisement from "../../components/ui/WinnerAdvertisement";
import FaqView from "../../components/ui/FaqView";
import HeroSection from "../../components/hero/HeroSection";
import AboutSection from "../../components/ui/AboutSection";
import OurValues from "../../components/ui/OurValues";
import Statistics from "../../components/ui/Statistics";
import Categories from "../../components/ui/Categories";
import Newsletter from "../../components/ui/Newsletter";
import Testimonials from "../../components/ui/Testimonials";
import Blogs from "../../components/ui/Blogs";

const Home = () => {
  return (
    <div className="space-y-24 mb-20 container mx-auto">
      {/* ১. হিরো সেকশন - সব সময় টপে থাকবে */}
      <HeroSection />

      <div className="container mx-auto space-y-32">
        <Statistics />
        <Categories />
        <FeaturedContests />
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AboutSection />
          <OurValues />
        </section>
        <WinnerAdvertisement />
        <Testimonials />
        <Blogs />
        <Newsletter />
        <FaqView />
        <ReadyToGet />
      </div>
    </div>
  );
};

export default Home;
