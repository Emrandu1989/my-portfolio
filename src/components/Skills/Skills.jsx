import React from "react";

const skillsData = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "💻" },
  { name: "ReactJS", icon: "⚛️" },
  { name: "NodeJS", icon: "🌱" },
  { name: "ExpressJS", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Firebase", icon: "🔥" },
  { name: "Git", icon: "🔧" },
  { name: "GitHub", icon: "🐙" },
];

const Skills = () => {
  return (
    <section id="skills" className=" py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-600 mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
