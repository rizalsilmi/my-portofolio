import React from "react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Experience from "./components/Experiences";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Typewriter } from 'react-simple-typewriter';
import './App.css';

function App() {
  return (
    <>

      <Navbar />

      <main>
         <HeroSection />
         <Services />
         <Experience />
         <Skills />
         <Projects />
         <Contact />





      </main>






    </>
  );
}

export default App;
