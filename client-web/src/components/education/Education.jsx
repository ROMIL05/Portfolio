import { StickyScroll } from "../UI/StickyScroll";
import vgec from "../../public/images/education/vgec.png";
import sgvs from "../../public/images/education/sgvs.png";
import jvhs from "../../public/images/education/jvhs.png";

export default function Education() {
  const content = [
    {
      title: "Vishwakarma Government Engineering College",
      description:
        "Currently pursuing a Bachelor’s degree in Information Technology with a CPI of 6.95. Completed coursework in Data Structures, Analysis and Design of Algorithms, OOP, DBMS, Operating Systems, and Networks. I started my technical journey during these days by exploring various programming languages, building projects, and collaborating with peers. Actively participated in multiple hackathons, securing wins and recognition, which helped me sharpen my problem-solving, teamwork, and creative skills.",
      content: (
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <img
            src={vgec}
            alt="VGEC Logo"
            className="w-20 sm:w-24 h-20 sm:h-24"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-200">
              Vishwakarma Government Engineering College, Ahmedabad
            </h3>
            <h3 className="text-base font-semibold text-gray-300">
              Bachelor of Engineering - BE, IT
            </h3>
            <p className="text-sm text-gray-400">
              July 2023 - Present | 6.95 CPI
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Shree Gurukrupa Vidya Sankul",
      description:
        "Completed Class XII in March 2023 with 80.8%. Gained a strong foundation in Physics, Chemistry, and Mathematics.",
      content: (
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <img
            src={sgvs}
            alt="Shree Gurukrupa Logo"
            className="w-20 sm:w-24 h-20 sm:h-24"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-200">
              Shree Gurukrupa Vidya Sankul
            </h3>
            <h3 className="text-base font-semibold text-gray-300">
              Class XII (PCM)
            </h3>
            <p className="text-sm text-gray-400">Grad. March 2023 | 80.8%</p>
          </div>
        </div>
      ),
    },
    {
      title: "Jeevan Vikas High School",
      description:
        "Completed Class X in May 2021 with 87.5%. Built discipline, curiosity, and a strong academic foundation for future studies in science and technology.",
      content: (
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <img
            src={jvhs}
            alt="Jeevan Vikas Logo"
            className="w-20 sm:w-24 h-20 sm:h-24"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-200">
              Jeevan Vikas High School
            </h3>
            <h3 className="text-base font-semibold text-gray-300">Class X</h3>
            <p className="text-sm text-gray-400">Grad. May 2021 | 87.5%</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="education"
      className="container mx-auto flex flex-col items-center justify-center px-5 lg:px-28 py-0 lg:py-20"
    >
      <h1 className="text-5xl font-bold text-center mb-3">Education</h1>
      <p className="text-center text-gray-400 text-lg mb-8 sm:mb-12">
        A journey through my learning milestones, shaping the skills and
        knowledge I bring to every challenge.
      </p>

      <div className="w-full">
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
