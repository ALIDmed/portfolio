"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import { createContext, useState } from "react";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export const AppContext = createContext();

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-20">
        <AppContext.Provider
          value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick,
          }}
        >
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
          <Certifications />
          <Education />
          <Contact />
        </AppContext.Provider>
      </div>
    </main>
  );
}
