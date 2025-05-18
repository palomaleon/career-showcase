
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, Briefcase, Book } from "lucide-react";
import { useRevealAnimation } from "@/utils/animationUtils";

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Service Design Consultant",
    company: "Cuidadores de Destinos",
    location: "Santiago, Chile",
    duration: "2021",
    description: [
      "Implemented Design Thinking and Human-Centered Design tools to promote sustainable organizational changes",
      "Analyzed the organization using marketing research, social media engagement, and team member interviews",
      "Facilitated online workshops where the team could co-create new purpose, values, and mission statements",
      "Incorporated tools such as scenarios, personas, and journey maps during collaborative sessions",
      "Collaborated with the head team to review educational programs, incorporating Journey Mapping and Backcasting activities",
      "Tailored versions of programs to increase participation and interest from local communities",
    ],
  },
  {
    id: 2,
    role: "Wayfinding System Designer",
    company: "Paradise Centre",
    location: "Melbourne, Australia",
    duration: "2020",
    description: [
      "Created a new wayfinding system for a shopping center in Surfers Paradise, considering user navigation patterns",
      "Generated User Journey Maps to understand shopping experiences and preferences",
      "Led design and development stages, delivering documentation for manufacture and installation of signage",
      "Aligned design elements with strategic goals while building relationships with team and stakeholders",
      "Worked across functionality as part of the industrial design team",
      "Managed project communications between design team and clients",
    ],
  },
  {
    id: 3,
    role: "Design Strategist",
    company: "Anatomics",
    location: "Melbourne, Australia",
    duration: "2017",
    description: [
      "Implemented a Living System approach to study and analyze the internal context of a medical device company",
      "Conducted employee interviews, facilitated design sessions, and performed market research",
      "Evaluated the company's position and proposed a comprehensive design strategy",
      "Invited diverse stakeholders to rewrite the mission and vision, making it inclusive and innovation-aligned",
      "Proposed creating an internal multidisciplinary team for transformation oversight",
      "Ensured stakeholder representation and established communication channels across hierarchical levels",
    ],
  },
];

const education: Education[] = [
  {
    id: 1,
    degree: "Master of Design",
    institution: "RMIT University",
    location: "Melbourne, Australia",
    duration: "2017 - 2019",
    description: "Focused on strategic design, system thinking, and human-centered methodologies for complex problem solving.",
  },
  {
    id: 2,
    degree: "Bachelor of Industrial Design",
    institution: "Universidad de Chile",
    location: "Santiago, Chile",
    duration: "2010 - 2015",
    description: "Core studies in product development, design methodology, and service design.",
  },
];

const Resume: React.FC = () => {
  useRevealAnimation();

  return (
    <section id="resume" className="section-padding bg-[#E85C33]/10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 reveal">
          My <span className="text-[#E85C33]">Resume</span>
        </h2>
        <div className="flex justify-center mb-12 reveal">
          <Button size="lg" className="gap-2 bg-[#E85C33] hover:bg-[#E85C33]/90">
            <Download size={16} />
            Download CV
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E85C33]/10 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-[#E85C33]" />
              </div>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>

            {experiences.map((exp, index) => (
              <Card key={exp.id} className="relative border-l-4 border-[#E85C33] reveal" style={{ transitionDelay: `${0.1 + index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-[#E85C33]"></div>
                  <h4 className="text-lg font-medium">{exp.role}</h4>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#E85C33] font-medium">{exp.company}</p>
                    <span className="text-sm text-muted-foreground bg-[#E85C33]/10 rounded-full px-3 py-1">
                      {exp.duration} • {exp.location}
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
              <div className="bg-[#E85C33]/10 p-3 rounded-full">
                <Book className="h-6 w-6 text-[#E85C33]" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            {education.map((edu, index) => (
              <Card key={edu.id} className="relative border-l-4 border-[#E85C33] reveal" style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-[#E85C33]"></div>
                  <h4 className="text-lg font-medium">{edu.degree}</h4>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[#E85C33] font-medium">{edu.institution}</p>
                    <span className="text-sm text-muted-foreground bg-[#E85C33]/10 rounded-full px-3 py-1">
                      {edu.duration} • {edu.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}

            <Card className="mt-8 reveal" style={{ transitionDelay: '0.5s' }}>
              <CardContent className="pt-6">
                <h4 className="text-lg font-medium mb-4 text-[#E85C33]">Design Methods & Tools</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-[#E85C33] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Workshop Facilitation</p>
                      <p className="text-sm text-muted-foreground">Experience in leading collaborative design sessions, both in-person and online</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-[#E85C33] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Human-Centered Design Research</p>
                      <p className="text-sm text-muted-foreground">User journey mapping, personas, scenarios, and stakeholder interviews</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-[#E85C33] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Strategic Design Approaches</p>
                      <p className="text-sm text-muted-foreground">Systems thinking, complexity-based design, organizational development</p>
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
