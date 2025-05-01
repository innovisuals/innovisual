
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useInView } from "@/hooks/useInView";
import ImpactDesktopView from "@/components/impact/ImpactDesktopView";
import ImpactMobileView from "@/components/impact/ImpactMobileView";

interface ImpactSectionProps {
  forwardedRef: React.RefObject<HTMLDivElement>;
}

const ImpactSection: React.FC<ImpactSectionProps> = ({ forwardedRef }) => {
  const isMobile = useIsMobile();
  const [inViewRef, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const setRefs = (node: HTMLDivElement | null) => {
    if (forwardedRef) {
      // @ts-ignore - This is fine, we're handling the ref properly
      forwardedRef.current = node;
    }
    // @ts-ignore - This is fine, we're handling the ref properly
    inViewRef(node);
  };

  return (
    <section ref={setRefs} className="w-full bg-[#FFFCEF] relative" id="impact-door-innovatie">
      <style>
        {`
          @keyframes blurFadeIn {
            0% {
              opacity: 0;
              filter: blur(10px);
              transform: translateY(20px);
            }
            80% {
              opacity: 0.8;
              filter: blur(2px);
              transform: translateY(5px);
            }
            100% {
              opacity: 1;
              filter: blur(0);
              transform: translateY(0);
            }
          }

          .blur-fade-in {
            opacity: 0;
            filter: blur(10px);
            transform: translateY(20px);
          }
          
          .blur-fade-in.visible {
            animation-name: blurFadeIn;
            animation-duration: 1200ms;
            animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
            animation-fill-mode: forwards;
            animation-play-state: running;
          }
          
          /* Desktop-only hover effects for benefit cards */
          @media (min-width: 1024px) {
            .benefit-cards-container .benefit-card:hover {
              opacity: 1;
              filter: blur(0);
              transform: scale(1.03);
              z-index: 10;
            }

            .benefit-cards-container:hover .benefit-card:not(:hover) {
              opacity: 0.6;
              filter: blur(2px);
              transform: scale(0.98);
            }
          }
        `}
      </style>

      <div className={`px-4 ${isMobile ? 'py-[75px]' : 'py-[125px]'} max-w-7xl mx-auto`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {isMobile ? (
            <ImpactMobileView isInView={isInView} />
          ) : (
            <ImpactDesktopView isInView={isInView} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

