import React, { useState } from "react";
import SkillCard from "./SkillCard";
import { frontendSkills, other } from "./skills";
import { motion, AnimatePresence } from "framer-motion";

const SkillSection = () => {
  const tabs = ["Frontend", "Other"];
  const [activeTab, setActiveTab] = useState("Frontend");

  const skillMap = {
    Frontend: frontendSkills,
    Other: other,
  };

  const filteredSkills = skillMap[activeTab] || [];

  return (
    <div className=" bg-gray-800 px-30">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r mb-6 from-green-400 to-blue-500">
        Technical Skills
      </h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-4 rounded-full text-sm font-medium transition-colors duration-300 ease-in ${
              activeTab === tab
                ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white hover:text-white"
                : "bg-blue-200 text-white-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <h3 className="text-xl font-bold text-white mb-4">
        {activeTab} Skills
      </h3>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={index}
              {...skill}
              isSimple={activeTab !== "Frontend"}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SkillSection;
