
import React, { useRef, useState, useEffect } from "react";
import RotatingCube from "@/components/RotatingCube";
import { useIsMobile } from "@/hooks/use-mobile";

const IntroSection: React.FC = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const introTextRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsIntroVisible(true);
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.2
    });

    if (introTextRef.current) {
      observer.observe(introTextRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full bg-[#FFFCEF] flex flex-col justify-between items-center relative py-[75px]">
      <div ref={introTextRef} className="relative w-full bg-[#5C899D] self-end py-0 rounded-none">
        <div className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-[#FFFCEF] to-[#5C899D]"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className={`text-3xl text-[#FFFCEF] inline-flex items-center font-bold md:text-3xl transform transition-all duration-1000 ${
            isIntroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}>
            <span className="text-2xl sm:text-3xl">
              {isMobile ? (
                <div className="flex flex-col">
                  <span>SUBTIELE INNOVATIE.</span>
                  <span>KRACHTIGE INDRUK.</span>
                </div>
              ) : (
                "SUBTIELE INNOVATIE. KRACHTIGE INDRUK."
              )}
            </span>
            <span className="hidden md:inline">
              <RotatingCube size={100} color="#FFFCEF" speed={0.007} className="ml-2" variant="skeleton" />
            </span>
          </h2>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#FFFCEF] to-[#5C899D]"></div>
      </div>
    </section>
  );
};

export default IntroSection;
