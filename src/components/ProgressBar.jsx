import React from "react";

const ProgressBar = ({ label, percentage, barcolor }) => {
  return (
    <>
      <div className="w-full mb-6">
        <h4 className="text-gray-600 font-semibold mb-1">{label}</h4>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 w-10">{percentage}%</span>
          <div className="w-full bg-gray-600 h-2.5 rounded">
            <div
              className="bg-blue-600 h-2.5 rounded"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
