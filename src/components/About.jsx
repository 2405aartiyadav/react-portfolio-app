import React from "react";
import profile from "../assets/profile.jpeg";
import download from "../assets/download.png";
import contact from "../assets/contact.png";
import Resume_Aarti_Yadav_2025 from "../assets/Resume_Aarti_Yadav_2025.pdf";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:px-30 bg-gray-800 text-white md:min-h-screen ">
      <motion.div
        initial={{ opacity: 0.2, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        className="m-20 sm:m-8 max-w-lg space-y-4 text-center md:text-left"
      >
        <h1 className="text-3xl md:text-6xl font-bold">
          Hi, I'm <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Aarti Yadav
        </h2>
        </h1>
        <p className="sm:text-2xl text-3xl font-bold">Front End Developer</p>
        <p className="text-sm md:text-xl text-white">
          Hi! I'm a frontend developer with over 4 years of experience, looking
          to work with a fast-growing and impactful company in the software
          development field (Frontend or Full Stack roles). I’ve worked on
          several real-world projects, including one for Tata Motors while I was
          at TCS. My main skills are JavaScript, React.js, HTML, and CSS, and
          I’ve also used tools like Jenkins and Docker for deployments. You can
          check out some of my work in the featured section of my profile. I’m
          excited to keep learning and grow deeper in these technologies by
          working on challenging and meaningful projects.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <a
            href={Resume_Aarti_Yadav_2025}
            download="Aarti_Yadav_Resume.pdf"
            className="bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white  hover:text-white py-2 px-4 rounded-lg shadow-md flex items-center"
          >
            <img src={download} className="w-4 h-4 mr-2" alt="download img" />
            <span>Download Resume</span>
          </a>
          <Link
            to="/get-in-touch "
            className="bg-[#1E3A8A] hover:bg-[#1D4ED8]  hover:text-white text-white py-2 px-4 rounded-lg shadow-md  flex items-center"
          >
            <img src={contact} className="w-4 h-4 mr-2" alt="contact" />
            <span>Contact Me</span>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.2, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="mt-6 md:mt-0 md:basis-1/2 flex justify-center"
      >
        <img
          src={profile}
          alt="profile"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-yellow-500 border-double shadow-lg"
        />
      </motion.div>
      <hr className="border-t-2 border-gray-300 my-6" />
    </div>
  );
};

export default About;
