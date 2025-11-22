import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { ScrollIndicator } from "@/components/ScrollIndicator";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["hero", "education", "projects"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(sections[index]);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-background">
      <ScrollIndicator
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      
      <Hero />
      <Education />
      <Projects />

      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p className="text-sm">
          © {new Date().getFullYear()} Hagen Häußler. Built with passion and React.
        </p>
      </footer>
    </div>
  );
};

export default Index;
