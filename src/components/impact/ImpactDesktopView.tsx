
import React from "react";
import { TrendingUp, Star, Rocket, Megaphone } from "lucide-react";
import BenefitCard from "@/components/BenefitCard";
import { cn } from "@/lib/utils";

interface ImpactDesktopViewProps {
  isInView: boolean;
}

const ImpactDesktopView: React.FC<ImpactDesktopViewProps> = ({ isInView }) => {
  const benefits = [
    {
      icon: <TrendingUp />,
      title: "Resultaat",
      description: "Stimuleer de keuze en verhoog de gemiddelde besteding.",
      delay: 2600,
    },
    {
      icon: <Star />,
      title: "Wow-effect",
      description: "Maak een blijvende indruk met een unieke presentatie.",
      delay: 1600,
    },
    {
      icon: <Rocket />,
      title: "Innovatie",
      description: "Onderscheid je met visie en de nieuwste 3D-technologie.",
      delay: 3100,
    },
    {
      icon: <Megaphone />,
      title: "Marketing",
      description: "Breng specials extra onder de aandacht met overtuiging.",
      delay: 2100,
    },
  ];

  return (
    <>
      <div 
        className={`blur-fade-in ${isInView ? 'visible' : ''}`}
        style={{ animationDelay: '200ms' }}
      >
        <div className="grid grid-cols-2 gap-4 benefit-cards-container">
          {benefits.map((card, index) => (
            <div
              key={index}
              className={`benefit-card blur-fade-in ${isInView ? 'visible' : ''} transition-all duration-300`}
              style={{ animationDelay: `${card.delay}ms` }}
            >
              <BenefitCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-start items-start mt-[-60px]">
        <div> 
          <h2 
            className={`text-3xl font-bold mb-8 md:text-4xl text-[#5c899d] blur-fade-in ${isInView ? 'visible' : ''}`}
            style={{ animationDelay: '300ms' }}
          >
            IMPACT DOOR INNOVATIE
          </h2>
          
          <p 
            className={`text-3xl mt-16 text-innovisual-muted leading-relaxed blur-fade-in ${isInView ? 'visible' : ''}`}
            style={{ animationDelay: '800ms' }}
          >
            Ontdek het effect van<br />
           't implementeren van<br />
            <span 
              className={`block text-center text-[#5C899D] drop-shadow-md font-semibold blur-fade-in animate-slide-accent ${isInView ? 'visible' : ''}`}
              style={{ animationDelay: '1300ms' }}
            >
              3D-modellen
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ImpactDesktopView;

