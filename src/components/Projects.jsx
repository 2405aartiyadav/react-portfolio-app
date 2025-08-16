import React from "react";
import Ecomm from "../assets/project_imgs/Ecomm.png";
import gmart from "../assets/project_imgs/gmart.png";

const projects = [
  {
    title: "GMART",
    imageUrl: gmart,
    description: "GMART: Ecommerce app",
    appUrl: "https://gmart-app.netlify.app",
  },
  {
    title: "ECOMM App",
    imageUrl: Ecomm,
    description: "ECOMM React - User-Friendly E-Commerce App.",
    appUrl: "https://ecomm-react-web-app.netlify.app/",
  }
];

function Projects() {
  return (
    <div className="bg-[#FDFCDC] ml-20 mr-20 py-16 px-8 ">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold  bg-clip-text text-[#F07167] mb-8">
          My Portfolio Work
        </h2>
        <p className="text-xl mt-4">
          Here is some of my work that I've done in HTML5, CSS, JS, ReactJS,
          NodeJS.
        </p>
      </div>

      {/* Portfolio Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 bg-[#FDFCDC]" >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#f7f7ca] p-6 rounded-lg shadow-2xl transform transition-transform duration-500 hover:rotate-3 hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-500 hover:rotate-6 bg-[#f7f7ca] shadow-2xl"
            />
            <h3 className="text-xl font-semibold text-[#F07167]">{project.title}</h3>
            <p className="text-[#0081A7]">{project.description}</p>
            <div className="flex justify-between items-center mt-4">
              <a
                href={project.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0081A7] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-md inline-block"
              >
                Explore
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
