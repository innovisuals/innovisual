
import React from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  animationDelay?: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ 
  icon, 
  title, 
  description, 
  className,
  animationDelay = 0 
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className={cn(
        "benefit-card relative flex flex-col items-start text-left p-6 pb-12 rounded-lg bg-[#5C899D] transition-all duration-500",
        !isMobile && "hover:z-10",
        className
      )}
      style={{ 
        animationDelay: `${animationDelay}ms`,
      }}
    >
      <div className={cn(
        "mb-6 text-4xl text-[#FFFCEF] transition-transform duration-500 animate-float-icon",
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-[#FFFCEF] transition-transform duration-500">
        {title}
      </h3>
      <p className="text-[#FFFCEF] text-sm max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
