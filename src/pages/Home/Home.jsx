import React from "react";
import ReadyToGet from "../../components/ui/ReadyToGet";
import Hero from "../../components/ui/Hero";
import FeaturedContests from "../../components/ui/FeaturedContests";
import WinnerAdvertisement from "../../components/ui/WinnerAdvertisement";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedContests />
      <WinnerAdvertisement />
      <ReadyToGet />
    </div>
  );
};

export default Home;
