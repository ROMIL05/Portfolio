import React from "react";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`relative block md:hidden ${className}`}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 top-full mt-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: idx * 0.01 }}
              >
                <a
                  href={item.href}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  return (
    <div
      className={`mx-auto hidden md:flex h-20 items-center justify-center gap-6 ${className}`}
    >
      {items.map((item) => (
        <IconContainer key={item.title} {...item} />
      ))}
    </div>
  );
};

function IconContainer({ title, icon, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      className="relative flex flex-col items-center w-12"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="my-auto">
        <motion.div
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-transparent"
          whileHover={{ scale: 2 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {React.cloneElement(icon, {
            className: "w-6 h-6 text-purple-400 dark:text-purple-300",
          })}
        </motion.div>
      </div>

      <motion.span
        className="absolute top-full mt-1 text-xs font-medium text-purple-900 dark:text-purple-300 whitespace-nowrap"
        initial={{ opacity: 0, y: 4 }}
        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {title}
      </motion.span>
    </a>
  );
}
