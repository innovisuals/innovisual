
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const OverOns: React.FC = () => {
  useEffect(() => {
    document.title = "Over Ons | INNOVISUAL";
  }, []);

  return (
    <div className="min-h-screen bg-[#5c899d] relative">
      {/* Subtiele gradient overlay aan de bovenkant */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#5c899d]/90 via-[#5c899d]/80 to-transparent pointer-events-none z-10"></div>
      
      <Navigation />
      
      <main className="section-container pt-32 relative z-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold mb-8 animate-fade-in text-center lg:text-left text-[#FFFCEF]">Over INNOVISUAL</h2>
          
          <div className="space-y-6 text-[#FFFCEF]/90 text-lg leading-relaxed text-center lg:text-left">
            <h2 className="font-bold text-xl mb-4 text-center lg:text-left">
              SUBTIELE INNOVATIE. <span className="block md:inline">KRACHTIGE INDRUK.</span>
            </h2>
<div className="h-2"/>
            <div className="mb-3 text-justify lg:text-left">
              <p> INNOVISUAL is ontstaan uit een gevoel: <br className="hidden md:block" />
              het moment waarop visuele presentatie zó krachtig is, dat verdere uitleg overbodig wordt.</p>
            </div>

            <div className="mb-3 text-justify lg:text-left">
              <p> Niet wanneer de keuze al gemaakt is,</p> 
              <p> niet wanneer er nog volledig rationeel wordt afgewogen, </p>
              <p> maar in die tussenruimte van indruk en beslissing – waar beeld, esthetiek en eenvoud de doorslag geven.</p>
            </div>

            <div className="mb-3 text-justify lg:text-left">
              <p> Dat exacte moment vormt de essentie van ons werk. <br className="hidden md:block" />
              Het bepaalt hoe wij denken, ontwikkelen en presenteren. <br className="hidden md:block" />
              We maken beleving zichtbaar – gericht op keuzes, afgestemd op uw stijl.</p>
            </div>
            
            <div className="h-4" />
            <blockquote className="italic border-l-4 border-[#FFFCEF]/40 pl-4 text-[#F9F6EF]/80">
              “Without visualisation, a choice remains just a thought.”
              <br />
              <span className="text-sm not-italic text-[#FFFCEF]/60">— Dr Ben Shneiderman</span>
            </blockquote>
            <div className="h-4" />
            
            <p className="font-bold mb-2 text-justify lg:text-left">
              INNOVISUAL combineert vormgeving, techniek en timing – om visuele keuzes vanzelfsprekend te maken.
              Innovatief, verfijnd en met blijvende impact.
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

export default OverOns;
