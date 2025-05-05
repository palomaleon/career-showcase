
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, Briefcase, Book } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Company XYZ",
    duration: "2022 - Present",
    description: [
      "Developed and maintained multiple React-based web applications",
      "Implemented responsive designs and improved application performance by 40%",
      "Collaborated with UX designers to create intuitive user interfaces",
      "Mentored junior developers and led code reviews",
    ],
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Digital Agency ABC",
    duration: "2020 - 2022",
    description: [
      "Built responsive websites for various clients using modern web technologies",
      "Implemented e-commerce solutions with payment gateway integrations",
      "Created custom WordPress themes and plugins",
      "Worked closely with clients to ensure project requirements were met",
    ],
  },
  {
    id: 3,
    role: "Frontend Intern",
    company: "Startup Inc.",
    duration: "2019 - 2020",
    description: [
      "Assisted in developing UI components using HTML, CSS, and JavaScript",
      "Participated in team code reviews and implemented feedback",
      "Gained experience with version control and collaborative development",
      "Learned best practices for web accessibility and performance optimization",
    ],
  },
];

const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    duration: "2015 - 2019",
    description: "Focused on software engineering, web development, and database systems.",
  },
  {
    id: 2,
    degree: "Web Development Bootcamp",
    institution: "Coding Academy",
    duration: "2019",
    description: "Intensive 12-week program covering full-stack web development.",
  },
];

const Resume: React.FC = () => {
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
    <section id="resume" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 reveal">
          My <span className="text-primary">Resume</span>
        </h2>
        <div className="flex justify-center mb-12 reveal">
          <Button size="lg" className="gap-2">
            <Download size={16} />
            Download CV
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>

            {experiences.map((exp, index) => (
              <Card key={exp.id} className="relative border-l-4 border-primary reveal" style={{ transitionDelay: `${0.1 + index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary"></div>
                  <h4 className="text-lg font-medium">{exp.role}</h4>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-primary font-medium">{exp.company}</p>
                    <span className="text-sm text-muted-foreground bg-secondary rounded-full px-3 py-1">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6 reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            {education.map((edu, index) => (
              <Card key={edu.id} className="relative border-l-4 border-primary reveal" style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary"></div>
                  <h4 className="text-lg font-medium">{edu.degree}</h4>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <span className="text-sm text-muted-foreground bg-secondary rounded-full px-3 py-1">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}

            <Card className="mt-8 reveal" style={{ transitionDelay: '0.5s' }}>
              <CardContent className="pt-6">
                <h4 className="text-lg font-medium mb-4">Certifications</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Web Development Certification</p>
                      <p className="text-sm text-muted-foreground">Issued by: Certification Provider, 2021</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Advanced JavaScript Masterclass</p>
                      <p className="text-sm text-muted-foreground">Issued by: JavaScript Academy, 2020</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
