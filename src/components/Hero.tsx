
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
    titleClass: "text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-zinc-800",
    descriptionClass: "text-2xl md:text-3xl lg:text-4xl text-amber-800 mb-8 max-w-2xl uppercase"
  },
  {
    id: "elegant",
    name: "Elegant Serif",
    titleClass: "text-6xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 leading-tight text-zinc-800 italic",
    descriptionClass: "text-2xl md:text-3xl lg:text-4xl text-amber-800 mb-8 max-w-2xl font-serif"
  },
  {
    id: "minimal",
    name: "Clean Minimal",
    titleClass: "text-6xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight text-zinc-800 tracking-wide",
    descriptionClass: "text-2xl md:text-3xl lg:text-4xl text-amber-800/90 mb-8 max-w-2xl uppercase tracking-wider"
  },
  {
    id: "creative",
    name: "Creative Display",
    titleClass: "text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-zinc-800 tracking-tight",
    descriptionClass: "text-2xl md:text-3xl lg:text-4xl text-amber-800 mb-8 max-w-2xl font-medium"
  }
];

const Hero: React.FC = () => {
  const [activeStyle, setActiveStyle] = useState<string>("default");

  const currentStyle = titleStyles.find(style => style.id === activeStyle) || titleStyles[0];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative bg-gradient-to-b from-stone-100 to-amber-50">
      <div className="absolute inset-0 -z-10"></div>
      <div className="container px-4 lg:px-8 flex flex-col items-center text-center">
        <div className="mb-10">
          <Avatar className="w-48 h-48 mx-auto border-4 border-amber-600">
            <AvatarImage src="/lovable-uploads/9af2bcd2-91c6-45c1-96ac-4caeb0fa8763.png" alt="Paloma Leon Ravest" />
            <AvatarFallback className="bg-amber-200 text-amber-800 text-4xl">PLR</AvatarFallback>
          </Avatar>
        </div>
        <h1 className={`${currentStyle.titleClass} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
          PALOMA <span className="block">LEON RAVEST</span>
        </h1>
        <p className={`${currentStyle.descriptionClass} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
          STRATEGIC DESIGNER & PROGRAM LEAD
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="px-8 bg-amber-700 hover:bg-amber-800 text-white">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="px-8 border-amber-700 text-amber-700 hover:bg-amber-700/10">
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
              className={`${activeStyle === style.id ? 'bg-amber-700 text-white' : 'bg-transparent text-amber-700 border-amber-700'} hover:bg-amber-700/20 transition-all`}
            >
              {style.name}
            </Button>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={32} className="text-amber-700" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
