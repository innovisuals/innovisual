
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { Home } from "lucide-react";

// Hamburger icon component (SVG)
const HamburgerIcon = () => (
  <span className="block relative w-8 h-8">
    <span className="absolute left-1/2 top-1/4 w-6 h-[3px] rounded bg-[#5C899D] translate-x-[-50%]" />
    <span className="absolute left-1/2 top-1/2 w-6 h-[3px] rounded bg-[#5C899D] translate-x-[-50%] translate-y-[-50%]" />
    <span className="absolute left-1/2 bottom-1/4 w-6 h-[3px] rounded bg-[#5C899D] translate-x-[-50%]" />
  </span>
);

// Close icon component (SVG)
const CloseIcon = () => (
  <span className="block relative w-8 h-8">
    <span className="absolute left-1/2 top-1/2 w-6 h-[3px] rounded bg-[#FFFCEF] translate-x-[-50%] translate-y-[-50%] rotate-45" />
    <span className="absolute left-1/2 top-1/2 w-6 h-[3px] rounded bg-[#FFFCEF] translate-x-[-50%] translate-y-[-50%] -rotate-45" />
  </span>
);

interface MobileNavigationProps {
  onNavigateToSection: (sectionId: string) => void;
  onLetsTalkClick: () => void;
  activeSection?: string;
  shouldShowDropdown?: boolean;
  isScrolled?: boolean;
  isExtraPage?: boolean;
  showNavbarHeroAnim?: boolean;
}

// Navigatie-links (hetzelfde als de originele navigatie)
const navLinks = [
  { id: "van-creatie-tot-beleving", text: "VAN CREATIE TOT BELEVING" },
  { id: "impact-door-innovatie", text: "IMPACT DOOR INNOVATIE" }
];

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  onNavigateToSection,
  onLetsTalkClick,
  isScrolled = false,
  isExtraPage = false,
  showNavbarHeroAnim = false
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleScrollToSection = (id: string) => {
    console.log("🚀 handleScrollToSection gestart voor ID:", id);
    console.log("✅ FUNCTIE OPGEROEPEN met id:", id);
    setMenuOpen(false);

    setTimeout(() => {
      const isHome = location.pathname === "/";
      const hash = `#${id}`;

      if (!isHome) {
        window.location.href = `/${hash}`;
        return;
      }

      const el = document.getElementById(id);
      console.log("🔍 Element gevonden op moment van klik:", el);

      if (el) {
        const navHeight = document.querySelector("nav")?.offsetHeight || 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        window.location.hash = hash;
      }
    }, 220);
  };

  // Button styles for both hamburger and home button
  const buttonClasses = cn(
    "fixed top-4 right-4 z-50 lg:hidden p-[10px] rounded-[18px] transition-all duration-300",
    "bg-[#FFFCEF] border border-[#F1F0FB] shadow-md",
    isScrolled ? "opacity-80 backdrop-blur-md bg-[#FFFCEF]/80" : "opacity-100",
    showNavbarHeroAnim ? "animate-navbar-blur-fadein-down" : "opacity-0"
  );

  // Styles for menu overlay and panel
  const overlayClasses = cn(
    "fixed inset-0 z-40 flex items-start justify-end transition-all duration-200",
    menuOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"
  );

  const menuPanelClasses = cn(
    "fixed top-0 right-0 w-[90%] max-w-[320px] h-[274px] mt-5 mr-4 rounded-2xl shadow-xl transition-transform duration-300 ease-in-out",
    "bg-[#5C899D]",
    menuOpen ? "translate-x-0" : "translate-x-[120%]"
  );

  // LETS TALK button style
  const letsTalkBtnClasses =
    "w-full bg-[#FFFCEF] text-[#5C899D] py-3 px-4 rounded-md font-semibold text-lg shadow-md transition-all duration-200 hover:bg-[#FFFCEF]/90 mt-2";

  return (
    <>
      {isHomePage ? (
        // Show hamburger menu on homepage
        !menuOpen && (
          <button
            className={buttonClasses}
            aria-label="Menu openen"
            onClick={() => setMenuOpen(true)}
          >
            <HamburgerIcon />
          </button>
        )
      ) : (
        // Show HOME button on other pages
        <Link
          to="/"
          className={buttonClasses}
          aria-label="Terug naar homepage"
        >
          <Home className="w-8 h-8 text-[#5C899D]" />
        </Link>
      )}
      
      {isHomePage && (
        <>
          {/* Overlay with blur effect - only show on homepage */}
          <div
            className={overlayClasses}
            style={{
              background: menuOpen ? "rgba(255, 252, 239, 0.82)" : "rgba(255, 252, 239, 0)",
              backdropFilter: menuOpen ? "blur(2px)" : "none",
              WebkitBackdropFilter: menuOpen ? "blur(2px)" : "none",
              transition: "all 0.3s ease-in-out"
            }}
            aria-hidden={!menuOpen}
          >
            {/* Menu panel */}
            <div className={menuPanelClasses}>
              {/* Close button */}
              <button
                className="absolute top-3 right-3 p-2 rounded-full z-20 focus:outline-none"
                aria-label="Menu sluiten"
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
              >
                <CloseIcon />
              </button>
              
              {/* Menu items with centered layout */}
              <nav className="flex flex-col items-center justify-center h-full px-8 -mt-1">
                {navLinks.map((link, i) => (
                  <button
                    key={link.id}
                    onClick={() => handleScrollToSection(link.id)}
                    className="w-full text-base font-semibold rounded-md px-3 py-3 text-[#FFFCEF] transition-colors hover:bg-[#FFFCEF]/10 text-center"
                    tabIndex={menuOpen ? 0 : -1}
                    style={{ transitionDelay: `${100 + i * 50}ms` }}
                  >
                    {link.text}
                  </button>
                ))}
                
                {/* LETS TALK button */}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => {
                      const isHome = location.pathname === "/";
                      const hash = "#lets-talk";

                      if (isHome) {
                        const el = document.getElementById("lets-talk");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        } else {
                          window.location.hash = hash;
                        }
                      } else {
                        window.location.href = `/${hash}`;
                      }
                    }, 200);
                  }}
                  className={letsTalkBtnClasses}
                  tabIndex={menuOpen ? 0 : -1}
                  style={{ transitionDelay: "220ms" }}
                >
                  LETS TALK
                </button>
              </nav>
            </div>
          </div>
        </>
      )}
      
      {/* Prevent scroll when menu is open */}
      {menuOpen && (
        <style>
          {`
            body {
              overflow: hidden !important;
              touch-action: none;
            }
          `}
        </style>
      )}
    </>
  );
};

export default MobileNavigation;
