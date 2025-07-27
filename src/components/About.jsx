import React from "react";
import profile from "../assets/profile.jpeg";
import download from "../assets/download.png";
import contact from "../assets/contact.png";
import Resume_Aarti_Yadav_2025 from "../assets/Resume_Aarti_Yadav_2025.pdf";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:px-25 bg-gradient-to-r from-white to-gray-200">
      <motion.div
        initial={{ opacity: 0.2, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        className="m-20 sm:m-8 max-w-lg space-y-4 text-center md:text-left"
      >
        <h1 className="text-3xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-500 font-bold">Aarti Yadav</span>
        </h1>
        <p className="text-3xl font-bold">Front End Developer</p>
        <p className="text-xl text-gray-700">
          Passionate about creating innovative digital solutions that bridge the
          gap between design and technology. I specialize in building scalable
          web applications with modern frameworks and creating intuitive user
          experiences.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <a
            href={Resume_Aarti_Yadav_2025}
            download="Aarti_Yadav_Resume.pdf"
            className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md flex items-center"
          >
            <img src={download} className="w-4 h-4 mr-2" alt="download img" />
            <span>Download Resume</span>
          </a>
          <button className="bg-blue-700 hover:bg-blue-600 hover:text-gray-900 text-white py-2 px-4 rounded-lg shadow-md  flex items-center">
            <img src={contact} className="w-4 h-4 mr-2" alt="contact" />
            <span>Contact Me</span>
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.2, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} className="mt-6 md:mt-0 md:basis-1/2 flex justify-center">
        <img
          src={profile}
          alt="profile"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-white shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default About;
