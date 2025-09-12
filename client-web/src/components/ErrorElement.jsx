import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ErrorElement() {
  const navigate = useNavigate();
  const symbols = [
    "{",
    "}",
    ";",
    "</>",
    "()",
    "0",
    "1",
    "console.log()",
    "if()",
    "while()",
    "const",
    "let",
  ];

  const [symbolStates, setSymbolStates] = useState(
    Array.from({ length: 40 }).map(() => ({
      sym: symbols[Math.floor(Math.random() * symbols.length)],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 5,
      vy: (Math.random() - 0.5) * 5,
      fontSize: Math.random() * 20 + 10,
      opacity: Math.random() * 0.4 + 0.2,
    }))
  );

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setSymbolStates((prev) =>
        prev.map((s) => {
          let nx = s.x + s.vx;
          let ny = s.y + s.vy;

          if (nx < -50) nx = window.innerWidth + 50;
          if (nx > window.innerWidth + 50) nx = -50;
          if (ny < -50) ny = window.innerHeight + 50;
          if (ny > window.innerHeight + 50) ny = -50;

          return { ...s, x: nx, y: ny };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-bg-dark-alt via-bg-dark to-bg-dark overflow-hidden relative flex items-center justify-center text-white font-mono">
      {symbolStates.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: s.x,
            top: s.y,
            fontSize: s.fontSize,
            opacity: s.opacity,
            color: "#7c3aed",
          }}
        >
          {s.sym}
        </div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container flex flex-col md:flex-row items-center justify-center px-5 relative z-10 text-center md:text-left"
      >
        <div className="max-w-md">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-8xl md:text-9xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600 drop-shadow-lg animate-pulse"
          >
            404
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl md:text-3xl font-light mb-2 text-purple-300"
          >
            Segmentation fault: Page not found
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mb-6 text-purple-400"
          >
            Looks like this function doesn't exist. Try checking your variables
            or return to the main branch.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #6b21a8" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="px-6 py-3 font-semibold rounded-lg shadow-lg bg-purple-900 hover:bg-purple-800 transition-all duration-300"
          >
            cd /home
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-lg mt-10 md:mt-0 md:ml-10 relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-full h-auto"
          >
            <rect
              x="10"
              y="10"
              width="180"
              height="120"
              rx="8"
              ry="8"
              fill="#1e1e2f"
              stroke="#7c3aed"
              strokeWidth="2"
            />
            <text
              x="20"
              y="40"
              fill="#8b5cf6"
              fontFamily="monospace"
              fontSize="14"
            >
              {"> console.log('404');"}
            </text>
            <text
              x="20"
              y="60"
              fill="#c084fc"
              fontFamily="monospace"
              fontSize="14"
            >
              {"> let page = null;"}
            </text>
            <text
              x="20"
              y="80"
              fill="#d8b4fe"
              fontFamily="monospace"
              fontSize="14"
            >
              {"> if(page === null)"}
            </text>
            <text
              x="45"
              y="100"
              fill="#d8b4fe"
              fontFamily="monospace"
              fontSize="14"
            >
              {"error();"}
            </text>
            <motion.rect
              x="110"
              y="89"
              width="5"
              height="14"
              fill="#fff"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ErrorElement;
