
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Mail, Github, Linkedin } from "lucide-react";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 reveal">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="col-span-1 lg:col-span-2 flex justify-center lg:justify-end reveal">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/60 flex items-center justify-center">
              <div className="w-60 h-60 rounded-full bg-white flex items-center justify-center overflow-hidden">
                {/* Replace with your photo or avatar */}
                <User size={120} className="text-primary/60" />
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-4">
              I'm <span className="text-primary">Your Name</span>, a Software Developer
            </h3>
            <p className="text-muted-foreground mb-6">
              Based in [Your Location], I'm a passionate software developer with expertise in creating 
              modern web applications. With [X] years of experience in the industry, I've developed a strong 
              foundation in front-end and back-end technologies.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach to development focuses on creating clean, efficient, and maintainable code that delivers 
              exceptional user experiences. I enjoy solving complex problems and continuously learning new technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Card className="inline-flex items-center gap-2 p-2">
                <Mail size={18} className="text-primary" />
                <span className="text-sm">youremail@example.com</span>
              </Card>
              <Card className="inline-flex items-center gap-2 p-2">
                <Github size={18} className="text-primary" />
                <span className="text-sm">github.com/yourusername</span>
              </Card>
              <Card className="inline-flex items-center gap-2 p-2">
                <Linkedin size={18} className="text-primary" />
                <span className="text-sm">linkedin.com/in/yourusername</span>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
