
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy | INNOVISUAL";
  }, []);

  return (
    <div className="min-h-screen bg-[#5c899d] relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#5c899d]/90 via-[#5c899d]/80 to-transparent pointer-events-none z-10" />
      <Navigation />

      <main className="section-container pt-32 relative z-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold mb-8 animate-fade-in text-center lg:text-left text-[#FFFCEF]">
            Privacy & Cookies
          </h2>

          <div className="text-[#FFFCEF]/90 text-lg leading-relaxed text-justify lg:text-left tracking-tight">
            <h3 className="uppercase font-semibold tracking-wide text-[#FFFCEF] text-center lg:text-left blur-fade-in mb-6">
              Uw gegevens, uw regie.
            </h3>

            <div className="space-y-0">
              <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 mt-12">Privacy</p>
<div className="h-3" /> 
              <p>
                Wij vinden het erg belangrijk dat uw gegevens en privacy op een 
                vertrouwelijke en respectvolle manier behandeld worden. Op deze 
                pagina vindt u daarom onze privacyverklaring, waarin we u laten 
                weten welke gegevens we van u verzamelen en hoe wij met uw gegevens 
                omgaan. Ook leggen we uit welke keuzes en rechten u heeft met 
                betrekking tot deze gegevens.
              </p>
<div className="h-3" /> 
              <p>
                Wanneer u contact met ons opneemt via het formulier op de website, 
                kunnen we de volgende persoonsgegevens verzamelen:
              </p>

              <ul className="list-disc list-inside mb-6">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Voorkeur voor contactwijze</li>
              </ul>
<div className="h-3" />
              <p className="mb-0">
                Bij het scannen van een QR-code worden anonieme gegevens geregistreerd, zoals:
              </p>

              <ul className="list-disc list-inside mb-6">
                <li>Tijdstip van de scan</li>
                <li>Aantal scans per dag</li>
                <li>Type apparaat of browser</li>
              </ul>
              
<div className="h-3" /> 
              
              <p>
                We bewaren deze gegevens tot maximaal twee maanden na afloop van de pilot, 
                tenzij u ervoor kiest klant te blijven of het contact wordt voortgezet. 
                Wij gebruiken deze gegevens om contact met u op te nemen, het gebruik van 
                QR-codes te analyseren en onze dienstverlening te verbeteren.
              </p>

              <div className="h-12" /> {/* 3 enters visueel */}

              <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 mt-6">Cookies</p>
<div className="h-3" />
              <p className="mb-0">
                Onze website gebruikt alleen functionele cookies. Wij kiezen ervoor 
                om geen cookiebanner te tonen, omdat:
              </p>

              <ul className="list-disc list-inside mb-6">
                <li>we kiezen voor eenvoud zonder vervelende pop-ups</li>
                <li>we geen gegevens gebruiken voor advertenties of persoonlijke tracking</li>
                <li>de cookies uitsluitend nodig zijn om de website technisch goed te laten werken</li>
              </ul>
<div className="h-3" /> 
              <p>
                Op deze manier zorgen we voor een zo gebruiksvriendelijk mogelijke ervaring,
                zonder onnodige onderbrekingen. Deze cookies slaan geen persoonsgegevens op.
              </p>



              
              <div className="h-12" /> {/* 3 enters visueel */}

              <p className="mt-6">
                U heeft het recht om uw gegevens in te zien, te laten aanpassen of verwijderen, 
                bezwaar te maken of uw toestemming in te trekken. Heeft u vragen of opmerkingen
                over dit privacybeleid of over hoe wij met gegevens omgaan? Neem dan contact
                met ons op via{" "}
                <a href="mailto:hello@innovisual.nl" className="underline">hello@innovisual.nl</a>.
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
        </div>
      </main>
    </div>
  );
};

export default Privacy;
