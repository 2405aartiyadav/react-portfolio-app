import React from "react";
 import education from "../assets/education.png";

const EducationCard = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-blue-100 border-l-4 border-blue-400 shadow-md rounded-lg p-3 sm:p-4 max-w-full sm:max-w-3xl mx-auto my-4">
      {/* Logo Section */}
      <div className="flex justify-center sm:justify-start mb-3 sm:mb-0 sm:mr-4">
        <img
          src={education}
          alt="education Logo"
          className="w-18 h-18 sm:w-20 sm:h-20 object-contain"
        />
      </div>

      <div className="text-gray-800 text-sm sm:text-base">
        <h1 className="text-lg sm:text-sm md:text-lg font-bold">Bachelor of Engineering (Computer Science)</h1>
        <p className="text-blue-700 sm:text-sm md:text-lg font-semibold">
          G.H. Raisoni College of Engineering, Nagpur
        </p>
        <p className="text-sm text-gray-600 mb-2 font-bold">2017 – 2021</p>
        
      </div>
    </div>
  );
};

export default EducationCard;
