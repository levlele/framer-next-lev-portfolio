"use client";

import Section from "./section";
import HomeTitle from "./home-title";
import HomeIntro from "./home-intro";
import HomeFooter from "./home-footer";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 860], ["0%", "50%"]);

  return (
    <Section
      id="home"
      className="flex flex-col justify-end relative overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="w-full h-[400px] absolute mb-24 bottom-[16vh] z-0 flex flex-col justify-end"
      >
        <HomeIntro />
        <HomeTitle />
      </motion.div>

      <HomeFooter />
    </Section>
  );
}
