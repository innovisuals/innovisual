
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useInView } from "@/hooks/useInView";
import FusionButton from "@/components/FusionButton";

const VanCreatieSection: React.FC<{
  forwardedRef: React.RefObject<HTMLDivElement>;
}> = ({
  forwardedRef
}) => {
  const isMobile = useIsMobile();
  const [sectionRef, inView] = useInView<HTMLElement>({}, true);

  return (
    <section 
      ref={(node) => {
        if (node) {
          sectionRef(node);
          if (forwardedRef && forwardedRef.current !== node) {
            Object.defineProperty(forwardedRef, 'current', {
              value: node,
              configurable: true
            });
          }
        }
      }}
      className="w-full relative overflow-hidden bg-gradient-to-b from-[#FFFCEF] via-[#FFFCEF]/95 to-[#FFFCEF]" 
      id="van-creatie-tot-beleving"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFFCEF]/30 to-[#FFFCEF]/60 backdrop-blur-[2px]" />
      
      <div className={`px-4 ${isMobile ? 'py-12' : 'py-24'} max-w-7xl mx-auto relative z-10`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {isMobile ? (
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col">
                <h2
                  className={`
                    text-3xl font-bold mb-8 text-[#5c899d]
                    blur-fade-in ${inView ? 'visible' : ''} text-center lg:text-left
                  `}
                >
                  VAN CREATIE TOT BELEVING
                </h2>
                <div className="space-y-6">
                  <div
                    className={`blur-fade-in ${inView ? 'visible' : ''}`}
                    style={{ animationDelay: "200ms" }}
                  >
                    <p className="text-2xl mb-4 mt-8 text-innovisual-muted leading-relaxed text-center lg:text-left">
                      Inspireren, precies op<br />
                      het juiste moment.
                    </p>
                    <div className="text-lg font-bold tracking-wide text-innovisual-muted leading-relaxed mb-12 flex justify-center lg:justify-start">
                      <FusionButton label="ONZE WERKWIJZE" href="/werkwijze" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative min-h-[640px] mt-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#FFFCEF] rounded-xl" />
                <div
                  className={`blur-fade-in ${inView ? 'visible' : ''}`}
                  style={{ animationDelay: "400ms" }}
                >
                  <div className="w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <video 
                      src="/mockup-website.mp4" 
                      className="w-full h-auto" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col justify-start">
                <h2
                  className={`
                    text-4xl font-bold mb-8 text-[#5c899d] md:text-4xl
                    blur-fade-in ${inView ? 'visible' : ''}
                  `}
                >
                  VAN CREATIE TOT BELEVING
                </h2>
                <div className="space-y-4">
                  <div
                    className={`blur-fade-in ${inView ? 'visible' : ''}`}
                    style={{ animationDelay: "200ms" }}
                  >
                    <p className="text-3xl mt-6 mb-3 text-innovisual-muted leading-relaxed">
                      Inspireren, precies op <br />
                      het juiste moment.
                    </p>
                    <div className="mt-6 text-2xl font-bold tracking-wide text-innovisual-muted leading-relaxed">
                      <FusionButton label="ONZE WERKWIJZE" href="/werkwijze" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[640px] order-first lg:order-last flex items-center justify-center mt-12">
                <div className="absolute inset-0 bg-[#FFFCEF] rounded-xl" />
                <div
                  className={`blur-fade-in ${inView ? 'visible' : ''}`}
                  style={{ animationDelay: "400ms" }}
                >
                  <div className="w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <video 
                      src="/mockup-website.mp4" 
                      className="w-full h-auto" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default VanCreatieSection;
