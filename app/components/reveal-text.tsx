"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../../lib/useMousePosition";
import styles from "./../styles/page.module.css";

type RevealTextProps = {
  id: string;
  x?: number;
  y?: number;
};

export default function RevealText({ id }: RevealTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 600 : 40;

  return (
    <section id={id} className="h-screen bg-secondary">
      <motion.div
        className={`${styles.mask} w-full h-full flex items-center content-center text-secondary text-6xl bg-primary-dark absolute [mask-size:40px] [mask-repeat:no-repeat]`}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A visual designer - with skills that haven&apos;t been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className="w-full h-full flex items-center content-center text-primary text-6xl">
        <p>
          I&apos;m a selectively skilled product designer with strong focus on
          producing high quality & impactful digital experience.
        </p>
      </div>
    </section>
  );
}
