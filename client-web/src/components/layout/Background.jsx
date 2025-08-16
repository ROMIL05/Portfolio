import LightRays from "./LightRays";

const Background = ({ children }) => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden text-text-base bg-gradient-radial from-bg-dark-alt to-bg-dark">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />

      {children}
    </div>
  );
};

export default Background;
