"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import ElectricBorder from "../UI/ElectricBorder";

export const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_, index) => index / (cardLength - 1)
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div ref={ref} className="relative w-full flex flex-col gap-24">
      <svg className="absolute left-1/2 top-0 h-full w-[150px] -translate-x-1/2 pointer-events-none z-0 hidden lg:block ml-24">
        <path
          d={`M75,0 C50,100 100,200 75,300 S100,500 75,700`}
          stroke="#7e22ce"
          strokeWidth="3"
          fill="none"
          className="opacity-40"
        />
      </svg>

      {content.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-10 lg:gap-20 px-5 md:px-10"
        >
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-100">
              {item.title}
            </h2>
            <p className="mt-3 text-slate-300 text-sm md:text-base max-w-full">
              {item.description}
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <ElectricBorder
              color="#7e22ce"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
              className="w-full sm:w-[400px] md:w-[450px] lg:w-96 h-auto flex flex-col justify-center p-4 md:p-6"
            >
              {item.content ?? null}
            </ElectricBorder>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
