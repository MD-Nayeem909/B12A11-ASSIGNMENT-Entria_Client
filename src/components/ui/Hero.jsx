import Search from "../common/Search";
// import Searchbar from "../common/Searchbar";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-72px)] gap-6 text-center my-20 m-4 sm:m-8">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-balance">
        Unleash Your Creativity
      </h1>
      <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
        Join Entria and participate in amazing contests. Design, write, and win
        amazing prizes. Whether you're a designer, a writer, entrepreneur or
        creator, Entria has something for everyone.
      </p>
      <div className="flex gap-4 justify-center items-center">
        {/* <Searchbar/> */}
        <Search />
      </div>
    </div>
  );
};

export default Hero;
