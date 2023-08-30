"use client";

import { motion } from "framer-motion";

export default function HomeIntro() {
  return (
    <motion.div
      className="w-full max-w-[1440px] mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
    >
      <p className="w-full max-w-[400px] font-serif text-xl leading-normal [text-wrap:balance]">
        +8 years turning colored boxes into meaningful and pleasant interfaces
        so I can buy more pizza.
      </p>
      <div className="mt-8 w-24">
        <svg fill="none" viewBox="0 0 96 2">
          <path stroke="#28242D" stroke-width="2" d="M0 1h96" />
        </svg>
      </div>
    </motion.div>
  );
}
