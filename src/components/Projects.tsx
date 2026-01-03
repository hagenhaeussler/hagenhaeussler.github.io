import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Cpu, Rocket, Code } from "lucide-react";

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  tags: string[];
  delay: number;
}

const ProjectCard = ({ icon, title, subtitle, description, tags, delay }: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Card className="p-6 h-full hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/20 group">
        <div className="space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground dark:text-primary-foreground group-hover:scale-110 transition-transform duration-300 [&>svg]:stroke-foreground [&>svg]:dark:stroke-primary-foreground">
            {icon}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-primary font-medium text-sm">{subtitle}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export const Projects = () => {
  const projects = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Sim-to-Real Validation Research",
      subtitle: "UC Berkeley • Team Research Initiative",
      description: (
        <>
          Investigating the{" "}
          <a
            href="/Sim2Real_Research_Project_UC_Berkeley_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            sim-to-real gap in robotics
          </a>{" "}
          through falsification-based formal verification, searching for scenarios where simulation and reality diverge. Working with real robot hardware for validation.
        </>
      ),
      tags: ["Robotics", "Formal Methods", "Research", "Python"],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Embedded Cyber-Physical Systems",
      subtitle: "EECS 149 • UC Berkeley",
      description: (
        <>
          Designing{" "}
          <a
            href="https://www.lf-lang.org/embedded-lab/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            embedded systems using Lingua Franca with C
          </a>{" "}
          for timing and concurrency modeling. Implementing low-level software interfacing with sensors on Pololu 3pi+ 2040 robot.
        </>
      ),
      tags: ["Embedded Systems", "C", "Robotics", "Real-Time"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Search & Learning Algorithms",
      subtitle: "CS 188 • UC Berkeley",
      description:
        "Implemented DFS, BFS, A*, minimax with alpha-beta pruning, Q-learning, and Bayes network inference with particle filtering. Comprehensive AI fundamentals project series.",
      tags: ["AI", "Machine Learning", "Python", "Algorithms"],
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Hardware Engineering Projects",
      subtitle: "Independent Work",
      description:
        "Solar-powered climate control device, ballistic optimization trebuchet, and chemical propulsion rocket. Hands-on engineering across multiple disciplines.",
      tags: ["Hardware", "Physics", "Design", "Prototyping"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Projects <span className="text-accent">&</span> Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of AI, robotics, and embedded systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};
