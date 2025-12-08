import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="h-8" />
        <h1 className="font-bold text-2xl">ENTRIA</h1>
      </div>
    </Link>
  );
};

export default Logo;
