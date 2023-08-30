"use client";

import Magnet from "./ui/magnet";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { transcode } from "buffer";

const links = [
  { id: "home", href: "#home", label: "Home" },
  { id: "about", href: "#about", label: "About" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "contact", href: "#contact", label: "Contact" },
];

export default function AnimatedNav() {
  let [activeLink, setActiveLink] = useState(links[0].id);

  return (
    <nav>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <Magnet>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                data-to-scrollspy-id={link.id}
                className={`${
                  activeLink === link.id
                    ? "border border-secondary"
                    : "hover:text-accent"
                } relative px-6 py-3 text-base leading-none text-secondary transition outline-accent focus-visible:outline-1`}
                // className={clsx(
                //   "flex w-full items-center justify-center px-3 py-3 hover:text-red-950 transition dark:text-black dark:hover:text-yellow-300",
                //   {
                //     "active-scroll-spy": activeLink === link.id,
                //   }
                // )}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <span className="relative z-30">{link.label}</span>
                {activeLink === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute w-full h-full -bottom-2 -right-2 bg-primary text-secondary -z-10"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.3,
                    }}
                  />
                )}
              </a>
            </Magnet>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// parent component
// initial = {{ opacity: 0, y: '100%' }}
// animate = {{ opacity: 1, y: 0 }}
// transition = {{ duration: 0.5, delay: 0.5 }}

// child component ul
// initial = "hidden"
// animate = "show"
// variant = { container }

// container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//       delayChildren: 0.5,
//     },
//   }

// child component li
// initial = "hidden"
// animate = "show"
// variants = { item }

// item = {
//     hidden: { y: '100%' },
//     show: {
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     }
//   }
