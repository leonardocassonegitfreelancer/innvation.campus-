import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageDetector } from "./hooks/useLanguageDetection";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConferenceRoom from "./pages/en/ConferenceRoom";
import PrivateTerrace from "./pages/en/PrivateTerrace";
import PrivateOffices from "./pages/en/PrivateOffices";
import BusinessRegistration from "./pages/en/BusinessRegistration";
import CoworkingSpace from "./pages/en/CoworkingSpace";
import Events from "./pages/en/Events";
import HostYourEvent from "./pages/en/HostYourEvent";
import Academy from "./pages/en/Academy";
import Benefits from "./pages/en/Benefits";
import Ancona from "./pages/en/Ancona";
import Olbia from "./pages/en/Olbia";
import MalagaPalace from "./pages/en/MalagaPalace";
import MalagaTerrace from "./pages/en/MalagaTerrace";
import FindUs from "./pages/en/FindUs";
import Blog from "./pages/en/Blog";
import BlogPostPage from "./pages/en/BlogPost";
import ScrollToTop from "./components/ScrollToTop";
import Admin from "./pages/Admin";

// Spanish pages
import IndexES from "./pages/es/Index";
import MalagaPalaceES from "./pages/es/MalagaPalace";
import MalagaTerraceES from "./pages/es/MalagaTerrace";
import AnconaES from "./pages/es/Ancona";
import OlbiaES from "./pages/es/Olbia";
import FindUsES from "./pages/es/FindUs";
import ConferenceRoomES from "./pages/es/ConferenceRoom";
import PrivateTerraceES from "./pages/es/PrivateTerrace";
import PrivateOfficesES from "./pages/es/PrivateOffices";
import BusinessRegistrationES from "./pages/es/BusinessRegistration";
import CoworkingSpaceES from "./pages/es/CoworkingSpace";
import EventsES from "./pages/es/Events";
import HostYourEventES from "./pages/es/HostYourEvent";
import AcademyES from "./pages/es/Academy";
import BenefitsES from "./pages/es/Benefits";
import BlogES from "./pages/es/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/en/conference-rooms" element={<ConferenceRoom />} />
          <Route path="/en/private-terrace" element={<PrivateTerrace />} />
          <Route path="/en/private-offices" element={<PrivateOffices />} />
          <Route path="/en/business-registration" element={<BusinessRegistration />} />
          <Route path="/en/coworking-space" element={<CoworkingSpace />} />
          <Route path="/en/events" element={<Events />} />
          <Route path="/en/host-your-event" element={<HostYourEvent />} />
          <Route path="/en/academy" element={<Academy />} />
          <Route path="/en/benefits" element={<Benefits />} />
          <Route path="/en/ancona" element={<Ancona />} />
          <Route path="/en/olbia" element={<Olbia />} />
          <Route path="/en/malaga-palace" element={<MalagaPalace />} />
          <Route path="/en/malaga-terrace" element={<MalagaTerrace />} />
          <Route path="/en/find-us" element={<FindUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/admin" element={<Admin />} />

          {/* Spanish routes */}
          <Route path="/es" element={<IndexES />} />
          <Route path="/es/malaga-palace" element={<MalagaPalaceES />} />
          <Route path="/es/malaga-terrace" element={<MalagaTerraceES />} />
          <Route path="/es/ancona" element={<AnconaES />} />
          <Route path="/es/olbia" element={<OlbiaES />} />
          <Route path="/es/encuentranos" element={<FindUsES />} />
          <Route path="/es/salas-de-conferencias" element={<ConferenceRoomES />} />
          <Route path="/es/terraza-privada" element={<PrivateTerraceES />} />
          <Route path="/es/oficinas-privadas" element={<PrivateOfficesES />} />
          <Route path="/es/registro-de-empresas" element={<BusinessRegistrationES />} />
          <Route path="/es/coworking" element={<CoworkingSpaceES />} />
          <Route path="/es/eventos" element={<EventsES />} />
          <Route path="/es/organiza-tu-evento" element={<HostYourEventES />} />
          <Route path="/es/academia" element={<AcademyES />} />
          <Route path="/es/beneficios" element={<BenefitsES />} />
          <Route path="/es/blog" element={<BlogES />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
