import React from "react";
import ReadyToGet from "../../components/ui/ReadyToGet";
import FeaturedContests from "../../components/ui/FeaturedContests";
import WinnerAdvertisement from "../../components/ui/WinnerAdvertisement";
import FaqView from "../../components/ui/FaqView";
import AboutSection from "../../components/ui/AboutSection";
import OurValues from "../../components/ui/OurValues";
import Statistics from "../../components/ui/Statistics";
import Categories from "../../components/ui/Categories";
import Newsletter from "../../components/ui/Newsletter";
import Testimonials from "../../components/ui/Testimonials";
import Blogs from "../../components/ui/Blogs";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div className="space-y-24 mb-20 container mx-auto scroll-smooth">
      <Hero />
      <Statistics />
      <Categories />
      <FeaturedContests />
      <AboutSection />
      <OurValues />
      <WinnerAdvertisement />
      <Testimonials />
      <Blogs />
      <Newsletter />
      <FaqView />
      <ReadyToGet />
    </div>
  );
};

export default Home;
