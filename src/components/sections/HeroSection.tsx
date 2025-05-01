
import React, { RefObject, useEffect, useState } from "react";
import Triangle from "@/components/Triangle";

interface HeroSectionProps {
  targetRef: RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  targetRef
}) => {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [showTriangle, setShowTriangle] = useState(false);
  const [showNavbarAnim, setShowNavbarAnim] = useState(false);

  // Start animatie-timings na laden
  useEffect(() => {
    setIsLogoLoaded(true);
    // Triangle verschijnt 100ms na logo
    const triangleTimer = setTimeout(() => setShowTriangle(true), 1200 + 100);
    // Navbar verschijnt 1800ms na page load
    const navbarTimer = setTimeout(() => setShowNavbarAnim(true), 1800);
    return () => {
      clearTimeout(triangleTimer);
      clearTimeout(navbarTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative w-full bg-gradient-to-b from-[#5C899D] via-[#5C899D] to-[#FFFCEF] bg-[length:100%_100%]">
      <div className="w-full max-w-5xl mx-auto px-4 flex justify-center items-center">
        <div
          className={`
            w-full max-w-3xl
            transition-none
            ${isLogoLoaded ? "animate-logo-blur-fadein-up" : ""}
            -mt-6 sm:mt-0
          `}
          style={{ animationDuration: "2s" }}
          >
          <img
            src="/Logo-fffcef-1080.png"
            className="w-full h-auto object-contain"
            style={{
              opacity: isLogoLoaded ? 1 : 0,
              filter: isLogoLoaded ? undefined : "blur(4px)"
            }}
            alt="INNOVISUAL logo"
          />
        </div>
      </div>

      <div className="absolute bottom-28 z-10">
        {showTriangle && (
          <Triangle
            targetRef={targetRef}
            className="animate-bounce-triangle"
          />
        )}
      </div>
      {/* Voor navbar controlling, geef prop door aan Navigation indien nodig */}
      {/* showNavbarAnim state kan met context/provider, of direct */}
    </section>
  );
};

export default HeroSection;
