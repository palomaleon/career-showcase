
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/70 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">Your Name</h3>
          
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full text-primary hover:text-white hover:bg-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full text-primary hover:text-white hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:youremail@example.com" 
              className="bg-white p-2 rounded-full text-primary hover:text-white hover:bg-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <li><a href="#about" className="text-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#resume" className="text-foreground hover:text-primary transition-colors">Resume</a></li>
              <li><a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
