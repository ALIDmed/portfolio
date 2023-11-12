"use client";

import React from "react";
import { useRef } from "react";
import { projects } from "@/constants/index";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionView } from "@/utils/hooks";

const Projects = () => {
  const { ref } = useSectionView("Projects", 0.2);

  return (
    <div id="projects" className="scroll-mt-28" ref={ref}>
      <h2 className="text-3xl text-white font-bold text-center mb-8">
        My Projects
      </h2>

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </div>
  );
};

const Project = ({ title, description, tags, imageUrl }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="max-w-[42rem] rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] transition sm:group-even:pl-8 z-[40] mx-auto border border-white/20 bg-white bg-opacity-10 backdrop-blur-[4px]">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] text-white">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-400">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-white px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black rounded-full font-mono"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project Image"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl object-cover object-center scale-90
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
};

export default Projects;
