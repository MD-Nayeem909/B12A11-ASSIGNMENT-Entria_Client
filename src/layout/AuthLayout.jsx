import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Container from "../components/common/Container";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
