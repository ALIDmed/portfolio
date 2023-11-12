"use client";

import React from "react";
import { skills } from "@/constants";
import { useSectionView } from "@/utils/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionView("Skills", 0.5);

  return (
    <sections
      id="skills"
      ref={ref}
      className="text-white w-full scroll-mt-28 text-center z-[30]"
    >
      <h2 className="text-3xl text-white font-bold text-center mb-8">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 mx-4">
        {skills.map((skill, index) => (
          <div
            className="border border-white/20 rounded-xl p-4 backdrop-blur-[1px] w-[16rem]"
            key={index}
          >
            <h4 className="text-lg text-gray-200 font-semibold mb-8">
              {skill.category}
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {skill.tags.map((tag, index) => (
                <motion.li
                  className="text-white rounded-xl text-sm px-5 py-3 bg-white bg-opacity-10 backdrop-blur-[4px] border border-white/20"
                  key={index}
                  initial="initial"
                  variants={fadeInAnimationVariants}
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {tag}
                </motion.li>
              ))}
            </div>
          </div>
        ))}
      </ul>
    </sections>
  );
};

export default Skills;
