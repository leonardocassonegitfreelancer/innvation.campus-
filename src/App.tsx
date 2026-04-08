import { Toaster } from "@/components/ui/toaster";
import CookieBanner from "@/components/CookieBanner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageDetector } from "./hooks/useLanguageDetection";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MeetingRooms from "./pages/en/MeetingRooms";
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

// Meeting room sub-pages (EN)
import BigConferenceRoom from "./pages/en/BigConferenceRoom";
import LargeConferenceRoom from "./pages/en/LargeConferenceRoom";
import QuarterConferenceRoom from "./pages/en/QuarterConferenceRoom";
import TrainingRoom from "./pages/en/TrainingRoom";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import LegalNotice from "./pages/LegalNotice";

// Spanish pages
import IndexES from "./pages/es/Index";
import MalagaPalaceES from "./pages/es/MalagaPalace";
import MalagaTerraceES from "./pages/es/MalagaTerrace";
import AnconaES from "./pages/es/Ancona";
import OlbiaES from "./pages/es/Olbia";
import FindUsES from "./pages/es/FindUs";
import MeetingRoomsES from "./pages/es/MeetingRooms";
import PrivateTerraceES from "./pages/es/PrivateTerrace";
import PrivateOfficesES from "./pages/es/PrivateOffices";
import BusinessRegistrationES from "./pages/es/BusinessRegistration";
import CoworkingSpaceES from "./pages/es/CoworkingSpace";
import EventsES from "./pages/es/Events";
import HostYourEventES from "./pages/es/HostYourEvent";
import AcademyES from "./pages/es/Academy";
import BenefitsES from "./pages/es/Benefits";
import BlogES from "./pages/es/Blog";

// Meeting room sub-pages (ES)
import BigConferenceRoomES from "./pages/es/BigConferenceRoom";
import LargeConferenceRoomES from "./pages/es/LargeConferenceRoom";
import QuarterConferenceRoomES from "./pages/es/QuarterConferenceRoom";
import TrainingRoomES from "./pages/es/TrainingRoom";


// Italian pages
import IndexIT from "./pages/it/Index";
import MalagaPalaceIT from "./pages/it/MalagaPalace";
import MalagaTerraceIT from "./pages/it/MalagaTerrace";
import AnconaIT from "./pages/it/Ancona";
import OlbiaIT from "./pages/it/Olbia";
import FindUsIT from "./pages/it/FindUs";
import MeetingRoomsIT from "./pages/it/MeetingRooms";
import PrivateTerraceIT from "./pages/it/PrivateTerrace";
import PrivateOfficesIT from "./pages/it/PrivateOffices";
import BusinessRegistrationIT from "./pages/it/BusinessRegistration";
import CoworkingSpaceIT from "./pages/it/CoworkingSpace";
import EventsIT from "./pages/it/Events";
import HostYourEventIT from "./pages/it/HostYourEvent";
import AcademyIT from "./pages/it/Academy";
import BenefitsIT from "./pages/it/Benefits";
import BlogIT from "./pages/it/Blog";

// Meeting room sub-pages (IT)
import BigConferenceRoomIT from "./pages/it/BigConferenceRoom";
import LargeConferenceRoomIT from "./pages/it/LargeConferenceRoom";
import QuarterConferenceRoomIT from "./pages/it/QuarterConferenceRoom";
import TrainingRoomIT from "./pages/it/TrainingRoom";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageDetector />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/en/meeting-rooms" element={<MeetingRooms />} />
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
          <Route path="/en/meeting-rooms/big-conference-room" element={<BigConferenceRoom />} />
          <Route path="/en/meeting-rooms/large-conference-room" element={<LargeConferenceRoom />} />
          <Route path="/en/meeting-rooms/quarter-conference-room" element={<QuarterConferenceRoom />} />
          <Route path="/en/meeting-rooms/training-room" element={<TrainingRoom />} />
          
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/legal-notice" element={<LegalNotice />} />

          {/* Spanish routes */}
          <Route path="/es" element={<IndexES />} />
          <Route path="/es/malaga-palace" element={<MalagaPalaceES />} />
          <Route path="/es/malaga-terrace" element={<MalagaTerraceES />} />
          <Route path="/es/ancona" element={<AnconaES />} />
          <Route path="/es/olbia" element={<OlbiaES />} />
          <Route path="/es/encuentranos" element={<FindUsES />} />
          <Route path="/es/salas-de-reuniones" element={<MeetingRoomsES />} />
          <Route path="/es/terraza-privada" element={<PrivateTerraceES />} />
          <Route path="/es/oficinas-privadas" element={<PrivateOfficesES />} />
          <Route path="/es/registro-de-empresas" element={<BusinessRegistrationES />} />
          <Route path="/es/coworking" element={<CoworkingSpaceES />} />
          <Route path="/es/eventos" element={<EventsES />} />
          <Route path="/es/organiza-tu-evento" element={<HostYourEventES />} />
          <Route path="/es/academia" element={<AcademyES />} />
          <Route path="/es/beneficios" element={<BenefitsES />} />
          <Route path="/es/blog" element={<BlogES />} />
          <Route path="/es/salas/gran-sala-conferencias" element={<BigConferenceRoomES />} />
          <Route path="/es/salas/gran-sala-conferencias-2" element={<LargeConferenceRoomES />} />
          <Route path="/es/salas/sala-quarter" element={<QuarterConferenceRoomES />} />
          <Route path="/es/salas/sala-formacion" element={<TrainingRoomES />} />
          

          {/* Italian routes */}
          <Route path="/it" element={<IndexIT />} />
          <Route path="/it/malaga-palace" element={<MalagaPalaceIT />} />
          <Route path="/it/malaga-terrace" element={<MalagaTerraceIT />} />
          <Route path="/it/ancona" element={<AnconaIT />} />
          <Route path="/it/olbia" element={<OlbiaIT />} />
          <Route path="/it/trovaci" element={<FindUsIT />} />
          <Route path="/it/sale-riunioni" element={<MeetingRoomsIT />} />
          <Route path="/it/terrazza-privata" element={<PrivateTerraceIT />} />
          <Route path="/it/uffici-privati" element={<PrivateOfficesIT />} />
          <Route path="/it/registrazione-aziendale" element={<BusinessRegistrationIT />} />
          <Route path="/it/coworking" element={<CoworkingSpaceIT />} />
          <Route path="/it/eventi" element={<EventsIT />} />
          <Route path="/it/organizza-evento" element={<HostYourEventIT />} />
          <Route path="/it/academy" element={<AcademyIT />} />
          <Route path="/it/vantaggi" element={<BenefitsIT />} />
          <Route path="/it/blog" element={<BlogIT />} />
          <Route path="/it/sale/grande-sala-conferenze" element={<BigConferenceRoomIT />} />
          <Route path="/it/sale/grande-sala-conferenze-2" element={<LargeConferenceRoomIT />} />
          <Route path="/it/sale/sala-quarter" element={<QuarterConferenceRoomIT />} />
          <Route path="/it/sale/sala-formazione" element={<TrainingRoomIT />} />
          

          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
