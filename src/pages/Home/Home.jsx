import React from "react";
import ReadyToGet from "../../components/ui/ReadyToGet";
import Hero from "../../components/ui/Hero";
import FeaturedContests from "../../components/ui/FeaturedContests";
import WinnerAdvertisement from "../../components/ui/WinnerAdvertisement";
import FaqView from "../../components/ui/FaqView";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedContests />
      <WinnerAdvertisement />
      <FaqView/>
      <ReadyToGet />
    </div>
  );
};

export default Home;
