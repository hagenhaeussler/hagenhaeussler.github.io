import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, MapPin, FileText, Github } from "lucide-react";
import { useEffect, useState } from "react";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("contact");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hagen.haeussler@gmx.de",
      href: "mailto:hagen.haeussler@gmx.de",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/hagen-häußler-6bb293289",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/hagenhaeussler",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Berkeley, CA / Munich, DE",
      href: null,
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-4xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-accent bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat about technology and engineering.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-4 gap-6 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/20"
            >
              {method.href ? (
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                    {method.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{method.label}</p>
                    <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                    {method.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{method.label}</p>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="p-8 bg-gradient-primary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="mb-6 opacity-90">
              Check out my CV or reach out directly. I'm looking forward to hearing from you!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a href="/Hagen_Haeussler_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="mailto:hagen.haeussler@gmx.de">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
