import React from "react";
import Nav from "./Components/Header/Nav";
import { Outlet, useLocation } from "react-router-dom";
import Hero from "./Components/Header/Hero";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <main className="relative font-roboto max-w-[1600px] mx-auto">
        <Nav />
        {pathname === "/" && <Home />}
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
