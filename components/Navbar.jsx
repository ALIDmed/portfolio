"use client";
import { motion } from "framer-motion";
import { links } from "@/constants/index";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/app/page";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useContext(AppContext);

  return (
    <header className="z-[999] relative w-full">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-opacity-40 bg-[#1A073B] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[2px] sm:top-6 sm:h-[3.25rem] sm:w-[38rem] sm:rounded-full shadoww "
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] text-gray-300 transition sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={`font-normal flex w-full items-center justify-center px-3 py-3  hover:text-white hover:font-semibold ease-in-out duration-300 ${
                  link.name === activeSection && "text-white font-semibold"
                }}`}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-[#3D118B]/[0.6] rounded-full absolute inset-0 -z-[10]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
