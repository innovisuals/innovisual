import React, { useState, useEffect, RefObject } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import NavLogo from "./NavLogo";
import NavContactDropdown from "./NavContactDropdown";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNavigation from "./MobileNavigation";

interface NavigationProps {
  vanCreatieRef?: RefObject<HTMLDivElement>;
  impactRef?: RefObject<HTMLDivElement>;
  contactRef?: RefObject<HTMLDivElement>;
}

const Navigation: React.FC<NavigationProps> = ({
  vanCreatieRef,
  impactRef,
  contactRef,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [pastHero, setPastHero] = useState(false);
  const [showNavbarHeroAnim, setShowNavbarHeroAnim] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const location = useLocation();
  const isMobile = useIsMobile();

  const dropdownPages = [
    '/over-ons', '/werkwijze', '/faq', '/voorwaarden', '/privacy'
  ];

  const shouldShowDropdown = dropdownPages.includes(location.pathname);
  const isExtraPage = location.pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setShowLogo(scrollY > 120);

      const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
      const scrollPosition = scrollY + navbarHeight + 5;

      if (contactRef?.current && scrollPosition >= contactRef.current.offsetTop) {
        setActiveSection("lets-talk");
      } else if (impactRef?.current && scrollPosition >= impactRef.current.offsetTop) {
        setActiveSection("impact-door-innovatie");
      } else if (vanCreatieRef?.current && scrollPosition >= vanCreatieRef.current.offsetTop) {
        setActiveSection("van-creatie-tot-beleving");
      } else {
        setActiveSection("home");
      }

      if (vanCreatieRef?.current) {
        setPastHero(scrollY >= vanCreatieRef.current.offsetTop - 120);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contactRef, impactRef, vanCreatieRef]);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setTimeout(() => setShowNavbarHeroAnim(true), 1800);
    } else {
      setShowNavbarHeroAnim(true);
    }
  }, []);

  const scrollToSection = (ref: RefObject<HTMLDivElement> | undefined) => {
    if (ref?.current) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
      const extraOffset = 20;
      window.scrollTo({
        top: ref.current.offsetTop - navbarHeight - extraOffset,
        behavior: "smooth",
      });
    }
  };

  const handleNavigateToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      if (sectionId === "van-creatie-tot-beleving") scrollToSection(vanCreatieRef);
      else if (sectionId === "impact-door-innovatie") scrollToSection(impactRef);
      else if (sectionId === "lets-talk") scrollToSection(contactRef);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleLetsTalkClick = () => {
    if (location.pathname === "/") scrollToSection(contactRef);
    else window.location.href = "/#lets-talk";
  };

  const isActive = (id: string) => !hovered && activeSection === id;
  const isHovered = (id: string) => hovered === id;
  const isDimmed = (id: string) => hovered && hovered !== id && id !== "lets-talk";

  const navbarClasses = pastHero
    ? "bg-[#FFFCEF]/70 backdrop-blur-md shadow-sm py-3"
    : "bg-[#5C899D]/50 backdrop-blur-md shadow-sm py-5";

  const textColor = pastHero ? "text-[#5C899D]" : "text-[#FFFCEF]";
  const buttonBg = pastHero ? "bg-[#5C899D] text-[#FFFCEF]" : "bg-[#FFFCEF] text-[#5C899D]";

  const linkClasses = (id: string) =>
  cn(
    "text-xs font-semibold transition-all duration-300",
    isHovered(id)
      ? "scale-105 opacity-100 blur-none"
      : isActive(id)
      ? "opacity-100 blur-none"
      : isDimmed(id)
      ? "opacity-40 blur-[0.3px]"
      : "opacity-100",
    textColor
  );

  const buttonBase = cn(
    "rounded-md px-6 py-2 text-xs font-semibold transition-all duration-300",
    "hover:scale-105"
  );

  if (isMobile) {
    return (
      <MobileNavigation
        onNavigateToSection={handleNavigateToSection}
        onLetsTalkClick={handleLetsTalkClick}
        activeSection={activeSection}
        shouldShowDropdown={shouldShowDropdown}
        isScrolled={scrolled}
        isExtraPage={isExtraPage}
        showNavbarHeroAnim={showNavbarHeroAnim}
      />
    );
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        navbarClasses,
        showNavbarHeroAnim ? "animate-navbar-blur-fadein-down" : "opacity-0"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-end items-center relative">
        <div
          className={cn(
            "absolute left-1/2 transform -translate-x-1/2 transition-all duration-500",
            showLogo ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}
        >
          <NavLogo />
        </div>

        <div className="flex space-x-4 items-center group">
          <button
            onMouseEnter={() => setHovered("van-creatie-tot-beleving")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavigateToSection("van-creatie-tot-beleving")}
            className={linkClasses("van-creatie-tot-beleving")}
          >
            VAN CREATIE TOT BELEVING
          </button>

          <span className={textColor}>|</span>

          <button
            onMouseEnter={() => setHovered("impact-door-innovatie")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavigateToSection("impact-door-innovatie")}
            className={linkClasses("impact-door-innovatie")}
          >
            IMPACT DOOR INNOVATIE
          </button>

          <span className={textColor}>|</span>

          {shouldShowDropdown ? (
            <NavContactDropdown />
          ) : (
            <button
              onMouseEnter={() => setHovered("lets-talk")}
              onMouseLeave={() => setHovered(null)}
              onClick={handleLetsTalkClick}
              className={cn(buttonBase, buttonBg)}
            >
              LETS TALK
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
