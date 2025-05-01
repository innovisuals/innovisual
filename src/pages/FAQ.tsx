import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

const FAQ: React.FC = () => {
  useEffect(() => {
    document.title = "FAQ | INNOVISUAL";
  }, []);

  const faqItems = [
    {
      question: "Wat kost het?",
      answer: "Tijdens de pilot niets. De deelname is kosteloos en zonder verplichtingen. We verzamelen vooral feedback en laten het concept in de praktijk werken.",
    },
    {
      question: "Wat gebeurt er na de pilot?",
      answer: "We bespreken samen wat het heeft opgeleverd en of het voor u interessant is om door te gaan. U zit nergens aan vast — het is vrijblijvend.",
    },
    {
      question: "Werkt het altijd/bij iedereen?",
      answer: "Het werkt op de meeste smartphones zonder app of installatie. iPhones vanaf iOS 13 en recente Androids openen het direct. Bij twijfel testen we het vooraf samen.",
    },
    {
      question: "Wat levert het mij op?",
      answer: "U maakt gerechten visueel zichtbaar vóór de keuze — dit verhoogt beleving én stimuleert de verkoop van specials of signatuurgerechten.",
    },
    {
      question: "Is het niet te ingewikkeld voor gasten?",
      answer: "Juist niet. Eén scan, en het gerecht verschijnt op tafel. Geen menu's, geen knoppen — het werkt intuïtief en spreekt voor zich.",
    },
    {
      question: "Waar komt de QR-code?",
      answer: "Wij leveren een op maat gemaakte tafelkaart of display. U hoeft daar niets voor te regelen.",
    },
    {
      question: "Kan ik zelf kiezen welk gerecht gescand wordt?",
      answer: "Zeker. Samen bepalen we welk gerecht of item het meest geschikt is — denk aan een special, dessert of signatuurcreatie.",
    },
    {
      question: "Hoe lang duurt het?",
      answer: "De pilot loopt ongeveer een maand. Dat is genoeg om reacties te zien en statistieken te verzamelen.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#5c899d] text-[#FFFCEF] relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#5c899d]/90 via-[#5c899d]/80 to-transparent pointer-events-none z-10" />
      <Navigation />

      <main className="section-container pt-32 relative z-0">
        <div className="w-full max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in text-center lg:text-left">
            Veelgestelde vragen
          </h2>

          <div className="divide-y divide-[#FFFCEF]/30 text-[#FFFCEF]/90 text-lg leading-relaxed">
            {faqItems.map((item, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center text-left min-h-[56px]"
                >
                  <span className="font-medium">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#FFFCEF]" size={20} />
                  ) : (
                    <ChevronDown className="text-[#FFFCEF]" size={20} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="mt-3 text-[#FFFCEF]/90">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-24">
            <Button
              variant="secondary"
              asChild
              className="bg-[#FFFCEF] text-[#5c899d] hover:bg-[#FFFCEF]/90"
            >
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

export default FAQ;
