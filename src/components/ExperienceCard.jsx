import React from "react";
import tcslogo from "../assets/tcs-logo.png";

const ExperienceCard = () => {
  return (
    <div className="bg-[#f7f7ca] flex flex-col sm:flex-row  border-l-4 border-[#005281] shadow-2xl rounded-lg p-3 sm:p-4 max-w-full sm:max-w-3xl mx-auto my-4">
      <div className="flex justify-center sm:justify-start mb-3 sm:mb-0 sm:mr-4">
        <img
          src={tcslogo}
          alt="TCS Logo"
          className="w-34 h-34 object-contain"
        />
      </div>

      <div className="text-[#0081A7] text-sm sm:text-base">
        <h1 className="text-lg sm:text-sm md:text-xl font-bold text-[#0081A7]">
          System Engineer
        </h1>
        <p className="text-[#F07167] font-semibold sm:text-sm md:text-lg">
          Tata Consultancy Services, Nagpur
        </p>
        <p className="text-sm text-[#F07167] mb-2 font-bold">2021 – Present</p>
        <ul className="list-disc list-inside space-y-1 sm:text-sm md:text-sm font-semibold">
          <li>
            Designed and developed a configuration platform for commercial and
            passenger vehicles using React and Redux Toolkit, enhancing user
            experience and configurability.
          </li>
          <li>
            Integrated backend APIs using Express.js for real-time data updates,
            improving accuracy and reducing manual intervention.
          </li>
          <li>
            Resolved browser compatibility issues and implemented responsive UI
            designs for mobile and desktop, ensuring consistent performance
            across devices.
          </li>
          <li>
            {" "}
            Worked with Jenkins and Docker to deploy builds to staging and UAT
            environments.
          </li>
          <li>
            Collaborated with cross-functional teams including Backend,
            database, middleware, Cloud, and networking groups to deliver
            complex projects ahead of schedule, expediting product releases by
            as much as 20% compared to previous cycles.{" "}
          </li>
          <li>
            Ensured high code quality through comprehensive unit testing
            (covering 90%+ codebase), regular code reviews, and strict adherence
            to industry best practices.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
