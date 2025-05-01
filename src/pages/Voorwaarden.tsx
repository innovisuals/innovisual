
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Voorwaarden: React.FC = () => {
  useEffect(() => {
    document.title = "Algemene Voorwaarden | INNOVISUAL";
  }, []);

  return (
    <div className="min-h-screen bg-[#5c899d] relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#5c899d]/90 via-[#5c899d]/80 to-transparent pointer-events-none z-10" />
      <Navigation />

      <main className="section-container pt-32 relative z-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in text-center lg:text-left text-[#FFFCEF]">
            Algemene voorwaarden
          </h2>

          <div className="space-y-6 text-[#FFFCEF]/90 text-lg leading-relaxed text-justify lg:text-left">
            <p className="text-sm text-[#FFFCEF]/70 text-center lg:text-left">Laatst bijgewerkt: april 2025</p>

            <p>
              Welkom bij INNOVISUAL. Door gebruik te maken van onze diensten ga je akkoord met deze
              algemene voorwaarden. Lees ze zorgvuldig door.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">1. Toepasselijkheid</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>het aanbieden van 3D-scans van gerechten, desserts en dranken;</li>
                  <li>het leveren van QR-codes die toegang geven tot de 3D-ervaring;</li>
                  <li>advies, ondersteuning en visuele begeleiding;</li>
                  <li>toekomstige betaalde diensten en uitbreidingen.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#FFFCEF]">2. Gebruik van de dienst</h3>
                <p>
                  Onze technologie is bedoeld voor visuele presentatie in de horeca. Gebruik ervan op
                  een andere manier of voor andere doeleinden is niet toegestaan zonder onze
                  schriftelijke toestemming.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#FFFCEF]">3. Intellectueel eigendom</h3>
                <p>
                  Alle 3D-modellen en bijbehorende visuals blijven eigendom van INNOVISUAL. Klanten
                  krijgen een gebruiksrecht voor presentatie op locatie of online, maar mogen de
                  modellen niet aanpassen, doorverkopen of op andere manieren verspreiden.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#FFFCEF]">4. Aansprakelijkheid en juist gebruik</h3>
                <p>
                  De klant is verantwoordelijk voor correct gebruik van de QR-codes en 3D-modellen.
                  Misbruik, zoals misleidende inzet of plaatsing in ongepaste context, kan leiden tot
                  beëindiging van de dienst.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#FFFCEF]">5. Techniek en bereikbaarheid</h3>
                <p>
                  Wij doen ons best om de dienst 24/7 beschikbaar te houden. INNOVISUAL is niet
                  aansprakelijk voor tijdelijke onderbrekingen, technische storingen of
                  incompatibiliteit met bepaalde apparaten of browsers.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#FFFCEF]">6. Betaling en prijzen</h3>
                <p>
                  Voor diensten buiten de gratis pilot gelden kosten. Prijzen worden altijd vooraf
                  gecommuniceerd. Betaling geschiedt via de afgesproken methode. Geen betaling = geen
                  toegang tot de bijbehorende dienst.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#FFFCEF]">7. Privacy en gegevens</h3>
                <p>
                  We gaan zorgvuldig om met je gegevens. Zie hiervoor onze{' '}
                  <Link to="/privacy" className="underline text-[#FFFCEF]">
                    privacyverklaring
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#FFFCEF]">8. Beëindiging van de samenwerking</h3>
                <p>
                  Voor deelname aan een pilot met vaste looptijd geldt dat deze samenwerking gedurende
                  die periode niet tussentijds kan worden beëindigd. Voor andere diensten kan de
                  samenwerking op elk moment door beide partijen worden stopgezet. Bij beëindiging
                  vervalt het recht op gebruik van onze content en technologie, tenzij anders
                  overeengekomen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#FFFCEF]">9. Wijzigingen</h3>
                <p>
                  INNOVISUAL mag deze voorwaarden aanpassen. Je wordt hiervan op de hoogte gebracht
                  via onze website of e-mail.
                </p>
              </div>
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

export default Voorwaarden;
