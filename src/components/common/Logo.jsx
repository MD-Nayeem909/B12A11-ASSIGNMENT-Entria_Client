import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-2xl">ENTRIA</h1>
      </div>
    </Link>
  );
};

export default Logo;
