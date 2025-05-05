
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background -z-10"></div>
      <div className="container px-4 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          A passionate developer specialized in creating beautiful and functional web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="px-8">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            Download Resume
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={32} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
