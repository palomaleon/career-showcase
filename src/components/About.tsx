
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
          About <span className="text-[#E85C33]">Me</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="col-span-1 lg:col-span-2 flex justify-center lg:justify-end reveal">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#E85C33]/20 to-[#E85C33]/60 flex items-center justify-center">
              <div className="w-60 h-60 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <User size={120} className="text-[#E85C33]/60" />
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-4">
              I'm <span className="text-[#E85C33]">Paloma Leon Ravest</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              I am a passionate, outgoing and enthusiastic strategic designer with knowledge in human-centred design, design research and complex systems. I have over five years of professional experience as an integrated design practitioner transiting the design spectrum across industrial, graphic and strategic design.
            </p>
            <p className="text-muted-foreground mb-6">
              I worked collaboratively on teams with stakeholders and customers to understand needs, behaviours and mindsets to generate new products within different contexts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Card className="inline-flex items-center gap-2 p-2">
                <Mail size={18} className="text-[#E85C33]" />
                <span className="text-sm">paloma.leonravest@gmail.com</span>
              </Card>
              <Card className="inline-flex items-center gap-2 p-2">
                <Linkedin size={18} className="text-[#E85C33]" />
                <span className="text-sm">linkedin.com/in/plr-design</span>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
