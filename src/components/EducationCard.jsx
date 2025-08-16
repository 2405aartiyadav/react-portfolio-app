import React from "react";
 import education from "../assets/education.png";

const EducationCard = () => {
  return (
    <div className="bg-[#f7f7ca] flex flex-col sm:flex-row  border-l-4 border-[#005281] shadow-2xl rounded-lg p-3 sm:p-4 max-w-full sm:max-w-3xl mx-auto my-4">
      {/* Logo Section */}
      <div className="flex justify-center sm:justify-start mb-3 sm:mb-0 sm:mr-4">
        <img
          src={education}
          alt="education Logo"
          className="rounded-3xl w-32 h-32 object-contain"
        />
      </div>

      <div className="text-[#0081A7] text-sm sm:text-base">
        <h1 className="text-lg sm:text-sm md:text-lg font-bold text-[#0081A7]">Bachelor of Engineering (Computer Science)</h1>
        <p className="text-[#F07167] sm:text-sm md:text-lg font-semibold">
          G.H. Raisoni College of Engineering, Nagpur
        </p>
        <p className="text-sm text-[#F07167] mb-2 font-bold">2017 – 2021</p>
        
      </div>
    </div>
  );
};

export default EducationCard;
