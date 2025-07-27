import React from "react";
import tcslogo from "../assets/tcs-logo.png";

const ExperienceCard = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-blue-100 border-l-4 border-blue-400 shadow-md rounded-lg p-3 sm:p-4 max-w-full sm:max-w-3xl mx-auto my-4">

      <div className="flex justify-center sm:justify-start mb-3 sm:mb-0 sm:mr-4">
        <img
          src={tcslogo}
          alt="TCS Logo"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
        />
      </div>

      <div className="text-gray-800 text-sm sm:text-base">
        <h1 className="text-lg sm:text-sm md:text-xl font-bold">System Engineer</h1>
        <p className="text-blue-700 font-semibold sm:text-sm md:text-lg">
          Tata Consultancy Services, Nagpur
        </p>
        <p className="text-sm text-gray-600 mb-2 font-bold">2021 – Present</p>
        <ul className="list-disc list-inside space-y-1 sm:text-sm md:text-lg">
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
