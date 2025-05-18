
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useRevealAnimation } from "@/utils/animationUtils";

const Index: React.FC = () => {
  useRevealAnimation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
