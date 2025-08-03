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
    <div className="bg-gray-800 text-white py-16 px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          MY PORTFOLIO WORK
        </h2>
        <p className="text-xl mt-4">
          Here is some of my work that I've done in HTML5, CSS, JS, ReactJS,
          NodeJS.
        </p>
      </div>

      {/* Portfolio Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:rotate-3 hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-500 hover:rotate-6"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex justify-between items-center mt-4">
              <a
                href={project.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-md inline-block"
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
