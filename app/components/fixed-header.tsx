"use client";

import Image from "next/image";
import AnimatedNav from "./animated-nav";
import { motion } from "framer-motion";

export default function FixedHeader() {
  return (
    <motion.header
      className="max-w-[1440px] m-auto fixed top-10 left-10 right-10 z-[999] flex items-center justify-between"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
    >
      <Image
        width={89}
        height={46}
        className="w-auto h-[46px]"
        src="/lev-logo.svg"
        alt="Leandro Vilanova Logo"
      />
      <AnimatedNav />
    </motion.header>
  );
}
