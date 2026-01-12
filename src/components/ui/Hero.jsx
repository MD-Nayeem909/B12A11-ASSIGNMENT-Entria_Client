import { Link } from "react-router";
import Search from "../common/Search";
// import Searchbar from "../common/Searchbar";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-6">
      <div className="text-center md:text-left">
        <h1 className="scroll-m-20 text-4xl md:text-5xl mb-6 font-extrabold tracking-tight lg:text-left lg:leading-[1.1]">
          Unleash Your Creativity
        </h1>
        <p className="text-muted-foreground text-xl lg:max-w-2xl">
          Join Entria and participate in amazing contests. Design, write, and
          win amazing prizes. Whether you're a designer, a writer, entrepreneur
          or creator, Entria has something for everyone.
        </p>
      </div>

      {/* <Searchbar/> */}
      <div className="w-full">
        <Search />
      </div>
      <div className="flex gap-4">
        <Link
          to="/contests"
          className="btn btn-primary btn-md md:btn-lg rounded-full md:px-8"
        >
          Explore Contests
        </Link>
        <Link
          to="/about"
          className="btn btn-primary btn-outline btn-md md:btn-lg rounded-full md:px-8"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
