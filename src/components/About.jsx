import React from "react";
import profile from "../assets/profile.jpeg";
import download from "../assets/download.png";
import contact from "../assets/contact.png";
import Resume_Aarti_Yadav_2025 from "../assets/Resume_Aarti_Yadav_2025.pdf";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="bg-[#FDFCDC] flex flex-col  md:flex-row items-center justify-between md:px-30 text-[#333] ">
      <motion.div
        initial={{ opacity: 0.2, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        className="m-20 sm:m-8 max-w-lg space-y-4 text-center md:text-left"
      >
        <h1 className="text-3xl md:text-6xl font-bold text-[#005d7a]">
          Hi, I'm{" "}
          <p className="text-4xl font-extrabold  bg-clip-text text-[#0081A7]">
            Aarti Yadav
          </p>
        </h1>
        <p className="sm:text-2xl text-3xl font-bold text-[#F07167]">Front End Developer</p>
        <p className="text-sm md:text-xl text-[#333]">
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

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <a
            href={Resume_Aarti_Yadav_2025}
            download="Aarti_Yadav_Resume.pdf"
            className="
      flex items-center justify-center 
      bg-[#0081A7] hover:bg-[#006B8A] 
      text-[#FDFCDC] hover:text-[#FDFCDC] 
      py-2 px-4 rounded-lg shadow-md 
      w-full md:w-auto
      transition-all duration-300 ease-in-out
    "
          >
            <img src={download} className="w-5 h-5 mr-2" alt="download img" />
            <span className="text-sm sm:text-base">Download Resume</span>
          </a>

          <Link
            to="/get-in-touch"
            className="
      flex items-center justify-center 
      bg-[#0081A7] hover:bg-[#006B8A] 
      text-[#FDFCDC] hover:text-[#FDFCDC] 
      py-2 px-4 rounded-lg shadow-md 
      w-full md:w-auto
      transition-all duration-300 ease-in-out
    "
          >
            <img src={contact} className="w-5 h-5 mr-2" alt="contact" />
            <span className="text-sm sm:text-base">Contact Me</span>
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
          className="
      w-40 h-40
      sm:w-56 sm:h-56
      md:w-64 md:h-64
      lg:w-72 lg:h-72
      xl:w-80 xl:h-80
      rounded-full border-4 border-[#00AFB9] border-double shadow-lg
      object-cover max-w-full
    "
        />
      </motion.div>

      <hr className="border-t-2 border-gray-300 my-6" />
    </div>
  );
};

export default About;
