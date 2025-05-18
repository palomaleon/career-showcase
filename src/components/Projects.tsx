
import React, { useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  location: string;
  year: string;
  technologies: string[];
  liveLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "CUIDADORES DE DESTINOS",
    subtitle: "SERVICE DESIGNER CONSULTANT",
    description: "Including Service Design for tourism management. Chilean organisation providing innovative educational programs around tourism management to local communities.",
    image: "/placeholder.svg",
    location: "Santiago, Chile",
    year: "2021",
    technologies: ["Service Design", "Design Thinking", "Human-Centered Design"],
    liveLink: "#",
  },
  {
    id: 2,
    title: "PARADISE CENTRE",
    subtitle: "WAYFINDING SYSTEM",
    description: "New wayfinding system for Surfers Paradise shopping centre, considering the natural navigation flow of the users and the \"surfers\" environment.",
    image: "/placeholder.svg",
    location: "Melbourne, Australia",
    year: "2020",
    technologies: ["Wayfinding", "User Journey Mapping", "Industrial Design"],
    liveLink: "#",
  },
  {
    id: 3,
    title: "DAR SOCIAL NETWORK FOR SOCIAL CAUSES",
    subtitle: "CAPSTONE PROJECT",
    description: "Including Design Strategies for the charity sector, implementing blockchain technology to provide transparency to the donation process.",
    image: "/placeholder.svg",
    location: "Melbourne, Australia",
    year: "2018",
    technologies: ["Social Innovation", "Blockchain", "Service Design"],
    liveLink: "#",
  },
  {
    id: 4,
    title: "ANATOMICS",
    subtitle: "DESIGN STRATEGIES",
    description: "Complexity-based strategic design for organisational development within small scale innovation organizations.",
    image: "/placeholder.svg",
    location: "Melbourne, Australia",
    year: "2017",
    technologies: ["Strategic Design", "Living System Approach", "Organizational Design"],
    liveLink: "#",
  },
  {
    id: 5,
    title: "AK DESIGN",
    subtitle: "CROSS CULTURAL PROJECT",
    description: "Indigenous-led social enterprise offering unique design products handmade by groups of young women from Koorie communities.",
    image: "/placeholder.svg",
    location: "Melbourne, Australia",
    year: "2017",
    technologies: ["Social Enterprise", "Cultural Design", "Brand Strategy"],
    liveLink: "#",
  },
];

const Projects: React.FC = () => {
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
    <section id="projects" className="section-padding bg-[#E85C33]/10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 reveal">
          My <span className="text-[#E85C33]">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={project.id} className="flex flex-col h-full overflow-hidden reveal border-l-4 border-[#E85C33]" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="h-48 overflow-hidden bg-[#E85C33]/5">
                <div className="flex flex-col h-full justify-center items-center p-6 text-center">
                  <span className="text-5xl font-light text-[#E85C33]/30">0{project.id}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-[#E85C33]">{project.title}</CardTitle>
                <CardDescription className="font-medium">{project.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="text-muted-foreground">{project.location}</span>
                  <span className="text-muted-foreground">{project.year}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-[#E85C33]/10 text-[#E85C33] hover:bg-[#E85C33]/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                {project.liveLink && (
                  <Button size="sm" variant="outline" className="border-[#E85C33] text-[#E85C33] hover:bg-[#E85C33]/10" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Link size={16} /> View Project
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
