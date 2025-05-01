
import React from "react";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
  animationDelay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  icon, 
  title, 
  description, 
  isLast = false,
  className,
  animationDelay = 0
}) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center text-center animate-fade-in p-6 rounded-lg bg-[#5C899D]",
        !isLast && "process-step",
        className
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="mb-6 text-4xl text-[#FFFCEF]">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/80 text-sm max-w-xs">{description}</p>
    </div>
  );
};

export default ProcessStep;
