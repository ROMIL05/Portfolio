// src/pages/Portfolio.jsx
import React from "react";
import Background from "../components/layout/Background";
import Navbar from "../components/navbar/Navbar";
import Laptop3D from "../components/Laptop";
import { motion } from "framer-motion";
import photo from "../../src/public/images/coder.png";

export default function Portfolio() {
  return (
    <Background>
      <Navbar />
      <main className="mt-28 container mx-auto flex flex-row items-start justify-center gap-12 px-6">
        {/* Laptop */}
        <div className="flex-[3] flex justify-center">
          <Laptop3D />
        </div>

        {/* About Me Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          className="flex-[2] bg-gradient-to-tr from-purple-500/40 to-blue-500/40 
               p-1 rounded-2xl shadow-[0_0_40px_rgba(128,0,255,0.3)] mt-10"
        >
          <div className="bg-[#111] rounded-2xl overflow-hidden p-8 flex flex-col items-center">
            <img
              src={photo}
              alt="My Portrait"
              className="w-44 h-44 object-cover rounded-xl shadow-xl border-2 border-purple-400"
            />
            <h3 className="mt-6 text-2xl font-semibold text-white">
              Romil Patel
            </h3>
            <p className="mt-3 text-gray-400 text-center text-lg">
              Versatile{" "}
              <span className="text-purple-300">Full-Stack Developer</span>{" "}
              skilled in problem-solving, AI/ML, and building innovative
              solutions through continuous learning.
            </p>
          </div>
        </motion.div>
      </main>
    </Background>
  );
}
