import React from "react";
import { useSectionView } from "@/utils/hooks";
import { certifications } from "@/constants";
import Image from "next/image";

const Certifications = () => {
  const { ref } = useSectionView("Certifications", 0.2);

  return (
    <section
      className="text-white w-full scroll-mt-28 text-center z-[30]"
      id="certifications"
      ref={ref}
    >
      <h2 className="text-3xl text-white font-bold text-center mb-8">
        Certifications
      </h2>
      <ul className="flex flex-wrap justify-center gap-4 mx-4">
        {certifications.map((certification, index) => (
          <li
            className="border border-white/20 rounded-xl overflow-hidden backdrop-blur-[1px] w-[30rem]"
            key={index}
          >
            <Image
              src={certification.imageUrl}
              alt="certifImg"
              quality={80}
              className="object-cover w-full h-full"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
