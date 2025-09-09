import Stack from "../UI/Stack";
import SpotlightCard from "../UI/SpotlightCard";
import c from "../../public/images/skills/c.png";
import cpp from "../../public/images/skills/c++.png";
import java from "../../public/images/skills/java.png";
import python from "../../public/images/skills/python.png";
import bootstrap from "../../public/images/skills/bootstrap.png";
import javascript from "../../public/images/skills/javascript.png";
import nodejs from "../../public/images/skills/nodejs.png";
import expressjs from "../../public/images/skills/expressjs.png";
import react from "../../public/images/skills/react-native.png";
import reactnative from "../../public/images/skills/react-native.png";
import sql from "../../public/images/skills/sql.png";
import mongodb from "../../public/images/skills/mongodb.png";
import github from "../../public/images/skills/github.png";
import docker from "../../public/images/skills/docker.png";
import postman from "../../public/images/skills/postman.png";
import androidstudio from "../../public/images/skills/android-studio.png";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", img: python },
        { name: "Java", img: java },
        { name: "C++", img: cpp },
        { name: "C", img: c },
      ],
      color: "#9b30ff",
    },
    {
      title: "Web & App Development",
      skills: [
        { name: "MongoDB", img: mongodb },
        { name: "SQL", img: sql },
        { name: "React Native", img: reactnative },
        { name: "React", img: react },
        { name: "ExpressJS", img: expressjs },
        { name: "NodeJS", img: nodejs },
        { name: "JavaScript", img: javascript },
        { name: "Bootstrap", img: bootstrap },
      ],
      color: "#d580ff",
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub", img: github },
        { name: "Docker", img: docker },
        { name: "Postman", img: postman },
        { name: "Android Studio", img: androidstudio },
      ],
      color: "#7b1fa2",
    },
  ];

  return (
    <section
      id="skills"
      className="container mx-auto flex flex-col items-center justify-center px-5 lg:px-28 py-14"
    >
      <h1 className="text-5xl font-bold text-center mb-3">Skills</h1>
      <p className="text-gray-400 text-center text-lg">
        A blend of programming languages, frameworks, and tools I use to build
        scalable solutions.
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 w-full justify-items-center">
        {skillCategories.map((category, idx) => {
          const cardsData = category.skills.map((skill, i) => ({
            id: i,
            content: (
              <SpotlightCard className="flex flex-col items-center justify-center h-full w-full p-0">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 mb-3 object-contain"
                />
                <h2 className="text-white font-bold text-xl">{skill.name}</h2>
              </SpotlightCard>
            ),
          }));

          return (
            <div
              key={idx}
              className="w-full flex flex-col items-center justify-center gap-2"
            >
              <h2 className="text-2xl font-bold text-gray-300 mb-4">
                {category.title}
              </h2>

              <Stack
                randomRotation={true}
                sensitivity={100}
                sendToBackOnClick={true}
                cardDimensions={{ width: 200, height: 200 }}
                cardsData={cardsData}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
