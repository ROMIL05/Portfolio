import React from "react";
import Background from "../components/layout/Background";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Education from "../components/education/Education";

export default function Portfolio() {
  return (
    <Background>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
    </Background>
  );
}
