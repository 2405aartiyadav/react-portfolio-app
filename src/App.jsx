import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "tailwindcss";
import Header from "./components/Header";
import About from "./components/About";
import SkillSection from "./components/SkillSection";
import Experience from "./components/Experience";
import GetInTouch from "./components/GetInTouch";
import Projects from "./components/Projects";

function App() {
  const [navItems] = useState([
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "Contacts", path: "/get-in-touch" },
  ]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  {
    navItems.map((item, index) => (
      <button
        key={index}
        onClick={() => scrollToSection(item.path.slice(1))} // Use section id without '/'
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        {item.label}
      </button>
    ));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <div className="bg-gray-200">
                <About />
                <Experience />
                <Projects/>
                <SkillSection />
                <GetInTouch />
              </div>
            }
          />
          <Route path="skills" element={<SkillSection />} />
          <Route path="experience" element={<Experience />} />
          <Route path="get-in-touch" element={<GetInTouch />} />
          <Route path="projects" element={<Projects />} />

          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
