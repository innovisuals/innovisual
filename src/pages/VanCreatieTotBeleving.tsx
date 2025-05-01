
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";

const VanCreatieTotBeleving: React.FC = () => {
  useEffect(() => {
    document.title = "Van Creatie tot Beleving | INNOVISUAL";
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFCEF] relative">
      {/* Subtielere gradient overlay aan de bovenkant */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-10"></div>
      
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
      
      <main className="section-container items-center pt-32 relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in text-left text-[#5c899d]">Van Creatie tot Beleving</h2>
            
            <div className="space-y-4">
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <p className="text-xl font-medium mb-2">Breng gerechten tot leven met INNOVISUAL.</p>
                <p className="text-innovisual-muted mb-4">
                  Laat gasten gerechten beleven zoals nooit tevoren met hoogwaardige 3D-visualisaties 
                  die impact maken en conversie verhogen.
                </p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <p className="text-innovisual-muted mb-4">
                  Wij verzorgen het volledige proces: van 3D-scans tot de interactieve presentatie. 
                  U hoeft enkel het gerecht klaar te zetten.
                </p>
              </div>
              
              <div className="animate-fade-in mt-2" style={{ animationDelay: "300ms" }}>
                <div>
                  <img 
                    src="/lovable-uploads/4c4fab12-48a0-4746-ae35-b47d044f927e.png" 
                    alt="INNOVISUAL 3D visualization process" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in order-first lg:order-last flex items-center" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg">
                <video 
                  src="/mockup_test.mp4"
                  poster="/lovable-uploads/c84dbb36-7427-4b20-90ab-80e6b877e7e3.png"
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
      </main>
    </div>
  );
};

export default VanCreatieTotBeleving;
