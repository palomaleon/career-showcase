
import React, { useEffect } from "react";

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-5
}

const skillsData: SkillCategory[] = [
  {
    name: "Strategic Design",
    skills: [
      { name: "Design Thinking", level: 5 },
      { name: "Service Design", level: 5 },
      { name: "Human-Centered Design", level: 5 },
      { name: "Systems Thinking", level: 4 },
      { name: "Design Research", level: 5 },
    ],
  },
  {
    name: "Design Methods",
    skills: [
      { name: "Workshop Facilitation", level: 5 },
      { name: "Journey Mapping", level: 5 },
      { name: "Stakeholder Engagement", level: 4 },
      { name: "Persona Development", level: 4 },
      { name: "Design Strategy", level: 4 },
    ],
  },
  {
    name: "Design Skills",
    skills: [
      { name: "Industrial Design", level: 4 },
      { name: "Graphic Design", level: 4 },
      { name: "Wayfinding Systems", level: 4 },
      { name: "Project Management", level: 4 },
      { name: "Collaborative Design", level: 5 },
    ],
  },
];

const Skills: React.FC = () => {
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
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 reveal">
          My <span className="text-[#E85C33]">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={category.name} 
              className="reveal"
              style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-[#E85C33]">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level === 5 ? "Expert" : 
                         skill.level === 4 ? "Advanced" : 
                         skill.level === 3 ? "Intermediate" : 
                         skill.level === 2 ? "Basic" : "Beginner"}
                      </span>
                    </div>
                    <div className="w-full bg-[#E85C33]/10 rounded-full h-2.5">
                      <div 
                        className="h-2.5 bg-[#E85C33] rounded-full" 
                        style={{ width: `${skill.level * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
