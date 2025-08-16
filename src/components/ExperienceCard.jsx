import React from "react";
import tcslogo from "../assets/tcs-logo.png";

const ExperienceCard = () => {
  return (
    <div className="bg-[#f7f7ca] flex flex-col sm:flex-row  border-l-4 border-[#005281] shadow-2xl rounded-lg p-3 sm:p-4 max-w-full sm:max-w-3xl mx-auto my-4">

      <div className="flex justify-center sm:justify-start mb-3 sm:mb-0 sm:mr-4">
        <img
          src={tcslogo}
          alt="TCS Logo"
          className="w-32 h-32 object-contain"
        />
      </div>

      <div className="text-[#0081A7] text-sm sm:text-base">
        <h1 className="text-lg sm:text-sm md:text-xl font-bold text-[#0081A7]">System Engineer</h1>
        <p className="text-[#F07167] font-semibold sm:text-sm md:text-lg">
          Tata Consultancy Services, Nagpur
        </p>
        <p className="text-sm text-[#F07167] mb-2 font-bold">2021 – Present</p>
        <ul className="list-disc list-inside space-y-1 sm:text-sm md:text-lg font-semibold">
          <li>
            Built and maintained dynamic, responsive UIs using <strong>React.js</strong> and <strong>Redux Toolkit</strong>.
          </li>
          <li>
            Integrated RESTful APIs using <strong>Axios</strong> and managed state efficiently.
          </li>
          <li>
            Improved performance via <strong>lazy loading</strong> and <strong>code splitting</strong>.
          </li>
          <li>
            Ensured <strong>cross-browser compatibility</strong> and responsive design.
          </li>
          <li>
            Collaborated in <strong>Agile sprints</strong> with code reviews and high test coverage.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
