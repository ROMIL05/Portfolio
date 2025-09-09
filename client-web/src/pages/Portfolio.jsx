import React from "react";
import Background from "../components/layout/Background";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";

export default function Portfolio() {
  return (
    <Background>
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </Background>
  );
}
