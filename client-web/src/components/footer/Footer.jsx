import { useState } from "react";
import { Github, Linkedin, Code, Mail } from "lucide-react";
import Plasma from "../layout/Plasma";
import { Cover } from "../UI/Cover";
import NameText from "../UI/NameText";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();
  const [hovered, setHovered] = useState(null);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

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

          <nav className="flex flex-wrap justify-center gap-3 text-base font-medium relative">
            {links.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setHovered(link.href)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === link.href && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 rounded-full py-5 text-center my-auto bg-purple-500/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <a
                  href={link.href}
                  className="relative z-10 p-4 rounded-md hover:text-purple-300 transition-colors"
                >
                  {link.label}
                </a>
              </div>
            ))}
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

        <div className="flex flex-col gap-y-2 justify-center items-center text-gray-300 text-sm my-auto">
          <div className="md:mt-0 my-auto">
            Created with ❤️ by{" "}
            <Cover
              className={`text-xl text-center font-bold tracking-wide bg-transparent cursor-default my-auto`}
            >
              Romil.
            </Cover>
          </div>
          <p>© {year} Romil Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
