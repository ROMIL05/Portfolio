import FuzzyText from "./FuzzyText";

const NameText = () => {
  return (
    <FuzzyText
      baseIntensity={0.08}
      hoverIntensity={0.4}
      enableHover={true}
      fontSize="1.5rem"
      fontWeight={700}
      color="#fff"
      fontFamily="Poppins, sans-serif"
    >
      {"<Romil / Patel>"}
    </FuzzyText>
  );
};

export default NameText;
