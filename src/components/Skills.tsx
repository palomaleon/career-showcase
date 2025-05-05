
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
    name: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "React", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "Tailwind CSS", level: 4 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "REST APIs", level: 4 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 5 },
      { name: "CI/CD", level: 3 },
      { name: "Docker", level: 3 },
      { name: "Testing", level: 3 },
      { name: "Agile/Scrum", level: 4 },
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
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={category.name} 
              className="reveal"
              style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
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
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div 
                        className="h-2.5 bg-primary rounded-full" 
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
