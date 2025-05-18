
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative bg-[#E85C33]">
      <div className="absolute inset-0 -z-10"></div>
      <div className="container px-4 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in text-white" style={{ animationDelay: '0.2s' }}>
          PALOMA <span className="block">LEON RAVEST</span>
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-8 max-w-2xl animate-fade-in uppercase" style={{ animationDelay: '0.4s' }}>
          PORTFOLIO
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="px-8 bg-white text-[#E85C33] hover:bg-white/90">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white/20">
            Download Resume
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={32} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
