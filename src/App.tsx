import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VanCreatieTotBeleving from "./pages/VanCreatieTotBeleving";
import ImpactDoorInnovatie from "./pages/ImpactDoorInnovatie";
import LetsTalk from "./pages/LetsTalk";
import OverOns from "./pages/OverOns";
import Diensten from "./pages/Diensten";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden";
import Privacyverklaring from "./pages/Privacyverklaring";
import Werkwijze from "./pages/Werkwijze";
import FAQ from "./pages/FAQ";
import Voorwaarden from "./pages/Voorwaarden";
import Privacy from "./pages/Privacy";
import Footer from "./components/Footer";
import ScrollToTop from "@/components/ScrollToTop";


const queryClient = new QueryClient();

const FooterWithStyles = () => {
  const location = useLocation();

  const ivoryPages = [
    "/over-ons",
    "/algemene-voorwaarden",
    "/privacyverklaring",
    "/werkwijze",
    "/faq",
    "/voorwaarden",
    "/privacy"
  ];

  const isIvory = ivoryPages.includes(location.pathname);

  return <Footer variant={isIvory ? "ivory" : "default"} />;
};


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
 <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/van-creatie-tot-beleving" element={<VanCreatieTotBeleving />} />
          <Route path="/impact-door-innovatie" element={<ImpactDoorInnovatie />} />
          <Route path="/lets-talk" element={<LetsTalk />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/werkwijze" element={<Werkwijze />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/voorwaarden" element={<Voorwaarden />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterWithStyles />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
