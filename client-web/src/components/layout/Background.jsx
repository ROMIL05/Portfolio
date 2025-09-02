import Galaxy from "./Galaxy";

const Background = ({ children }) => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden text-text-base">
      <div className="absolute inset-0 bg-gradient-radial from-bg-dark-alt to-bg-dark -z-20" />
      <div className="absolute inset-0 -z-10">
        <Galaxy
          focal={[0.5, 0.5]} // Center focal point
          rotation={[0.7071, 0.7071]} // 45-degree rotation for ray effect
          starSpeed={0.3} // Slow speed for stable glow
          density={1} // Higher density for more stars and rays
          hueShift={0} // No hue shift for white
          speed={0.8} // Moderate animation speed
          mouseInteraction={true} // Ensure mouse interaction
          glowIntensity={0.15} // Stronger glow for rays
          saturation={0.0} // No saturation for white stars
          mouseRepulsion={true} // Enable repulsion (change to false for attraction-like effect if needed)
          repulsionStrength={0.4} // Stronger repulsion for mouse effect
          twinkleIntensity={0.5} // More twinkling for dynamic feel
          rotationSpeed={0.2} // Faster rotation for ray motion
          autoCenterRepulsion={0.15} // Slight centering for ray focus
          transparent={true} // Transparency for gradient
        />
      </div>
      {console.log("child: ", children)}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
