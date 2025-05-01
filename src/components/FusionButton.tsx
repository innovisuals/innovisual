
import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const FusionButton: React.FC<{ label: string; href: string }> = ({ label, href }) => {
  const isMobile = useIsMobile();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isMobile) {
      setIsClicked(true);
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    } else {
      window.location.href = href;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative inline-flex items-center gap-2 mt-6 px-6 py-3 font-medium rounded-2xl border-[3px] shadow-lg 
  overflow-hidden animate-subtle-pulse 
  hover:shadow-2xl focus:shadow-2xl 
  hover:bg-[#5C899D] hover:text-[#FFFCEF]
  focus:bg-[#5C899D] focus:text-[#FFFCEF]
  transition-colors transition-shadow duration-700 ease-in-out
  hover:-translate-y-1 focus:-translate-y-1
  ${isClicked ? "bg-[#5C899D] text-[#FFFCEF]" : "bg-gradient-to-b from-[#FFFCEF] to-[#F8F5E8] text-[#5C899D] border-[#5C899D]"}`}
    >
      <span
        className={`absolute inset-0 w-full h-full transform transition-transform duration-300 ease-out ${
          isClicked ? "translate-x-0" : "-translate-x-full group-hover:translate-x-0"
        } bg-[#5C899D]`}
      ></span>
      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#FFFCEF]">
        {label}
      </span>
    </button>
  );
};

export default FusionButton;
