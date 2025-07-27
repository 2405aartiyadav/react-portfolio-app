import { useState } from "react";
import "./App.css";
import "tailwindcss";
import Header from "./components/Header";
import About from "./components/About";
import SkillsSection from "./components/SkillSection";
import Experience from "./components/Experience";
function App() {
  return (
    <>
      <Header />
      <About/>
      <SkillsSection/>
      <Experience/>
    </>
  );
}

export default App;
