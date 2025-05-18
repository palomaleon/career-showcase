
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-[#E85C33]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 reveal text-white">
          Get In <span className="text-white/80">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:order-2 reveal" style={{ transitionDelay: '0.3s' }}>
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <Card className="bg-white/10 border-none text-white">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">paloma.leonravest@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-none text-white">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-white/80">+61 402 184 505</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-none text-white">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-white/80">Melbourne, Australia</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 reveal text-white" style={{ transitionDelay: '0.5s' }}>
              <h4 className="text-lg font-medium mb-3">Availability</h4>
              <p className="text-white/80 mb-4">
                I'm currently <span className="text-white font-medium">available</span> for strategic design consultancy, workshop facilitation, and design strategy development. If you're interested in working together, please get in touch!
              </p>
              <p className="text-sm text-white/70">
                I typically respond to messages within 24-48 hours.
              </p>
            </div>
          </div>
          
          <div className="lg:order-1 reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                />
              </div>
              
              <Button type="submit" className="w-full bg-white text-[#E85C33] hover:bg-white/90" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
