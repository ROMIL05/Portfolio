import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import TypingTitle from "../components/UI/TypingTitle";

function LaptopModel() {
  const lidRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const roles = ["Full Stack Developer", "Programmer"];

  useEffect(() => {
    setIsOpen(true);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    if (lidRef.current) {
      const targetRotation = isOpen ? -0.05 : Math.PI / 2;
      lidRef.current.rotation.x = THREE.MathUtils.lerp(
        lidRef.current.rotation.x,
        targetRotation,
        0.05
      );
    }
  });

  const currentText = roles[index];
  const steps = currentText.length;

  return (
    <group position={[0, 0, 0]} rotation={[0, 1, 0]}>
      {/* Base */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[7, 0.3, 4]} />
        <meshStandardMaterial color="#37353E" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Lid */}
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
          position={[0, 2.4, 0.09]}
          wrapperClass="laptop-screen"
          style={{ zIndex: 5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-[900px] h-[520px] bg-gradient-to-tr from-purple-500/40 to-blue-500/40  text-white rounded-xl p-3 flex flex-col border-2 border-purple-400 shadow-[0_0_40px_rgba(128,0,255,0.3)] [backface-visibility:hidden] overflow-hidden select-none"
          >
            <div className="flex flex-col gap-2 p-5">
              <h1 className="text-4xl font-bold text-white">
                Hi, I am Romil Patel
              </h1>
              {/* <h1 className="text-4xl font-bold text-white">Romil Patel</h1> */}
              <TypingTitle />
            </div>

            <div className="mt-2 px-5">
              <p className="text-gray-300 text-2xl leading-relaxed mb-3">
                I am a passionate and adaptable Full Stack Developer with a
                strong foundation in building scalable applications and solving
                complex problems. With a keen interest in AI/ML, I am
                continuously expanding my knowledge and applying it to
                real-world projects. My problem-solving mindset, combined with a
                drive for innovation and continuous learning, allows me to
                deliver high-quality solutions. With a collaborative spirit and
                a focus on growth, I am eager to contribute to impactful
                projects and push the boundaries of technology.
              </p>
            </div>
          </motion.div>
        </Html>
      </group>
    </group>
  );
}

export default function Laptop() {
  return (
    <div className="w-full h-[800px] relative z-0">
      <Canvas
        camera={{ position: [8, 5, 8], fov: 45 }}
        gl={{ antialias: true }}
        shadows
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
