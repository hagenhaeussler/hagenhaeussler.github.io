import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  tags: string[];
  delay: number;
}

const ProjectCard = ({ title, subtitle, description, tags, delay }: ProjectCardProps) => {
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
      <Card className="p-6 h-full shadow-elegant transition-all duration-300 ease-out transform-gpu hover:-translate-y-1 hover:scale-[1.01] hover:shadow-deep group">
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-primary font-medium text-sm">{subtitle}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-accent/10 text-accent">
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
      title: "Tutoring Platform for Independent Online Tutors",
      subtitle: "ENGIN 183E • UC Berkeley",
      description:
        "Developed a full-stack software solution for independent online tutors after 50+ customer interviews. Built the frontend and backend with Google Auth, Calendar integration, and OpenAI API features, and began working with beta users.",
      tags: ["Full-Stack", "Google Auth", "Calendar API", "OpenAI"],
    },
    {
      title: "BJC Teacher Tracker Rails Project",
      subtitle: "CS 169L • UC Berkeley",
      description:
        "Worked on BJC Teacher Tracker, a Ruby on Rails curriculum management system for UC Berkeley. Practiced maintainable team software through code review, automated testing, feature flags, documentation, and legacy-code integration.",
      tags: ["Ruby on Rails", "Testing", "Feature Flags", "Team Software"],
    },
    {
      title: "ASIC RISC-V & Cache Optimization Challenge",
      subtitle: "EECS 151 • UC Berkeley",
      description:
        "Designed a direct-mapped cache for a RISC-V ASIC optimization challenge, balancing area, energy, and performance. Achieved a 500% figure-of-merit increase and won among 30+ participating teams.",
      tags: ["RISC-V", "ASIC", "Cache Design", "Optimization"],
    },
    {
      title: "Sim-to-Real Validation Research",
      subtitle: "UC Berkeley • Team Research Initiative",
      description: (
        <>
          <a
            href="/Sim2Real_Research_Project_UC_Berkeley_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Investigating the sim-to-real gap in robotics through falsification-based formal verification
          </a>
          , searching for scenarios where simulation and reality diverge. Working with real robot hardware for validation.
        </>
      ),
      tags: ["Robotics", "Formal Methods", "Research", "Python"],
    },
    {
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
      title: "AI Search & Learning Algorithms",
      subtitle: "CS 188 • UC Berkeley",
      description:
        "Implemented DFS, BFS, A*, minimax with alpha-beta pruning, Q-learning, and Bayes network inference with particle filtering. Comprehensive AI fundamentals project series.",
      tags: ["AI", "Machine Learning", "Python", "Algorithms"],
    },
    {
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
