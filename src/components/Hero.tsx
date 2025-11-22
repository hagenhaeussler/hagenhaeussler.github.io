import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import { Mail, Linkedin, FileText, Moon, Sun, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              Hagen{" "}
              <span className="text-xl lg:text-2xl">
                Haeussler
              </span>
            </h1>
            
            <div className="space-y-2 mt-4">
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm an Engineering Science student at the Technical University of Munich, currently on a specialization year at UC Berkeley sponsored by{" "}
              <a
                href="https://www.studienstiftung.de/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Studienstiftung des deutschen Volkes
              </a>
              . I'm passionate about intelligent cyber-physical systems, bridging AI with real-world robotics and autonomous systems.
            </p>

            <p className="text-lg text-muted-foreground">
              In my free time, I enjoy{" "}
              <a
                href="https://www.judoclub-halle.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                judo
              </a>
              , volleyball, reading, and exploring fascinating new technologies.
            </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
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

              <a
                href="mailto:hagen.haeussler@gmx.de"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/hagen-häußler-6bb293289"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/hagenhaeussler"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors ml-2"
                aria-label="Toggle theme"
              >
                {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
              </button>
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
