import React from "react";
import { Link } from "react-router";

const logoPath = new URL("../../assets/logo.png", import.meta.url).href;

const LogoIcon = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        <img src={logoPath} alt="" className="h-8" />
        <h1 className="font-bold text-2xl">ENTRIA</h1>
      </div>
    </Link>
  );
};

export default LogoIcon;
