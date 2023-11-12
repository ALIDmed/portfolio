import { useContext, useEffect } from "react";
import { AppContext } from "@/app/page";
import { useInView } from "react-intersection-observer";

export function useSectionView(sectionName, threshold) {
  const { setActiveSection, timeOfLastClick } = useContext(AppContext);
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClick]);

  return {
    ref,
  };
}
