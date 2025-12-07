import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-285px)]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
