import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const HomeLayout = () => {
  return (
    <div className="">
      <header className="sticky top-0 z-100">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-285px)] px-4">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
