import React, { useEffect, useState } from "react";

export default function Loader({ duration = 3000 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 20;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration]);

  return (
    <div
      aria-live="polite"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-radial from-[#05060a] via-[#071124] to-[#05040a] text-white"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-[#9b30ff] to-[#4b0082] animate-[spin_18s_linear_infinite]" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-[#00d4ff] to-[#4bffb0] animate-[spin_22s_linear_infinite]" />
      <div className="pointer-events-none absolute top-10 right-1/3 w-48 h-48 rounded-full blur-2xl opacity-20 bg-gradient-to-r from-[#ff7bd2] to-[#ffa06b] animate-[spin_26s_linear_infinite]" />

      <div className="relative z-10 w-[92%] max-w-3xl h-[420px] rounded-3xl bg-white/6 backdrop-blur-md border border-white/8 shadow-2xl flex flex-col items-center justify-center gap-6 px-6 py-8">
        <div className="relative flex items-center justify-center w-48 h-48">
          <svg
            viewBox="0 0 120 120"
            className="absolute inset-0 w-full h-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9b30ff" />
                <stop offset="40%" stopColor="#d580ff" />
                <stop offset="70%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#4bffb0" />
              </linearGradient>
            </defs>
            <g fill="none" strokeWidth="3" strokeLinecap="round">
              <circle
                cx="60"
                cy="60"
                r="42"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="6"
              />
              <circle
                cx="60"
                cy="60"
                r="46"
                stroke="url(#g1)"
                strokeWidth="5"
                strokeDasharray="80 260"
                className="animate-[spin_4s_linear_infinite]"
              />
              <circle
                cx="60"
                cy="60"
                r="34"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="2"
              />
            </g>
          </svg>

          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#ffd1ff] to-[#7b1fa2] shadow-[0_8px_40px_rgba(123,31,162,0.45)] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/90 animate-[pulse_1.8s_ease-in-out_infinite] shadow-md" />
          </div>

          <div className="absolute -left-3 -top-3 w-3 h-3 rounded-full bg-[#ffd1ff] opacity-90 animate-[spin_1.6s_linear_infinite] [transform-origin:60px_60px]" />
          <div className="absolute -right-6 bottom-6 w-2 h-2 rounded-full bg-[#00d4ff] opacity-90 animate-[spin_2.4s_linear_infinite] [transform-origin:60px_60px]" />
        </div>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#e9b8ff] via-[#9b30ff] to-[#00d4ff]">
            Loading Portfolio
          </h2>

          <p className="mt-2 text-sm sm:text-base text-white/70 max-w-xl mx-auto">
            Preparing your experience — loading assets, animations and
            starfield...
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 my-3 w-full">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-white/90 animate-[bounce_0.9s_infinite] [animation-delay:0s]" />
            <span className="w-2 h-2 rounded-full bg-white/70 animate-[bounce_0.9s_infinite] [animation-delay:0.12s]" />
            <span className="w-2 h-2 rounded-full bg-white/50 animate-[bounce_0.9s_infinite] [animation-delay:0.24s]" />
          </div>

          <div className="relative w-3/4 h-1 mt-5 rounded-full bg-white/6 overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#9b30ff] to-[#00d4ff] transition-all duration-20 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 text-center w-full z-10 pointer-events-none">
        <p className="text-xs text-white/40">
          Tip: scroll after the page loads — enjoy the galaxy ✨
        </p>
      </div>
    </div>
  );
}
