import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import TypingTitle from "../UI/TypingTitle";
import Prism from "../layout/Prism";
import RotatingText from "../UI/RotatingText";
import photo from "../../public/images/RomilPhoto.jpg";

function LaptopModel() {
  const lidRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [overshoot, setOvershoot] = useState(true);
  const roles = ["Full Stack Developer", "Programmer"];

  useEffect(() => {
    setIsOpen(true);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const overshootRef = useRef(true);

  useFrame((state, delta) => {
    if (!lidRef.current) return;
    const openAngle = 0.05;
    let target = isOpen ? openAngle : Math.PI / 2;

    if (isOpen && overshootRef.current) {
      target = -0.08;
    }

    lidRef.current.rotation.x = THREE.MathUtils.damp(
      lidRef.current.rotation.x,
      target,
      0.7,
      delta
    );

    if (
      overshootRef.current &&
      Math.abs(lidRef.current.rotation.x - -0.08) < 0.005
    ) {
      overshootRef.current = false;
    }
  });

  const currentText = roles[index];
  const steps = currentText.length;

  return (
    <group position={[1, -2, 0]} rotation={[0, 0.5, 0]} scale={[1.3, 1.3, 1.3]}>
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[7, 0.2, 4]} />
        <meshStandardMaterial color="#37353E" metalness={0.6} roughness={0.4} />
      </mesh>

      <group position={[0, 0.16, -0.2]}>
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => (
            <mesh
              key={`key-${row}-${col}`}
              position={[-3 + col * 0.55, 0, -row * 0.35]}
            >
              <boxGeometry args={[0.5, 0.1, 0.3]} />
              <meshStandardMaterial
                color="#2e2c36"
                metalness={0.3}
                roughness={0.6}
              />
            </mesh>
          ))
        )}
      </group>

      <mesh position={[0, 0.15, 1]}>
        <boxGeometry args={[2, 0.05, 1.2]} />
        <meshStandardMaterial color="#2a2832" metalness={0.2} roughness={0.7} />
      </mesh>

      <group
        ref={lidRef}
        position={[0, 0.1, -2.4]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh position={[0, 2.4, 0]} castShadow>
          <boxGeometry args={[7, 4.6, 0.15]} />
          <meshStandardMaterial
            color="#37353E"
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>

        <Html
          transform
          occlude
          distanceFactor={3}
          position={[-0.1, 2.4, 0.09]}
          wrapperClass="laptop-screen"
          style={{ zIndex: 5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0 }}
            className="w-[900px] h-[550px] relative rounded-xl border-2 border-purple-300 shadow-[0_0_40px_rgba(128,0,255,0.3)] [backface-visibility:hidden] overflow-hidden select-none flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 -z-10">
              <Prism
                animationType="rotate"
                timeScale={0.5}
                height={4}
                baseWidth={5}
                scale={4.5}
                hueShift={0}
                colorFrequency={1}
                noise={0.2}
                glow={0.5}
              />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <img
                src={photo}
                alt="Romil Patel"
                className="w-56 h-56 rounded-full border-4 border-purple-400 shadow-lg mb-7"
              />

              <h1 className="text-5xl font-bold text-white mb-10">
                Hi, I am Romil Patel
              </h1>

              <div className="flex items-center gap-3 text-3xl sm:text-3xl font-semibold">
                <span className="text-white">I am a</span>
                <RotatingText
                  texts={["Full Stack Developer", "Programmer"]}
                  mainClassName="px-2 sm:px-3 bg-purple-500/30 text-purple-400 py-1 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  exit={{ y: -40 }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </div>
          </motion.div>
        </Html>
      </group>
    </group>
  );
}

export default function Laptop() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[550px] relative z-10 mr-20 sm:mr-0">
      <Canvas
        camera={{ position: [8, 5, 8], fov: 45 }}
        gl={{ antialias: true }}
        shadows
        className="w-full"
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[2, 7, 7]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <LaptopModel />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
