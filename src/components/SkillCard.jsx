import React from "react";

const SkillCard = ({ name, icon, percentage, experience, isSimple }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full transition-transform hover:scale-[1.02] duration-300 ">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
         {
            !isSimple?(
                 <img
            src={icon}
            alt={name}
            loading="lazy"
            className="w-6 h-6 object-contain opacity-0 transition-opacity duration-500"
            onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
          />
            ):( <img
            src={icon}
            alt={name}
            loading="lazy"
            className="w-12 h-12 
            object-contain opacity-0 transition-opacity duration-500"
            onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
          />)
         }
          <h3 className="text-gray-800 font-semibold text-sm sm:text-base">
            {name}
          </h3>
        </div>

        {!isSimple && (
          <span className="text-blue-600 font-semibold text-sm">
            {percentage}%
          </span>
        )}
      </div>

      {/* Progress Bar */}
      {!isSimple && (
        <>
          <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
            <div
              className="h-2 bg-blue-500 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          <div className="text-xs text-gray-500">{experience}</div>
        </>
      )}
    </div>
  );
};

export default SkillCard;
