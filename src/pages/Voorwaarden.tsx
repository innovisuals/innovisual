import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Voorwaarden: React.FC = () => {
  useEffect(() => {
    document.title = "Voorwaarden | INNOVISUAL";
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
            <p className="text-sm text-[#FFFCEF]/70 text-center lg:text-left">
              Laatst bijgewerkt: april 2025
            </p>

            <p>
              Welkom bij INNOVISUAL. Door gebruik te maken van onze diensten ga je akkoord met deze
              algemene voorwaarden. Lees ze zorgvuldig door.
            </p>

            <div className="space-y-4">
              {/* Artikel 1 */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 1: Algemeen</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Deze algemene voorwaarden zijn van toepassing op alle voorstellen, offertes,
                    overeenkomsten, pilots en overige samenwerkingen waarbij INNOVISUAL producten of
                    diensten levert aan een opdrachtgever (hierna: "Opdrachtgever"). Afwijkingen van
                    deze voorwaarden zijn uitsluitend geldig indien schriftelijk of digitaal bevestigd
                    door INNOVISUAL.
                  </li>
                  <li>
                    De toepasselijkheid van algemene voorwaarden van de Opdrachtgever wordt
                    uitdrukkelijk uitgesloten, wat betekent dat alleen de voorwaarden van INNOVISUAL
                    gelden, tenzij anders overeengekomen.
                  </li>
                  <li>
                    Indien een bepaling uit deze voorwaarden geheel of gedeeltelijk nietig blijkt of
                    vernietigd wordt, blijven de overige bepalingen volledig van kracht. Partijen
                    zullen in overleg treden om een nieuwe bepaling overeen te komen die het doel en
                    de strekking van de oorspronkelijke bepaling zo dicht mogelijk benadert.
                  </li>
                </ol>
              </div>

              {/* Artikel 2 */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 2: Totstandkoming van de overeenkomst</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Een overeenkomst komt tot stand zodra INNOVISUAL de opdracht schriftelijk of
                    digitaal bevestigt, of feitelijk start met de uitvoering van de overeengekomen
                    werkzaamheden.
                  </li>
                  <li>
                    Alle voorstellen en offertes zijn vrijblijvend en geldig gedurende 14 dagen,
                    tenzij anders vermeld.
                  </li>
                  <li>
                    INNOVISUAL behoudt zich het recht voor om opdrachten zonder opgave van redenen te
                    weigeren.
                  </li>
                </ol>
              </div>

              {/* Artikel 3 */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 3: Diensten en werkwijze</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    INNOVISUAL levert onder andere:
                    <ul className="list-disc list-inside mt-2 ml-4">
                      <li>het scannen, optimaliseren en leveren van 3D-modellen van gerechten, desserts en dranken;</li>
                      <li>hosting en QR-code tracking;</li>
                      <li>disignen en afstemming van visuele presentatie op locatie of online;</li>
                      <li>analyse van gebruiksdata en feedbackmomenten.</li>
                    </ul>
                  </li>
                  <li>
                    Na het kennismakingsgesprek en akkoord op het concept, plant INNOVISUAL samen met
                    Opdrachtgever een scanmoment in. Op basis daarvan wordt een maatwerkpresentatie
                    ontwikkeld en op locatie geleverd. Levertijden worden altijd in overleg bepaald.
                    Digitale producten worden verstrekt via overeengekomen kanalen.
                  </li>
                </ol>
              </div>

              {/* Artikel 4 */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 4: Prijzen en betaling</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Alle prijzen zijn exclusief btw, tenzij anders vermeld.</li>
                  <li>
                    Facturatie vindt plaats op de overeengekomen momenten. Betaling dient te geschieden
                    binnen 14 dagen na factuurdatum.
                  </li>
                  <li>
                    Indien betaling uitblijft, is INNOVISUAL gerechtigd de toegang tot haar diensten op te
                    schorten of te beëindigen.
                  </li>
                  <li>
                    Alle redelijke kosten die worden gemaakt voor incasso van openstaande bedragen,
                    inclusief gerechtelijke en buitengerechtelijke kosten, komen volledig voor rekening
                    van de Opdrachtgever.
                  </li>
                </ol>
              </div>

              {/* Artikel 5 */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 5: Intellectueel eigendom</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Alle intellectuele eigendomsrechten op ontwerpen, 3D-modellen, visuals,
                    technologie, scripts en bijbehorende materialen blijven eigendom van INNOVISUAL,
                    tenzij schriftelijk anders overeengekomen.
                  </li>
                  <li>
                    Opdrachtgever verkrijgt een niet-exclusief, niet-overdraagbaar gebruiksrecht voor het
                    overeengekomen doel.
                  </li>
                  <li>
                    Verveelvoudiging, aanpassing, distributie of hergebruik is niet toegestaan zonder
                    voorafgaande schriftelijke of digitale toestemming van INNOVISUAL.
                  </li>
                </ol>
              </div>

              {/* Artikel 6 */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 6: Gegevens en privacy</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    INNOVISUAL verwerkt persoonsgegevens conform haar privacyverklaring en geldende
                    wetgeving. Er worden geen gegevens verzameld voor advertenties of persoonlijke tracking.
                  </li>
                  <li>
                    Bij gebruik van QR-codes wordt anonieme informatie vastgelegd, zoals aantal scans,
                    tijdstippen en apparaattype.
                  </li>
                  <li>
                    INNOVISUAL kan inzage krijgen in verkoopdata van gerechten die via de 3D-ervaring
                    worden gepresenteerd. Deze inzichten worden uitsluitend gebruikt om de impact en
                    effectiviteit te meten.
                  </li>
                  <li>Opdrachtgever heeft recht op inzage, correctie en verwijdering van gegevens.</li>
                </ol>
              </div>

              {/* Artikel 7 */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 7: Aansprakelijkheid</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    INNOVISUAL voert haar werkzaamheden uit naar beste inzicht, zorg en vakmanschap.
                  </li>
                  <li>
                    INNOVISUAL is niet aansprakelijk voor indirecte schade zoals gederfde winst of gemiste
                    omzet.
                  </li>
                  <li>
                    De aansprakelijkheid is beperkt tot het factuurbedrag, tenzij sprake is van opzet of
                    grove nalatigheid.
                  </li>
                  <li>
                    INNOVISUAL is niet aansprakelijk voor schade door onjuiste of onvolledige informatie
                    verstrekt door Opdrachtgever.
                  </li>
                </ol>
              </div>

              {/* Artikel 8 */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 8: Overtreding van voorwaarden en sancties</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Bij overtreding van voorwaarden kan INNOVISUAL onder andere:</li>
                  <ul className="list-disc list-inside mt-2 ml-4">
                    <li>de levering van diensten opschorten;</li>
                    <li>het gebruiksrecht op content of technologie intrekken;</li>
                    <li>kortingen of betalingsafspraken herzien;</li>
                    <li>de overeenkomst beëindigen.</li>
                  </ul>
                  <li>
                    Indien de overtreding leidt tot schade, behoudt INNOVISUAL zich het recht voor deze te
                    verhalen op Opdrachtgever.
                  </li>
                </ol>
              </div>

              {/* Artikel 9 */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 9: Beëindiging en annulering</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Opdrachtgever kan annuleren met een minimale opzegtermijn van 7 dagen voor uitvoering.
                  </li>
                  <li>
                    INNOVISUAL mag reeds gemaakte kosten in rekening brengen.
                  </li>
                  <li>
                    Bij niet-nakoming of faillissement mag INNOVISUAL de overeenkomst direct beëindigen.
                  </li>
                  <li>
                    Na beëindiging vervalt elk gebruiksrecht op content of technologie, tenzij anders
                    overeengekomen.
                  </li>
                </ol>
              </div>

              {/* Artikel 10 */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 10: Overmacht</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    INNOVISUAL is niet gehouden aan verplichtingen bij overmacht, zoals technische
                    storingen, vertraging bij derden, netwerkproblemen of overheidsmaatregelen.
                  </li>
                  <li>
                    Bij overmacht mag INNOVISUAL de overeenkomst opschorten of beëindigen zonder
                    schadevergoeding.
                  </li>
                </ol>
              </div>

              {/* Artikel 11 (reeds genummerd, ongewijzigd) */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 11: Toepasselijk recht en geschillen</h3>
                <ul className="list-decimal list-inside mt-2 space-y-1">
                  <li>Op alle overeenkomsten met INNOVISUAL is uitsluitend Nederlands recht van toepassing.</li>
                  <li>Geschillen worden bij voorkeur in goed overleg en met wederzijds respect opgelost.</li>
                  <li>Indien partijen er onderling niet uitkomen, kan het geschil worden voorgelegd aan een onafhankelijke mediator alvorens juridische stappen worden ondernomen.</li>
                  <li>Geschillen die niet in der minne kunnen worden geschikt, worden voorgelegd aan de bevoegde rechter in het arrondissement waar INNOVISUAL feitelijk of statutair gevestigd is.</li>
                  <li>Een klacht of geschil dient binnen 30 dagen na het ontstaan schriftelijk of digitaal bij INNOVISUAL te worden gemeld, onder vermelding van de relevante feiten en context.</li>
                </ul>
              </div>

              {/* Artikel 12 */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 12: Wijziging van voorwaarden</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    INNOVISUAL behoudt zich het recht voor deze voorwaarden te wijzigen.
                  </li>
                  <li>
                    Gewijzigde voorwaarden worden gepubliceerd op de website en/of per e-mail
                    gecommuniceerd. De meest actuele versie is leidend.
                  </li>
                  <li>
                    De opschriften in deze voorwaarden zijn enkel bedoeld ter verduidelijking en vormen
                    geen beperking van de inhoud of reikwijdte van de artikelen.
                  </li>
                </ol>
              </div>

              {/* Artikel 13 */}
              <div>
                <h3 className="font-semibold text-[#FFFCEF]">Artikel 13: Slotbepalingen</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Indien INNOVISUAL nalaat een bepaling af te dwingen, betekent dit niet dat afstand wordt
                    gedaan van dat recht.
                  </li>
                  <li>
                    Indien enige bepaling niet afdwingbaar blijkt, blijven de overige bepalingen van kracht.
                  </li>
                  <li>
                    De meest recente versie van deze voorwaarden is leidend en beschikbaar via
                    www.innovisual.nl of op verzoek digitaal.
                  </li>
                  <li>
                    Deze voorwaarden zijn opgesteld in lijn met de werkwijze en visie van INNOVISUAL:
                    gericht op vertrouwen, eenvoud en visuele beleving.
                  </li>
                </ol>
              </div>
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
        </div>
      </main>
    </div>
  );
};

export default Voorwaarden;
