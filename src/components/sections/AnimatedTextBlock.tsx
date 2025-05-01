import React, { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import { useIsMobile } from "@/hooks/use-mobile";

const words = ["PURE EENVOUD.", "VISUELE BELEVING.", "BLIJVENDE INDRUK.", "KRACHTIGE IMPACT.", "SUBTIELE INNOVATIE."];

const AnimatedTextBlock: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.8 }, true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="w-full bg-[#fffcef] py-[75px]">
      <div className="max-w-4xl mx-auto px-4 text-center text-2xl">
        {isMobile ? (
          <div className="flex flex-col items-center text-2xl font-bold">
            <div 
              className={`transition-all duration-1000 transform mb-3 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-8'
              }`}
            >
              INNOVISUAL STAAT VOOR
            </div>

            <div className="relative w-full h-[2.5rem] overflow-hidden text-center">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`absolute left-0 right-0 flex items-center justify-center transition-all duration-700 transform text-[#5c899d] font-bold ${
                    index === currentIndex && inView
                      ? 'opacity-100 translate-y-0 blur-none'
                      : 'opacity-0 translate-y-8 blur-md pointer-events-none'
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center text-2xl sm:text-3xl font-semibold whitespace-nowrap">
            <div 
              className={`shrink-0 mr-3 transition-all duration-1000 transform ${
                inView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-full'
              }`}
            >
              INNOVISUAL STAAT VOOR
            </div>

            <div className="relative w-[320px] h-[2.5rem] sm:h-[2.75rem] overflow-hidden">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`absolute inset-0 flex items-center justify-start transition-all duration-700 transform text-[#5c899d] font-bold ${
                    index === currentIndex && inView
                      ? 'opacity-100 translate-x-0 blur-none'
                      : 'opacity-0 translate-x-8 blur-md pointer-events-none'
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnimatedTextBlock;
