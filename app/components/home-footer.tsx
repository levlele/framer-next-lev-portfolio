"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HomeFooter() {
  const [active, setActive] = useState(false);

  const handleHover = () => {
    setActive(!active);
  };

  return (
    <motion.footer
      className="bg-secondary text-primary px-10 pt-10 h-[16vh] relative"
      initial={{ y: 180 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="max-w-[1440px] mx-auto flex">
        <div className="basis-1/2">
          <p>UX UI Designer</p>
          <p>Frontend Developer</p>
        </div>
        <div className="basis-1/2 text-end">
          <a
            href="#contact"
            className="text-accent uppercase bold relative"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            Get in Touch
            <motion.span
              className="absolute right-0 top-8 block w-20 h-0.5 bg-accent origin-top-right"
              initial={{ scaleX: 0.5 }}
              animate={{
                scaleX: active ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
