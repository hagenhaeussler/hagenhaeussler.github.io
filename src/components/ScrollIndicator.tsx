import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  sections: string[];
  activeSection: number;
  onSectionClick: (index: number) => void;
}

export const ScrollIndicator = ({ sections, activeSection, onSectionClick }: ScrollIndicatorProps) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {sections.map((_, index) => (
        <button
          key={index}
          onClick={() => onSectionClick(index)}
          className={cn(
            "round-control w-3 h-3 transition-all duration-300",
            activeSection === index
              ? "bg-primary scale-125"
              : "bg-muted-foreground/40 hover:bg-primary hover:scale-110"
          )}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
};
