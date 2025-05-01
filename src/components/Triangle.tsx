
import React, { RefObject } from "react";

interface TriangleProps {
  targetRef: RefObject<HTMLDivElement>;
  className?: string;
}

const Triangle: React.FC<TriangleProps> = ({ targetRef, className }) => {
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <button 
      onClick={scrollToTarget}
      className={`
        block w-[30px] h-[25px] mx-auto cursor-pointer
        transition-transform
        focus:outline-none
        ${className ? className : ""}
        group
      `}
      aria-label="Scroll down"
      // delay is geregeld via HeroSection, dus niet meer met style.animationDelay!
    >
      {/* De driehoek zelf */}
      <div className="
         w-0 h-0 border-l-[15px] border-l-transparent 
  border-r-[15px] border-r-transparent 
  border-t-[25px] border-t-[#FFFCEF]
  transition-transform
  group-hover:scale-[1.2]
      " />
    </button>
  );
};

export default Triangle;
