"use client";

import { useRef, useState } from "react";
import { spring, useVariants } from "./config-custom-cursor";
import { motion } from "framer-motion";

// import Magnet from "./components/ui/magnet";
// import Logo from "./components/logo";
// import Nav from "./components/ui/nav-link";

export default function Home() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);

  const variants = useVariants(ref);

  function buyEnter() {
    setCursorText("✅");
    setCursorVariant("buy");
  }

  function buyLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  function sellEnter() {
    setCursorText("❌");
    setCursorVariant("sell");
  }

  function sellLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="flex justify-between max-w-[1440px] m-auto p-10 items-center">
        {/* <Magnet>
          <Logo />
        </Magnet>
        <Nav /> */}
      </div>

      {/* <motion.div
        variants={variants}
        className="circle"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="flex-auto font-inherit pointer-events-none m-auto">
          {cursorText}
        </span>
      </motion.div> */}

      {/* <div>
        <span
          onMouseEnter={buyEnter}
          onMouseLeave={buyLeave}
          className="heading buy"
        >
          Want to Buy ?
        </span>
      </div>
      <div>
        <span
          className="heading sell"
          onMouseEnter={sellEnter}
          onMouseLeave={sellLeave}
        >
          Want to Sell?
        </span>
      </div> */}
    </div>
  );
}
