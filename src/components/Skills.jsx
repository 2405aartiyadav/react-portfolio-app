import React from "react";
import ProgressBar from "./ProgressBar";
const Skills = () => {
  const skills = [
    { label: "React JS", percentage: 80 },
    { label: "J", percentage: 70 },
    { label: "JAVASCRIPT", percentage: 75 },
    { label: "REACTJS", percentage: 75 },
    { label: "BOOTSTRAP", percentage: 80 },
    { label: "CORE JAVA", percentage: 60 },
  ];
  return (
    <div className="bg-gradient-to-r from-white to-gray-200  min-h-screen px-4 sm:px-6 py-10 transition-all duration-700 ease-in-out">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">TECHNICAL SKILLS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
          {skills.map((skill, index) => (
            <ProgressBar
              key={index}
              label={skill.label}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
