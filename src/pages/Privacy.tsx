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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in text-center lg:text-left text-[#FFFCEF]">
            Privacy & Cookies
          </h2>

          <div className="space-y-6 text-[#FFFCEF]/90 text-lg leading-relaxed text-justify lg:text-left">
            <h3 className="uppercase font-semibold tracking-wide text-[#FFFCEF] text-center lg:text-left">
              Jouw gegevens, jouw regie.
            </h3>

            <p>
              Wanneer je contact met ons opneemt via het formulier op de website, kunnen we de volgende persoonsgegevens verzamelen:
              <ul className="list-disc list-inside mt-2">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Voorkeur voor contactwijze</li>
              </ul>
            </p>

            <p>
              Bij QR-scans (bijvoorbeeld op een menukaart) verzamelen we anonieme gegevens zoals:
              <ul className="list-disc list-inside mt-2">
                <li>Tijdstip van de scan</li>
                <li>Aantal scans per dag</li>
                <li>Type apparaat of browser</li>
              </ul>
            </p>

            <p><strong>Waarom verzamelen we dit?</strong><br />
              Om contact op te nemen na het formulier, deelname aan de pilot te regelen, gebruik te analyseren via QRTrac, en onze dienstverlening te verbeteren.
            </p>

            <p><strong>Bewaartermijn:</strong> Maximaal twee maanden na de pilot, tenzij je klant wordt of langer contact houdt.</p>


            <p><strong>Cookies:</strong><br />
              Onze website gebruikt alleen functionele cookies.<br />
              Wij kiezen ervoor om geen cookiebanner te tonen, omdat:<br />
              <ul className="list-disc list-inside mt-2">
                <li>we kiezen voor eenvoud zonder vervelende pop-ups</li>
                <li>we geen gegevens gebruiken voor advertenties of persoonlijke tracking</li>
                <li>de cookies uitsluitend nodig zijn om de site technisch goed te laten werken</li>
              </ul>
            </p>

            <p><strong>Jouw rechten:</strong><br />
              Je mag je gegevens inzien, laten aanpassen of verwijderen, bezwaar maken, of toestemming intrekken. Stuur een e-mail naar <a href="mailto:hello@innovisual.nl" className="underline">hello@innovisual.nl</a>.
            </p>

            <p><strong>Wijzigingen:</strong> We kunnen deze verklaring aanpassen. De actuele versie staat altijd op deze pagina.</p>
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

export default Privacy;
