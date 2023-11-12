"use client";

import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromRight,
  slideInFromLeft,
} from "@/utils/motion";
import { useContext } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { useSectionView } from "@/utils/hooks";
import { AppContext } from "@/app/page";

const HeroContent = () => {
  const { ref } = useSectionView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useContext(AppContext);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-4 sm:px-20 xl:px-60 mt-16 w-full z-[20] md:flex-row scroll-mt-[999rem]"
      id="home"
      ref={ref}
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Data Scientist Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Crafting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Wisdom{" "}
            </span>
            From Raw Data
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Data Scientist proficient in transforming raw data into
          valuable insights. Explore my projects and analytical skills.
        </motion.p>
        <div className="flex gap-2 flex-col sm:flex-row font-medium">
          <motion.a
            className="py-2 button-primary text-white cursor-pointer rounded-lg w-[200px] flex items-center justify-center gap-2 mx-auto sm:mx-0"
            href="#contact"
            variants={slideInFromLeft(1)}
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me <BsArrowRight />
          </motion.a>

          <motion.div
            className="flex gap-2 justify-center sm:justify-start"
            variants={slideInFromRight(1)}
          >
            <a
              className="button-primary p-4 w-[52px] text-[18px] justify-center text-gray-300 transition hover:text-white flex items-center gap-2 rounded-full cursor-pointer"
              href="https://www.linkedin.com/in/mohammed-ali-amzyl/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="button-primary p-4 w-[52px] text-[18px] text-gray-300 justify-center transition hover:text-white flex items-center gap-2 rounded-full cursor-pointer"
              href="https://github.com/ALIDmed"
              target="_blank"
            >
              <BsGithub />
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="md:w-full md: h-full flex justify-center items-center max-w-[500px] mt-6"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
