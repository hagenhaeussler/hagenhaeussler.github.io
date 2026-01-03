import { useEffect, useRef, useState } from "react";
import berkeleyLogo from "@/assets/berkeley-logo.jpeg";
import tumLogo from "@/assets/tum-logo.png";
import parkerLogo from "@/assets/parker-logo.png";
import cantorLogo from "@/assets/cantor-logo.png";

interface EducationItemProps {
  logo: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  highlights: string[];
  delay: number;
  website: string;
}

const EducationItem = ({
  logo,
  institution,
  degree,
  period,
  location,
  highlights,
  delay,
  website,
}: EducationItemProps) => {
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
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-primary rounded-full transform origin-top transition-transform duration-500 group-hover:scale-y-105" />
      
      <div className="ml-4 sm:ml-8 p-4 sm:p-6 rounded-2xl bg-card hover:shadow-elegant transition-all duration-300">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
          <div className="flex-shrink-0">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-background border-2 border-border p-2 sm:p-3 flex items-center justify-center overflow-hidden hover:border-primary/50 transition-colors"
            >
              <img
                src={logo}
                alt={institution}
                className="w-full h-full object-contain"
              />
            </a>
          </div>

          <div className="flex-1 space-y-3 w-full min-w-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground break-words">{institution}</h3>
              <p className="text-base sm:text-lg text-primary font-medium break-words">{degree}</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {period}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {location}
              </span>
            </div>

            <ul className="space-y-2 mt-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                  <span className="text-accent mt-1 flex-shrink-0">▸</span>
                  <span className="break-words">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Education = () => {
  const educationData = [
    {
      logo: berkeleyLogo,
      institution: "University of California, Berkeley",
      degree: "International Exchange Student",
      period: "Aug 2025 – Present",
      location: "Berkeley, California, USA",
      website: "https://www.berkeley.edu/",
      highlights: [
        "CS 188: Introduction to Artificial Intelligence",
        "EECS 126: Probability and Random Processes",
        "EECS 149: Embedded and Cyber-Physical Systems",
      ],
    },
    {
      logo: tumLogo,
      institution: "Technical University of Munich (TUM)",
      degree: "B.Sc. Engineering Science",
      period: "Sep 2023 – Present",
      location: "Munich, Germany",
      website: "https://www.tum.de/en/",
      highlights: [
        "Mathematics: Linear Algebra, Single/Multivariable Calculus, ODEs, PDEs, Tensor Calculus",
        "Physics & Engineering: Mechanics, Fluid Dynamics, Thermodynamics, Heat Transfer, Electromagnetism, Control Theory",
        "Computer Science: Computer Architecture, Data Structures, Algorithms, Databases, SQL, C, Java, UML",
        "Specialized: Circuit Design, Semiconductors, Material Science, Bioengineering, CAD",
      ],
    },
    {
      logo: parkerLogo,
      institution: "Parker School Hawaii",
      degree: "High School Exchange Year",
      period: "Oct 2020 – Jun 2021",
      location: "Kailua-Kona, Hawaii, USA",
      website: "https://www.parkerschoolhawaii.org/",
      highlights: [
        "GPA: 4.0/4.14",
        "Coursework: AP Physics, Computer Science, 3D Design",
      ],
    },
    {
      logo: cantorLogo,
      institution: "Georg-Cantor-Gymnasium",
      degree: "Abitur: 1.0 (GPA 4.0)",
      period: "Sep 2014 – Jun 2023",
      location: "Halle (Saale), Germany",
      website: "https://cantorgymnasium.de/",
      highlights: [
        "8 years Class President, 2 years School President",
        "Focus: Mathematics and Natural Sciences",
      ],
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Education <span className="text-accent">&</span> Journey
          </h2>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <EducationItem
              key={index}
              {...edu}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
