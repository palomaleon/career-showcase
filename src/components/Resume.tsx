
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, Briefcase, Book } from "lucide-react";
import { useRevealAnimation } from "@/utils/animationUtils";

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
    role: "Strategy Consultant",
    company: "Accelio",
    duration: "2023 - 2025",
    description: [
      "Led Impact Sprint programs to transform research teams' capabilities in market alignment and entrepreneurial innovation",
      "Facilitated strategic workshops using FAST-TRAC methodology to help research teams validate assumptions and refine project strategies",
      "Conducted stakeholder discovery engagements with industry, government, and academia to identify systemic challenges and opportunities",
      "Developed Translation Impact Plans that consolidated insights and outlined actionable roadmaps for research translation",
      "Achieved measurable results including $1.5M savings through operational restructuring and 31% reduction in team resources while maintaining output",
    ],
  },
  {
    id: 2,
    role: "Research Strategy Consultant",
    company: "CSIRO Collaboration",
    duration: "2023 - 2025",
    description: [
      "Partnered with CSIRO's Biosecurity APAIR and Critical Minerals teams to embed market-facing practices into research processes",
      "Designed and led an eight-week national stakeholder discovery engagement involving 21 structured interviews across industry sectors",
      "Synthesized over 3500 insights into actionable findings aligned with strategic goals and learning objectives",
      "Identified 7 systemic challenges and 9 targeted interventions across infrastructure development, investment models, and innovation coordination",
      "Positioned research teams to secure new funding opportunities through evidence-based alignment with market needs",
    ],
  },
  {
    id: 3,
    role: "Workshop Facilitator",
    company: "Research & Innovation Sector",
    duration: "2022 - 2023",
    description: [
      "Facilitated experiential training sessions that equipped researchers with practical tools to assess project-market fit",
      "Led immersive workshops focused on ecosystem mapping, customer pain points identification, and assumption validation",
      "Guided teams through customer conversations and stakeholder engagement strategies to validate market opportunities",
      "Created structured frameworks for researchers to evaluate ideas through user and translation lenses",
      "Helped teams move from purely scientific thinking to commercially innovative approaches across Business Units",
    ],
  },
];

const education: Education[] = [
  {
    id: 1,
    degree: "Master's in Business Strategy",
    institution: "University Name",
    duration: "2018 - 2020",
    description: "Focused on strategic innovation, market research methodologies, and stakeholder engagement frameworks.",
  },
  {
    id: 2,
    degree: "Bachelor of Science",
    institution: "University Name",
    duration: "2014 - 2018",
    description: "Core studies in research methodologies, data analysis, and scientific communication.",
  },
];

const Resume: React.FC = () => {
  useRevealAnimation();

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
                <h4 className="text-lg font-medium mb-4">Skills & Certifications</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Strategy Activation & Research Translation</p>
                      <p className="text-sm text-muted-foreground">Impact Sprint Program facilitation, FAST-TRAC methodology</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Stakeholder Engagement & Discovery</p>
                      <p className="text-sm text-muted-foreground">Structured interview methodologies, insight synthesis</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Workshop Facilitation & Training</p>
                      <p className="text-sm text-muted-foreground">Experiential learning, ecosystem mapping, assumption validation</p>
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
