import React from "react";
import { TrendingUp, Star, Rocket, Megaphone } from "lucide-react";
import BenefitCard from "@/components/BenefitCard";

interface ImpactMobileViewProps {
  isInView: boolean;
}

const ImpactMobileView: React.FC<ImpactMobileViewProps> = ({ isInView }) => {
  const benefits = [
    {
      icon: <TrendingUp />,
      title: "Resultaat",
      description: "Stimuleer de keuze en verhoog de gemiddelde besteding.",
      delay: 1700,
    },
    {
      icon: <Star />,
      title: "Wow-effect",
      description: "Maak een blijvende indruk met een unieke presentatie.",
      delay: 2200,
    },
    {
      icon: <Rocket />,
      title: "Innovatie",
      description: "Onderscheid je met visie en de nieuwste 3D-technologie.",
      delay: 2700,
    },
    {
      icon: <Megaphone />,
      title: "Marketing",
      description: "Breng specials extra onder de aandacht met overtuiging.",
      delay: 3200,
    },
  ];

  return (
    <div className="flex flex-col mt-[-30px]">
      <div className="mb-2">
        <h2 
          className={`text-3xl font-bold mb-8 text-[#5c899d] blur-fade-in text-center lg:text-left ${isInView ? 'visible' : ''}`} 
          style={{ animationDelay: '300ms' }}
        >
          IMPACT DOOR INNOVATIE
        </h2>
        
        <p 
          className={`text-2xl mt-16 text-innovisual-muted leading-relaxed blur-fade-in text-center lg:text-left ${isInView ? 'visible' : ''}`}
          style={{ animationDelay: '800ms' }}
        >
          Ontdek het effect van<br />
          't implementeren van<br />
          <span 
            className={`block text-center text-[#5C899D] drop-shadow-md font-semibold mb-8 blur-fade-in ${isInView ? 'visible' : ''}`}
            style={{ animationDelay: '1300ms' }}
          >
            3D-modellen
          </span>
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 benefit-cards-container">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`benefit-card blur-fade-in ${isInView ? 'visible' : ''}`}
            style={{ animationDelay: `${benefit.delay}ms` }}
          >
            <BenefitCard
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              className="h-full text-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactMobileView;
