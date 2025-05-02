
import React, { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import VanCreatieSection from "@/components/sections/VanCreatieSection";
import AnimatedTextBlock from "@/components/sections/AnimatedTextBlock";
import ImpactSection from "@/components/sections/ImpactSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollingTextBar from "@/components/sections/ScrollingTextBar";
import { useLocation } from "react-router-dom";

const Index: React.FC = () => {
  const vanCreatieRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Titel instellen
  useEffect(() => {
    document.title = "INNOVISUAL";
  }, []);
useEffect(() => {
  const hash = location.hash;
  if (!hash) return;

  const el = document.getElementById(hash.replace("#", ""));
  if (el) {
    const navHeight = document.querySelector("nav")?.offsetHeight || 80;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight + 80;
console.log("📍 Scroll triggered to", hash.replace("#", ""), "at Y:", y);
console.log("📍 Element gevonden:", el);
console.log("📍 getBoundingClientRect().top:", el.getBoundingClientRect().top);
console.log("📍 pageYOffset:", window.pageYOffset);
console.log("📍 Berekening:", el.getBoundingClientRect().top + window.pageYOffset);
console.log("📍 window.innerHeight:", window.innerHeight);
console.log("📍 document.body.scrollHeight:", document.body.scrollHeight);


    window.scrollTo({ top: y, behavior: "smooth" });
  }
}, [location.hash]);


  return (
    <div className="min-h-screen bg-white w-full">
      <Navigation
        vanCreatieRef={vanCreatieRef}
        impactRef={impactRef}
        contactRef={contactRef}
      />

      <HeroSection targetRef={vanCreatieRef} />
      <VanCreatieSection forwardedRef={vanCreatieRef} />
      <IntroSection />
      <ImpactSection forwardedRef={impactRef} />
      <AnimatedTextBlock />
      <ContactSection forwardedRef={contactRef} />
      <ScrollingTextBar />
    </div>
  );
};

export default Index;
