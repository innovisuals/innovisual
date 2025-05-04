
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
    <div>
      <h3 className="font-semibold text-[#FFFCEF]">1. Algemeen</h3>
      <p>
        Deze algemene voorwaarden zijn van toepassing op alle voorstellen, offertes, overeenkomsten, pilots en overige samenwerkingen waarbij INNOVISUAL producten of diensten levert aan een opdrachtgever (hierna: "Opdrachtgever"). Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien schriftelijk of digitaal bevestigd door INNOVISUAL.
      </p>
      <p>
        De toepasselijkheid van algemene voorwaarden van de Opdrachtgever wordt uitdrukkelijk uitgesloten, wat betekent dat alleen de voorwaarden van INNOVISUAL gelden, tenzij anders overeengekomen.
      </p>
      <p>
        Indien een bepaling uit deze voorwaarden geheel of gedeeltelijk nietig blijkt of vernietigd wordt, blijven de overige bepalingen volledig van kracht. Partijen zullen in overleg treden om een nieuwe bepaling overeen te komen die het doel en de strekking van de oorspronkelijke bepaling zo dicht mogelijk benadert.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#FFFCEF]">2. Totstandkoming van de overeenkomst</h3>
      <p>
        Een overeenkomst komt tot stand zodra INNOVISUAL de opdracht schriftelijk of digitaal bevestigt, of feitelijk start met de uitvoering van de overeengekomen werkzaamheden. Alle voorstellen en offertes zijn vrijblijvend en geldig gedurende 14 dagen, tenzij anders vermeld. INNOVISUAL behoudt zich het recht voor om opdrachten zonder opgave van redenen te weigeren.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#FFFCEF]">3. Diensten en werkwijze</h3>
      <ul className="list-disc list-inside mt-2">
        <li>het scannen, optimaliseren en leveren van 3D-modellen van gerechten, desserts en dranken;</li>
        <li>hosting en QR-code tracking;</li>
        <li>disignen en afstemming van visuele presentatie op locatie of online;</li>
        <li>analyse van gebruiksdata en feedbackmomenten.</li>
      </ul>
      <p className="mt-2">
        Na het kennismakingsgesprek en akkoord op het concept, plant INNOVISUAL samen met Opdrachtgever een scanmoment in. Op basis daarvan wordt een maatwerkpresentatie ontwikkeld en op locatie geleverd. Levertijden worden altijd in overleg bepaald. Digitale producten worden verstrekt via overeengekomen kanalen.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#FFFCEF]">4. Prijzen en betaling</h3>
      <p>
        Tenzij anders vermeld zijn alle prijzen exclusief btw. Facturatie vindt plaats op de overeengekomen momenten. Betaling dient te geschieden binnen 14 dagen na factuurdatum. Indien betaling uitblijft, is INNOVISUAL gerechtigd de toegang tot haar diensten (waaronder hosting en tracking) op te schorten of te beëindigen. Alle redelijke kosten die worden gemaakt voor incasso van openstaande bedragen, inclusief gerechtelijke en buitengerechtelijke kosten, komen volledig voor rekening van de Opdrachtgever.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#FFFCEF]">5. Intellectueel eigendom</h3>
      <p>
        Alle intellectuele eigendomsrechten op ontwerpen, 3D-modellen, visuals, technologie, scripts en bijbehorende materialen blijven eigendom van INNOVISUAL, tenzij uitdrukkelijk schriftelijk of digitaal anders overeengekomen. Opdrachtgever verkrijgt uitsluitend een niet-exclusief, niet-overdraagbaar gebruiksrecht voor het doel waarvoor het materiaal is geleverd. Verveelvoudiging, aanpassing, distributie of hergebruik is niet toegestaan zonder voorafgaande schriftelijke of digitale toestemming van INNOVISUAL.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#FFFCEF]">6. Gegevens en privacy</h3>
      <p>
        INNOVISUAL verwerkt persoonsgegevens uitsluitend conform haar privacyverklaring en geldende wetgeving. Er worden geen gegevens verzameld voor advertenties of persoonlijke tracking.
      </p>
      <p>
        Bij het gebruik van QR-codes wordt anonieme informatie vastgelegd zoals aantal scans, tijdstippen en apparaattype. INNOVISUAL kan tevens inzage krijgen in verkoopdata van gerechten die via de 3D-ervaring worden gepresenteerd. Deze inzichten worden uitsluitend gebruikt om de impact en effectiviteit van de dienst te meten en worden vertrouwelijk behandeld.
      </p>
      <p>
        Opdrachtgever heeft het recht om inzage te vragen, gegevens te laten wijzigen of te laten verwijderen.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#FFFCEF]">7. Aansprakelijkheid</h3>
      <p>
        INNOVISUAL voert haar werkzaamheden uit naar beste inzicht, zorg en vakmanschap. INNOVISUAL is niet aansprakelijk voor indirecte schade, waaronder begrepen: gederfde winst, verlies van data of gemiste omzet. De aansprakelijkheid van INNOVISUAL is in alle gevallen beperkt tot het factuurbedrag van de betreffende opdracht, tenzij sprake is van opzet of grove nalatigheid. INNOVISUAL is niet aansprakelijk voor schade voortvloeiend uit onjuiste of onvolledige informatie verstrekt door Opdrachtgever.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#FFFCEF]">8. Overtreding van voorwaarden en sancties</h3>
      <ul className="list-disc list-inside mt-2">
        <li>de levering van diensten tijdelijk of blijvend op te schorten;</li>
        <li>het gebruiksrecht op geleverde content of technologie per direct in te trekken;</li>
        <li>reeds verleende kortingen of betalingsafspraken te herzien;</li>
        <li>de overeenkomst met onmiddellijke ingang te beëindigen.</li>
      </ul>
      <p className="mt-2">
        Indien de overtreding leidt tot schade aan INNOVISUAL of derden, behoudt INNOVISUAL zich het recht voor deze schade op de Opdrachtgever te verhalen. Maatregelen genoemd in dit artikel laten het recht op aanvullende juridische stappen onverlet.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#FFFCEF]">9. Beëindiging en annulering</h3>
      <p>
        Opdrachtgever kan een overeenkomst schriftelijk of digitaal annuleren met een minimale opzegtermijn van 7 dagen voor de geplande uitvoering. INNOVISUAL behoudt zich het recht voor reeds gemaakte kosten in rekening te brengen. INNOVISUAL is gerechtigd de overeenkomst per direct te beëindigen indien Opdrachtgever haar verplichtingen niet nakomt, in staat van faillissement verkeert, of surseance van betaling aanvraagt. Na beëindiging vervalt automatisch ieder gebruiksrecht op de door INNOVISUAL ontwikkelde content en technologie, tenzij schriftelijk of digitaal anders is overeengekomen.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#FFFCEF]">10. Overmacht</h3>
      <p>
        INNOVISUAL is niet gehouden aan verplichtingen die niet kunnen worden nagekomen als gevolg van overmacht. Onder overmacht wordt onder meer verstaan: technische storingen, vertragingen bij derden, netwerk- of hostingproblemen, en overheidsmaatregelen. In het geval van overmacht heeft INNOVISUAL het recht de overeenkomst tijdelijk op te schorten of definitief te beëindigen zonder schadevergoeding.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#FFFCEF]">11. Toepasselijk recht en geschillen</h3>
      <ul className="list-decimal list-inside mt-2 space-y-1">
        <li>Op alle overeenkomsten met INNOVISUAL is uitsluitend Nederlands recht van toepassing.</li>
        <li>Geschillen worden bij voorkeur in goed overleg en met wederzijds respect opgelost.</li>
        <li>Indien partijen er onderling niet uitkomen, kan het geschil worden voorgelegd aan een onafhankelijke mediator alvorens juridische stappen worden ondernomen.</li>
        <li>Geschillen die niet in der minne kunnen worden geschikt, worden voorgelegd aan de bevoegde rechter in het arrondissement waar INNOVISUAL feitelijk of statutair gevestigd is.</li>
        <li>Een klacht of geschil dient binnen 30 dagen na het ontstaan schriftelijk of digitaal bij INNOVISUAL te worden gemeld, onder vermelding van de relevante feiten en context.</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-[#FFFCEF]">12. Wijziging van voorwaarden</h3>
      <p>
        INNOVISUAL behoudt zich het recht voor deze voorwaarden te wijzigen. Gewijzigde voorwaarden worden gepubliceerd op de website en/of per e-mail gecommuniceerd. De meest actuele versie is steeds leidend. De opschriften in deze voorwaarden zijn enkel bedoeld ter verduidelijking en vormen geen beperking van de inhoud of reikwijdte van de artikelen.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#FFFCEF]">13. Slotbepalingen</h3>
      <p>
        Indien INNOVISUAL op enig moment nalaat een recht of bepaling uit deze voorwaarden af te dwingen, betekent dit niet dat afstand wordt gedaan van dat recht of die bepaling.
      </p>
      <p>
        Indien enige bepaling uit deze voorwaarden in een concreet geval niet afdwingbaar blijkt, blijven de overige bepalingen onverkort van kracht.
      </p>
      <p>
        De meest recente versie van deze voorwaarden is steeds leidend. Deze is beschikbaar via www.innovisual.nl of wordt op verzoek digitaal verstrekt.
      </p>
      <p>
        Deze voorwaarden zijn opgesteld in de geest van de werkwijze en visie van INNOVISUAL: gericht op vertrouwen, eenvoud en een krachtige visuele beleving.
      </p>
    </div>
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
