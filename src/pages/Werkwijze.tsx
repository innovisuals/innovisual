
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Werkwijze: React.FC = () => {
  useEffect(() => {
    document.title = "Werkwijze | INNOVISUAL";
  }, []);

  return (
    <div className="min-h-screen bg-[#5C899D] text-[#FFFCEF] relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#5C899D]/90 via-[#5C899D]/80 to-transparent pointer-events-none z-10" />

      <Navigation />

      <main className="section-container pt-32 relative z-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold mb-8 animate-fade-in text-center lg:text-left text-[#FFFCEF]">Onze werkwijze</h2>
          
          <p className="italic text-lg mb-12 lg:text-left">
            Laat uw gasten gerechten op een geheel nieuwe manier ontdekken. 
            Een unieke ervaring die verrast en overtuigt. 
            Wij verzorgen het volledige proces: van 3D-scan tot de interactieve presentatie.
            U hoeft enkel het gerecht klaar te zetten.
          </p>
          
<div className="w-full flex mt-6 justify-center">
  <div className="w-full max-w-4xl aspect-[55172/10000] relative -mt-8 mb-8">
    <img
      src="/werkwijze_ivory_transparent.png"
      alt="Proces van creatie tot beleving"
      className="absolute inset-0 w-full h-full hover:scale-[1.02] transition-transform animate-blur-slide-in"
      loading="lazy"
      style={{animationDuration: "2s"}}
    />
  </div>
</div>

          <div className="space-y-10 text-justify lg:text-left">
            <div>
              <h2 className="font-bold text-xl mb-2 text-left">De basis voor beleving </h2>
              <p>
              Wanneer u geïnteresseerd bent in deelname aan de pilot, plannen we een kennismakingsgesprek in. 
              Tijdens deze kennismaking nemen we het concept met u door. 
              Na akkoord, plannen wij samen met u het scanmoment in.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-xl mb-2">Van scan naar creatie</h2>
              <p>
              Tijdens het scanmoment maken wij een scan van het door u gekozen gerecht, dessert of drankje. 
              Wat we hiervoor nodig hebben, is een rustige ruimte of hoekje met voldoende licht. 
              Onze voorkeur gaat uit naar daglicht. 
              Zo zorgen we voor de beste visuele kwaliteit en een realistische weergave op tafel. 
              Ook bespreken we samen hoe de QR-code het beste gepresenteerd kan worden — volledig afgestemd op de huisstijl en uitstraling van uw restaurant.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-xl mb-2">Van gerecht naar ervaring</h2>
              <p>
              Na het scan-moment gaan wij voor u aan de slag.
              We maken het 3D-model volledig geoptimaliseerd voor mobiele weergave.
              Op basis van uw wensen ontwerpen wij een passende presentatie, inclusief een werkende QR-code.  
              Alles wordt afgestemd op uw stijl zodat de beleving moeiteloos opgaat in uw restaurant.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-xl mb-2">Live in uw restaurant</h2>
              <p>
              Zodra het 3D-model en de presentatie gereed zijn, plannen we een afspraak voor levering.
              Samen bekijken we op locatie waar en hoe de QR-presentatie het beste geplaatst kan worden.
              Na plaatsing is alles gereed om de eerste gasten de ervaring te laten ontdekken.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-xl mb-2">Inzicht in gebruik en impact</h2>
              <p>
              Tijdens de pilot meten we hoe vaak de QR-code wordt gescand, wanneer dit gebeurt en welk effect dit heeft op de omzet van uw restaurant. 
              Alle data wordt zorgvuldig verzameld en gedeeld — zodat gevoel en resultaat samen zichtbaar worden.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-xl mb-2">Afsluiten of verder groeien</h2>
              <p>
              Na afloop van de pilot bespreken we samen de inzichten.
              U bepaalt of u wilt doorgaan, uitbreiden of afronden. 
              Alles blijft vrijblijvend — tot u zelf kiest voor het vervolg.
              </p>
            </div>

            <p className="mt-14 text-lg font-semibold text-justify lg:text-left">
              Met onze werkwijze bieden we een subtiele innovatie die eenvoudig te implementeren is, maar een blijvende indruk
              achterlaat in de beleving van uw gast.
            </p>
          </div>

          <div className="mt-24">
            <Button variant="secondary" asChild className="bg-[#FFFCEF] text-[#5c899d] hover:bg-[#FFFCEF]/90">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Terug naar INNOVISUAL
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Werkwijze;
