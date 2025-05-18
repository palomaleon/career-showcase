
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Typography options for the title
type TitleStyle = {
  id: string;
  name: string;
  titleClass: string;
  descriptionClass: string;
};

const titleStyles: TitleStyle[] = [
  {
    id: "default",
    name: "Bold Modern",
    titleClass: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white",
    descriptionClass: "text-2xl md:text-3xl text-white mb-8 max-w-2xl uppercase"
  },
  {
    id: "elegant",
    name: "Elegant Serif",
    titleClass: "text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight text-white italic",
    descriptionClass: "text-2xl md:text-3xl text-white mb-8 max-w-2xl font-serif"
  },
  {
    id: "minimal",
    name: "Clean Minimal",
    titleClass: "text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-white tracking-wide",
    descriptionClass: "text-2xl md:text-3xl text-white/90 mb-8 max-w-2xl uppercase tracking-wider"
  },
  {
    id: "creative",
    name: "Creative Display",
    titleClass: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white tracking-tight",
    descriptionClass: "text-2xl md:text-3xl text-white mb-8 max-w-2xl font-medium"
  }
];

const Hero: React.FC = () => {
  const [activeStyle, setActiveStyle] = useState<string>("default");

  const currentStyle = titleStyles.find(style => style.id === activeStyle) || titleStyles[0];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative bg-[#E85C33]">
      <div className="absolute inset-0 -z-10"></div>
      <div className="container px-4 lg:px-8 flex flex-col items-center text-center">
        <h1 className={`${currentStyle.titleClass} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
          PALOMA <span className="block">LEON RAVEST</span>
        </h1>
        <p className={`${currentStyle.descriptionClass} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
          STRATEGIC DESIGNER & PROGRAM LEAD
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="px-8 bg-white text-[#E85C33] hover:bg-white/90">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white/20">
            Download Resume
          </Button>
        </div>

        {/* Typography Selector */}
        <div className="mb-12 flex flex-wrap gap-2 justify-center">
          {titleStyles.map((style) => (
            <Button 
              key={style.id}
              variant={activeStyle === style.id ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveStyle(style.id)}
              className={`${activeStyle === style.id ? 'bg-white text-[#E85C33]' : 'bg-transparent text-white border-white'} hover:bg-white/20 transition-all`}
            >
              {style.name}
            </Button>
          ))}
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
