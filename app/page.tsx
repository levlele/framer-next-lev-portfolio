"use client";

// import Lenis from "@studio-freight/lenis";
// import { useState, useEffect } from "react";
import FixedHeader from "./components/fixed-header";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";
import RevealText from "./components/reveal-text";
import ScrollSpy from "react-ui-scrollspy";

export default function Index() {
  return (
    <div className="bg-primary-dark">
      <FixedHeader />
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <Home />
        <About />
        <Experience />
        <Contact />
        <RevealText id="reveal" />
      </ScrollSpy>
    </div>
  );
}
