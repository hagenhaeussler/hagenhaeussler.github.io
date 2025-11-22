import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Engineering Science Student
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Hagen Kuno
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Häußler
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm an Engineering Science student at the Technical University of Munich, currently on exchange at UC Berkeley. 
              I'm passionate about intelligent cyber-physical systems, bridging AI with real-world robotics and autonomous systems.
            </p>

            <p className="text-lg text-muted-foreground">
              In my free time, I enjoy judo, volleyball, reading, and exploring fascinating new technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                asChild
              >
                <a href="/Hagen_Haeussler_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  View My CV
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-accent/10"
                asChild
              >
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="mailto:hagen.haeussler@gmx.de"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/hagen-häußler-6bb293289"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20 animate-pulse" />
              <img
                src={profileImage}
                alt="Hagen Häußler"
                className="relative rounded-3xl shadow-elegant w-full max-w-md object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
