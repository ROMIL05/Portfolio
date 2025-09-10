import FuzzyText from "./FuzzyText";

const NameText = () => {
  return (
    <FuzzyText
      baseIntensity={0.04}
      hoverIntensity={0.15}
      enableHover={true}
      fontSize="1.7rem"
      fontWeight={800}
      color="#fff"
      fontFamily="Poppins, sans-serif"
    >
      {"My Portfolio"}
    </FuzzyText>
  );
};

export default NameText;
