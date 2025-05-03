import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Instagram } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = ({ variant = "default" }: { variant?: "default" | "ivory" }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const isIvory = variant === "ivory";
  const isMobile = useIsMobile();

  const logoPath = isIvory
    ? "/Logo-5c899d-1200x400.png"
    : "/Logo-fffcef-1200x400.png";

  const textColor = isIvory ? "text-[#5C899D]" : "text-[#FFFCEF]";

  return (
    <footer className={`py-8 ${isIvory ? "bg-[#FFFCEF]" : "bg-[#5C899D]"}`}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {isMobile ? (
          <>
            {/* Mobiele links */}
            <div className={`flex flex-col items-center gap-y-2 text-sm ${textColor} md:hidden`}>
              {/* Eerste rij: 3 links */}
              <div className="flex gap-2">
                <Link to="/over-ons" className="transition-transform hover:scale-[1.10]">Over ons</Link>
                <span className="mx-1">|</span>
                <Link to="/werkwijze" className="transition-transform hover:scale-[1.10]">Werkwijze</Link>
                <span className="mx-1">|</span>
                <Link to="/faq" className="transition-transform hover:scale-[1.10]">FAQ</Link>
              </div>

              {/* Tweede rij: 2 links */}
              <div className="flex gap-2">
                <Link to="/voorwaarden" className="transition-transform hover:scale-[1.10]">Voorwaarden</Link>
                <span className="mx-1">|</span>
                <Link to="/privacy" className="transition-transform hover:scale-[1.10]">Privacy</Link>
              </div>
            </div>

            {/* Mobiele social icons */}
            <div className="flex justify-center mt-16 mb-16">
              <div className="flex space-x-6">
                <a
                  href="https://wa.me/31651329923"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={`hover:scale-110 hover:opacity-80 transition-opacity ${textColor}`}
                >
                  <FaWhatsapp size={40} />
                </a>
                <a
                  href="https://www.instagram.com/innovisual.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={`hover:scale-110 hover:opacity-80 transition-opacity ${textColor}`}
                >
                  <Instagram size={40} />
                </a>
              </div>
            </div>

            {/* Mobiel copyright */}
            <div className="text-center mt-12 mb-8">
              <p className={`text-xs leading-none tracking-tight opacity-70 ${textColor}`}>
                &copy; 2025 INNOVISUAL. All Rights Reserved.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Desktop: links met blur motion */}
            <div className="w-full flex justify-start mb-6">
              <div className={`hidden md:flex justify-center flex-wrap items-center gap-2 text-sm group text-left ${textColor}`}>
                <Link to="/over-ons" className="transition-all group-hover:blur-[0.3px] group-hover:opacity-40 hover:!blur-none hover:!opacity-100 hover:scale-105">Over ons</Link>
                <span className="mx-1">|</span>
                <Link to="/werkwijze" className="transition-all group-hover:blur-[0.3px] group-hover:opacity-40 hover:!blur-none hover:!opacity-100 hover:scale-105">Werkwijze</Link>
                <span className="mx-1">|</span>
                <Link to="/faq" className="transition-all group-hover:blur-[0.3px] group-hover:opacity-40 hover:!blur-none hover:!opacity-100 hover:scale-105">FAQ</Link>
                <span className="mx-1">|</span>
                <Link to="/voorwaarden" className="transition-all group-hover:blur-[0.3px] group-hover:opacity-40 hover:!blur-none hover:!opacity-100 hover:scale-105">Voorwaarden</Link>
                <span className="mx-1">|</span>
                <Link to="/privacy" className="transition-all group-hover:blur-[0.3px] group-hover:opacity-40 hover:!blur-none hover:!opacity-100 hover:scale-105">Privacy</Link>
              </div>
            </div>

            {/* Desktop: logo */}
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-4 mx-auto">
              <img
                src={logoPath}
                alt="INNOVISUAL Logo"
                className="w-full h-auto object-contain mx-auto transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
              />
            </div>


            {/* Desktop: copyright gecentreerd */}
            <div className="w-full flex justify-end text-right gap-4 mt-6">
                   <a
                href="https://wa.me/31651329923"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={`hover:scale-110 hover:opacity-80 transition-opacity ${textColor}`}
              >
                <FaWhatsapp size={28} />
              </a>
              <img
  src={isIvory ? "/icon-logo_cool-teal_transparant.png" : "/icon-logo_ivory_transparant.png"}
  alt="IconLogo"
  className="w-12 h-auto"
/>
              <a
                href="https://www.instagram.com/innovisual.nl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`hover:scale-110 hover:opacity-80 transition-opacity ${textColor}`}
              >
                <Instagram size={28} />
              </a>
           
              <p className={`text-xs opacity-80 mt-1 ${textColor}`}>&copy; 2025 INNOVISUAL</p>
            </div>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
