import React, { useEffect, useState } from "react";
import Background from "../components/layout/Background";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Education from "../components/education/Education";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Loader from "../components/UI/Loader";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Background>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </Background>
  );
}
