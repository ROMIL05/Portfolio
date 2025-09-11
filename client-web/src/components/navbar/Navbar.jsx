import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import GooeyNav from "./GooeyNav";
import NameText from "../UI/NameText";
import TrueFocus from "./TrueFocus";
import { FloatingDock } from "../UI/Floating-dock";
import { Github, Linkedin, Code, Mail } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const items = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const links = [
    {
      title: "Github",
      icon: <Github className="h-full w-full text-neutral-500" />,
      href: "https://github.com/ROMIL05",
    },
    {
      title: "Linkedin",
      icon: <Linkedin className="h-full w-full text-neutral-500" />,
      href: "https://linkedin.com/in/romil05",
    },
    {
      title: "Leetcode",
      icon: <Code className="h-full w-full text-neutral-500" />,
      href: "https://leetcode.com/u/ROMIL05/",
    },
    {
      title: "Mail ",
      icon: <Mail className="h-full w-full text-neutral-500" />,
      href: "mailto:patelromil.surajnagar@gmail.com",
    },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed top-3 left-1/2 -translate-x-1/2 
                w-[95%] max-w-[1500px] h-20 
                bg-glass backdrop-blur-xl rounded-full 
                px-4 md:px-7 flex items-center justify-between 
                shadow-glass-dark z-50"
    >
      <div className="shrink-0 cursor-pointer" onClick={() => navigate("/")}>
        <TrueFocus
          sentence="Romil Patel"
          manualMode={false}
          blurAmount={3}
          borderColor="#c084fc"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
      <div className="hidden md:flex flex-grow justify-center p-0 my-auto desktop-nav">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={500}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      <div className="flex items-center gap-3 md:hidden">
        <motion.div
          className="md:hidden cursor-pointer text-primary text-3xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {menuOpen ? <FiX color="#9b5de5" /> : <FiMenu color="#9b5de5" />}
          </motion.div>
        </motion.div>

        <div className="items-center justify-center h-auto">
          <FloatingDock mobileClassName="" items={links} />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-16 right-2 bg-bg-dark/95 rounded-lg p-5 flex flex-col gap-4 shadow-glow-cya"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  handleScroll(item.href.replace("#", ""));
                }}
                className="text-text-base font-poppins text-lg hover:text-primary transition"
                whileHover={{ scale: 1.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden md:flex items-center justify-center h-auto">
        <FloatingDock mobileClassName="translate-y-56" items={links} />
      </div>
    </nav>
  );
};

export default Navbar;
