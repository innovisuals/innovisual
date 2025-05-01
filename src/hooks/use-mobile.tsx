
import { useState, useEffect } from "react";

/**
 * Hook om te bepalen of de huidige weergave mobiel is (scherm smaller dan 1024px)
 * @returns boolean - True als het scherm kleiner is dan 1024px
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // Initiële waarde direct instellen op basis van window.innerWidth
    return typeof window !== 'undefined' ? window.innerWidth < 1024 : false;
  });

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Event listener voor het detecteren van wijzigingen in venstergrootte
    window.addEventListener("resize", checkIfMobile);
    
    // Controleer nogmaals bij montage om edge cases af te handelen
    checkIfMobile();
    
    // Cleanup bij unmount
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return isMobile;
}
