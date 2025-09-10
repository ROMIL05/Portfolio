import Galaxy from "./Galaxy";

const Background = ({ children }) => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden text-text-base">
      <div className="absolute inset-0 h-full bg-gradient-radial from-bg-dark-alt to-bg-dark -z-20" />
      <div className="absolute inset-0 h-full -z-10">
        <Galaxy
          focal={[0.5, 0.5]}
          rotation={[0.7071, 0.7071]}
          starSpeed={0.3}
          density={1}
          hueShift={0}
          speed={0.8}
          mouseInteraction={true}
          glowIntensity={0.15}
          saturation={0.0}
          mouseRepulsion={true}
          repulsionStrength={0.4}
          twinkleIntensity={0.5}
          rotationSpeed={0.2}
          autoCenterRepulsion={0.15}
          transparent={true}
        />
      </div>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default Background;
