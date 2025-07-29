import { BrowserRouter ,Routes,Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "tailwindcss";
import Header from "./components/Header";
import About from "./components/About";
import SkillSection from "./components/SkillSection";
import Experience from "./components/Experience"
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<SkillSection />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
