import React from "react";
import Hero from "../components/ui/Hero";
import FeaturedContests from "../components/ui/FeaturedContests";
import ReadyToGet from "../components/ui/ReadyToGet";

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
