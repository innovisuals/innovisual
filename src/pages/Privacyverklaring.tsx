
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacyverklaring: React.FC = () => {
  useEffect(() => {
    document.title = "Privacyverklaring | INNOVISUAL";
  }, []);

  return (
    <div className="min-h-screen bg-[#5c899d] relative">
      {/* Subtiele gradient overlay aan de bovenkant */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#5c899d]/90 via-[#5c899d]/80 to-transparent pointer-events-none z-10"></div>
      
      <Navigation />
      
      <main className="section-container pt-32 relative z-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in text-left text-[#F9F6EF]">Privacyverklaring</h2>
          
          <div className="prose prose-lg max-w-none prose-invert">
            {/* Inhoud komt later */}
            <p className="text-[#F9F6EF]/80">Inhoud volgt binnenkort...</p>
          </div>
          
          <div className="mt-12">
            <Button variant="secondary" asChild className="bg-[#F9F6EF] text-[#5c899d] hover:bg-[#F9F6EF]/90">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Terug naar home
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacyverklaring;
