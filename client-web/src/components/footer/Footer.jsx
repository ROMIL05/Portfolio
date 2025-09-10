import React from "react";
import { Github, Linkedin, Code, Mail } from "lucide-react";
import Plasma from "../layout/Plasma";
import { Cover } from "../UI/Cover";
import NameText from "../UI/NameText";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 -z-10 bg-transparent">
        <Plasma
          color="#8b5cf6"
          speed={0.5}
          direction="reverse"
          scale={10}
          opacity={0.2}
          mouseInteractive={true}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-10 py-14 relative z-10 text-white bg-transparent">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <NameText />
            <p className="text-gray-300 mt-2 text-sm">
              Designing & building web experiences with passion.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-10 text-base font-medium">
            <a
              href="#about"
              className="hover:text-purple-300 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-purple-300 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-purple-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              className="hover:text-purple-300 transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="hover:text-purple-300 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex gap-5">
            <a
              href="https://github.com/ROMIL05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-transform transform hover:scale-110"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/romil05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-transform transform hover:scale-110"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://leetcode.com/u/ROMIL05/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-transform transform hover:scale-110"
            >
              <Code size={22} />
            </a>
            <a
              href="mailto:patelromil.surajnagar@gmail.com"
              className="hover:text-purple-300 transition-transform transform hover:scale-110"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-600 my-8"></div>

        <div className="flex flex-col justify-center items-center text-gray-300 text-sm my-auto">
          <p>© {year} Romil Patel. All rights reserved.</p>
          <div className="mt-2 md:mt-0 my-auto">
            Created with ❤️ by{" "}
            <Cover
              className={`text-xl text-center font-bold tracking-wide bg-transparent cursor-default my-auto`}
            >
              Romil.
            </Cover>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
