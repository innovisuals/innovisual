
import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import ModelViewer from "@/components/ModelViewer";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "react-router-dom";

const LetsTalk: React.FC = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Let's Talk | INNOVISUAL";
    
    // Extract email from query parameter if present
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
    
    // Position the form below the navbar after the page loads
    const positionForm = () => {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.style.paddingTop = `${navbarHeight + (isMobile ? 16 : 32)}px`;
      }
    };
    
    positionForm();
    window.addEventListener('resize', positionForm);
    
    return () => {
      window.removeEventListener('resize', positionForm);
    };
  }, [isMobile, location.search]);

  return (
    <div className="min-h-screen bg-white">
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
        `}
      </style>
      
      <Navigation />
      
      <main className="section-container" id="lets-talk">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left column: Text and form */}
          <div className="flex flex-col">
            <div className="text-left mb-8">
              <h2 className={`font-bold mb-8 blur-fade-in visible ${isMobile ? 'text-5xl' : 'text-3xl md:text-4xl'}`}>
                LET'S TALK
              </h2>
              <p className="text-lg font-medium mb-2 blur-fade-in visible text-innovisual-muted italic" 
                 style={{ animationDelay: "100ms" }}>
                Samen innoveren.
              </p>
              
              <div>
                <p className="text-innovisual-muted mb-8 blur-fade-in visible text-lg" 
                   style={{ animationDelay: "200ms" }}>
                  3D-visualisatie verkoopt jouw gerechten, nog vóór de eerste hap.
                  Wil je weten hoe? Neem contact op en ontdek de impact van INNOVISUAL.
                </p>
              </div>
            </div>
            
            <div className="blur-fade-in visible" style={{ animationDelay: "300ms" }}>
              <ContactForm prefillEmail={email} />
            </div>
          </div>
          
          {/* Right column: 3D Model */}
          <div className="h-full min-h-[500px] flex items-center justify-center blur-fade-in visible" style={{ animationDelay: "400ms" }}>
            <ModelViewer 
              modelSrc="/lovable-uploads/c84dbb36-7427-4b20-90ab-80e6b877e7e3.png"
              alt="3D Food Visualization"
              className="w-full h-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LetsTalk;
