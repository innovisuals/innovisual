
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
          <h2 className="text-3xl md:text-6xl font-bold mb-8 animate-fade-in text-center lg:text-left text-[#FFFCEF]">
            Algemene voorwaarden
          </h2>

          <div className="space-y-6 text-[#FFFCEF]/90 text-lg leading-relaxed text-justify lg:text-left">
            <p className="text-sm text-[#FFFCEF]/70 text-center lg:text-left">Laatst bijgewerkt: april 2025</p>
            <p>
              Welkom bij INNOVISUAL. Door gebruik te maken van onze diensten ga je akkoord met deze
              algemene voorwaarden. Lees ze zorgvuldig door.
            </p>

            <div className="space-y-8">
              {/* Section 1: Algemeen */}
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 pt-6">Artikel 1: Algemeen</p>
                <ol className="list-decimal list-inside pl-4 space-y-2 mt-0">
                  <li>Deze algemene voorwaarden zijn van toepassing op alle voorstellen, offertes, overeenkomsten, pilots en overige samenwerkingen waarbij INNOVISUAL producten of diensten levert aan een opdrachtgever (hierna: "Opdrachtgever").</li>
                  <li>Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien schriftelijk of digitaal bevestigd door INNOVISUAL.</li>
                  <li>De toepasselijkheid van algemene voorwaarden van de Opdrachtgever wordt uitdrukkelijk uitgesloten, wat betekent dat alleen de voorwaarden van INNOVISUAL gelden, tenzij anders overeengekomen.</li>
                  <li>Indien een bepaling uit deze voorwaarden geheel of gedeeltelijk nietig blijkt of vernietigd wordt, blijven de overige bepalingen volledig van kracht. Partijen zullen in overleg treden om een nieuwe bepaling overeen te komen die het doel en de strekking van de oorspronkelijke bepaling zo dicht mogelijk benadert.</li>
                </ol>
              </div>

              {/* Section 2: Overeenkomst */}
              <div>
                 <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 pt-6">Artikel 2: Overeenkomst</p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>Een overeenkomst komt tot stand zodra INNOVISUAL de opdracht schriftelijk of digitaal bevestigt, of feitelijk start met de uitvoering van de overeengekomen werkzaamheden.</li>
                  <li>Alle voorstellen en offertes zijn vrijblijvend en geldig gedurende 14 dagen, tenzij anders vermeld.</li>
                  <li>INNOVISUAL behoudt zich het recht voor om opdrachten zonder opgave van redenen te weigeren.</li>
                </ol>
              </div>

              {/* Section 3: Dienstenverlenning */}
              <div>
                 <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 pt-6">Artikel 3: Dienstenverlening</p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>INNOVISUAL maakt visuele beleving zichtbaar, met nadruk op eenvoud, stijl en impact.</li>
                  <li>
                    De dienstverlening bestaat onder andere uit:
                    <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                      <li>het scannen, optimaliseren en leveren van 3D-modellen van gerechten, desserts en dranken;</li>
                      <li>hosting en QR-code tracking;</li>
                      <li>designen en afstemming van visuele presentatie op locatie of online;</li>
                      <li>analyse van gebruiksdata en feedbackmomenten.</li>
                    </ul>
                  </li>
                  <li>Na het kennismakingsgesprek en akkoord op het concept, plant INNOVISUAL samen met Opdrachtgever een scanmoment in. Op basis daarvan wordt een maatwerkpresentatie ontwikkeld en op locatie geleverd.</li>
                  <li>Levertijden worden altijd in overleg bepaald. Digitale producten worden verstrekt via overeengekomen kanalen.</li>
                </ol>
              </div>

              {/* Section 4: Betaling */}
              <div>
                 <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 pt-6">Artikel 4: Betaling</p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>Tenzij anders vermeld zijn alle prijzen exclusief btw.</li>
                  <li>Facturatie vindt plaats op de overeengekomen momenten. Betaling dient te geschieden binnen 14 dagen na factuurdatum.</li>
                  <li>Indien betaling uitblijft, is INNOVISUAL gerechtigd de toegang tot haar diensten (waaronder hosting en tracking) op te schorten of te beëindigen.</li>
                  <li>Alle redelijke kosten die worden gemaakt voor incasso van openstaande bedragen, inclusief gerechtelijke en buitengerechtelijke kosten, komen volledig voor rekening van de Opdrachtgever.</li>
                </ol>
              </div>

              {/* Section 5: Auteursrecht */}
              <div>
                 <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 pt-6">Artikel 5: Auteursrecht</p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>Alle intellectuele eigendomsrechten op ontwerpen, 3D-modellen, visuals, technologie, scripts en bijbehorende materialen blijven eigendom van INNOVISUAL, tenzij uitdrukkelijk schriftelijk of digitaal anders overeengekomen.</li>
                  <li>Opdrachtgever verkrijgt uitsluitend een niet-exclusief, niet-overdraagbaar gebruiksrecht voor het doel waarvoor het materiaal is geleverd.</li>
                  <li>Verveelvoudiging, aanpassing, distributie of hergebruik is niet toegestaan zonder voorafgaande schriftelijke of digitale toestemming van INNOVISUAL.</li>
                </ol>
              </div>

              {/* Section 6: Privacy */}
              <div>
                 <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 pt-6">Artikel 6: Privacy</p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>INNOVISUAL verwerkt persoonsgegevens uitsluitend conform haar privacyverklaring en geldende wetgeving.</li>
                  <li>Er worden geen gegevens verzameld voor advertenties of persoonlijke tracking.</li>
                  <li>Bij het gebruik van QR-codes wordt anonieme informatie vastgelegd zoals aantal scans, tijdstippen en apparaattype.</li>
                  <li>INNOVISUAL kan tevens inzage krijgen in verkoopdata van gerechten die via de 3D-ervaring worden gepresenteerd. Deze inzichten worden uitsluitend gebruikt om de impact en effectiviteit van de dienst te meten en worden vertrouwelijk behandeld.</li>
                  <li>Opdrachtgever heeft het recht om inzage te vragen, gegevens te laten wijzigen of te laten verwijderen.</li>
                  <li>De verwerking van persoonsgegevens en het gebruik van cookies wordt nader toegelicht in onze <a href="https://innovisual.nl/privacy" className="underline text-[#FFFCEF] hover:text-[#FFFCEF]/80">privacyverklaring</a>.</li>
                </ol>
              </div>

              {/* Section 7: Aansprakelijkheid */}
              <div>
                 <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 pt-6">Artikel 7: Aansprakelijkheid</p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>INNOVISUAL voert haar werkzaamheden uit naar beste inzicht, zorg en vakmanschap.</li>
                  <li>INNOVISUAL is niet aansprakelijk voor indirecte schade, waaronder begrepen: gederfde winst, verlies van data of gemiste omzet.</li>
                  <li>De aansprakelijkheid van INNOVISUAL is in alle gevallen beperkt tot het factuurbedrag van de betreffende opdracht, tenzij sprake is van opzet of grove nalatigheid.</li>
                  <li>INNOVISUAL is niet aansprakelijk voor schade voortvloeiend uit onjuiste of onvolledige informatie verstrekt door Opdrachtgever.</li>
                </ol>
              </div>

              {/* Section 9: Beëindiging*/}
              <div>
                 <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 pt-6">Artikel 8: Beëindiging</p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>Opdrachtgever kan een overeenkomst schriftelijk of digitaal annuleren met een minimale opzegtermijn van 7 dagen voor de geplande uitvoering.</li>
                  <li>INNOVISUAL behoudt zich het recht voor reeds gemaakte kosten in rekening te brengen.</li>
                  <li>INNOVISUAL is gerechtigd de overeenkomst per direct te beëindigen indien Opdrachtgever haar verplichtingen niet nakomt, in staat van faillissement verkeert, of surseance van betaling aanvraagt.</li>
                  <li>Na beëindiging vervalt automatisch ieder gebruiksrecht op de door INNOVISUAL ontwikkelde content en technologie, tenzij schriftelijk of digitaal anders is overeengekomen.</li>
                </ol>
              </div>

              {/* Section 9: Overmacht */}
              <div>
                 <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 pt-6">Artikel 10: Overmacht</p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>INNOVISUAL is niet gehouden aan verplichtingen die niet kunnen worden nagekomen als gevolg van overmacht.</li>
                  <li>Onder overmacht wordt onder meer verstaan: technische storingen, vertragingen bij derden, netwerk- of hostingproblemen, en overheidsmaatregelen.</li>
                  <li>In het geval van overmacht heeft INNOVISUAL het recht de overeenkomst tijdelijk op te schorten of definitief te beëindigen zonder schadevergoeding.</li>
                </ol>
              </div>

              {/* Section 10: Geschillenregeling */}
              <div>
                 <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 pt-6">Artikel 11: Geschillenregeling</p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>Op alle overeenkomsten met INNOVISUAL is uitsluitend Nederlands recht van toepassing.</li>
                  <li>Geschillen worden bij voorkeur in goed overleg en met wederzijds respect opgelost.</li>
                  <li>Indien partijen er onderling niet uitkomen, kan het geschil worden voorgelegd aan een onafhankelijke mediator alvorens juridische stappen worden ondernomen.</li>
                  <li>Geschillen die niet in der minne kunnen worden geschikt, worden voorgelegd aan de bevoegde rechter in het arrondissement waar INNOVISUAL feitelijk of statutair gevestigd is.</li>
                  <li>Een klacht of geschil dient binnen 30 dagen na het ontstaan schriftelijk of digitaal bij INNOVISUAL te worden gemeld, onder vermelding van de relevante feiten en context.</li>
                </ol>
              </div>

              {/* Section 11: Wijzigingen */}
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 pt-6">Artikel 12: Wijzigingen</p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>INNOVISUAL behoudt zich het recht voor deze voorwaarden te wijzigen.</li>
                  <li>Gewijzigde voorwaarden worden gepubliceerd op de website en/of per e-mail gecommuniceerd. De meest actuele versie is steeds leidend.</li>
                  <li>De opschriften in deze voorwaarden zijn enkel bedoeld ter verduidelijking en vormen geen beperking van de inhoud of reikwijdte van de artikelen.</li>
                </ol>
              </div>

              {/* Section 12: Slotbepalingen */}
              <div>
                 <p className="text-2xl md:text-3xl font-bold text-[#FFFCEF] leading-relaxed mb-2 pt-6">Artikel 13: Slotbepalingen</p>
                <ol className="list-decimal list-inside pl-4 space-y-2">
                  <li>Indien INNOVISUAL op enig moment nalaat een recht of bepaling uit deze voorwaarden af te dwingen, betekent dit niet dat afstand wordt gedaan van dat recht of die bepaling.</li>
                  <li>Indien enige bepaling uit deze voorwaarden in een concreet geval niet afdwingbaar blijkt, blijven de overige bepalingen onverkort van kracht.</li>
                  <li>De meest recente versie van deze voorwaarden is steeds leidend. Deze is beschikbaar via www.innovisual.nl of wordt op verzoek digitaal verstrekt.</li>
                  <li>Deze voorwaarden zijn opgesteld in de geest van de werkwijze en visie van INNOVISUAL: gericht op vertrouwen, eenvoud en een krachtige visuele beleving.</li>
                </ol>
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

