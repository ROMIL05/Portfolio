import { motion } from "framer-motion";
import Laptop from "./Laptop";
import GradientText from "../UI/GradientText";
import { HatGlasses } from "lucide-react";

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="pt-32 pb-10 container mx-auto flex flex-col lg:flex-row 
             items-center lg:items-start justify-center gap-10 sm:gap-12 md:gap-16 
             px-5 sm:px-10 lg:px-28"
    >
      <motion.div
        className="flex-[2] flex flex-col justify-center w-full max-w-3xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <GradientText
          colors={["#9b30ff", "#d580ff", "#7b1fa2", "#4b0082"]}
          animationSpeed={5}
          showBorder={false}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-5 text-center lg:text-left flex items-center gap-3">
            Full Stack Developer
            <svg className="w-10 h-10" viewBox="2 -1 24 24">
              <defs>
                <linearGradient id="fireGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#DDDDDD" />
                  <stop offset="100%" stopColor="#888888" />
                </linearGradient>
              </defs>
              <HatGlasses stroke="none" fill="url(#fireGradient)" />
            </svg>
          </h1>
        </GradientText>

        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-3 text-justify">
          I am a passionate and adaptable{" "}
          <span className="text-purple-400 font-semibold">
            Full Stack Developer
          </span>{" "}
          with a strong foundation in building scalable applications and solving
          complex problems.
        </p>
        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-4 text-justify">
          With a keen interest in{" "}
          <span className="text-purple-400 font-semibold">AI/ML</span>, I am
          continuously expanding my knowledge and applying it to real-world
          projects. My problem-solving mindset, combined with a drive for
          innovation and continuous learning, allows me to deliver high-quality
          solutions.
        </p>
        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-4 text-justify">
          With a collaborative spirit and a focus on growth, I am eager to
          contribute to impactful projects and push the boundaries of
          technology.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
          <a
            href="https://drive.google.com/file/d/1geQbVFWFzal_citvf51KrrxnaD4SXFir/view?usp=sharing"
            target="_blank"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 text-center"
          >
            Check Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-purple-600 hover:bg-purple-600 hover:text-white text-purple-600 font-semibold rounded-lg transition-all duration-300 text-center"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <div className="flex-[3] flex justify-center w-full lg:relative mt-8 lg:mt-0">
        <Laptop />
      </div>
    </section>
  );
}
