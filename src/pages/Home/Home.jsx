import React from "react";
import ReadyToGet from "../../components/ui/ReadyToGet";
import Hero from "../../components/ui/Hero";
import FeaturedContests from "../../components/ui/FeaturedContests";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedContests />
      <ReadyToGet />
    </div>
  );
};

export default Home;
