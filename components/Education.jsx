"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionView } from "@/utils/hooks";
import { education } from "@/constants";

const Education = () => {
  const { ref } = useSectionView("Education", 0.75);

  return (
    <section id="education" ref={ref} className="w-full scroll-mt-28 z-[70]">
      <h2 className="text-3xl text-white font-bold text-center mb-8">
        Education
      </h2>
      <VerticalTimeline lineColor="">
        {education.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "0.75rem",
                backdropFilter: "blur(4px)",
                boxShadow: "none",
                textAlign: "left",
                padding: "1.3rem 2rem",
                visibility: "visible",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
                visibility: "visible",
              }}
              date={item.date}
              icon={item.icon}
              dateClassName="visible text-white"
              iconStyle={{
                backgroundColor: "white",
                fontSize: "1.5rem",
                visibility: "visible",
              }}
            >
              <h3 className=" capitalize !mt-0 !visible text-white">
                {item.title}
              </h3>
              <p className="!font-light !text-sm !mt-0 !visible text-gray-300">
                {item.issuer}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
