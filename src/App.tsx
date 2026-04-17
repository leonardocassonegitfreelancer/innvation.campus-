import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import CookieBanner from "@/components/CookieBanner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageDetector } from "./hooks/useLanguageDetection";
import ScrollToTop from "./components/ScrollToTop";

// EN pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MeetingRooms = lazy(() => import("./pages/en/MeetingRooms"));
const PrivateTerrace = lazy(() => import("./pages/en/PrivateTerrace"));
const PrivateOffices = lazy(() => import("./pages/en/PrivateOffices"));
const BusinessRegistration = lazy(() => import("./pages/en/BusinessRegistration"));
const CoworkingSpace = lazy(() => import("./pages/en/CoworkingSpace"));
const Events = lazy(() => import("./pages/en/Events"));
const HostYourEvent = lazy(() => import("./pages/en/HostYourEvent"));
const EventLeadCapture = lazy(() => import("./pages/en/EventLeadCapture"));
const OfficesLeadCapture = lazy(() => import("./pages/en/OfficesLeadCapture"));
const Academy = lazy(() => import("./pages/en/Academy"));
const Benefits = lazy(() => import("./pages/en/Benefits"));
const Ancona = lazy(() => import("./pages/en/Ancona"));
const Olbia = lazy(() => import("./pages/en/Olbia"));
const MalagaPalace = lazy(() => import("./pages/en/MalagaPalace"));
const MalagaTerrace = lazy(() => import("./pages/en/MalagaTerrace"));
const FindUs = lazy(() => import("./pages/en/FindUs"));
const Blog = lazy(() => import("./pages/en/Blog"));
const BlogPostPage = lazy(() => import("./pages/en/BlogPost"));
const Admin = lazy(() => import("./pages/Admin"));

// EN meeting room sub-pages
const BigConferenceRoom = lazy(() => import("./pages/en/BigConferenceRoom"));
const LargeConferenceRoom = lazy(() => import("./pages/en/LargeConferenceRoom"));
const QuarterConferenceRoom = lazy(() => import("./pages/en/QuarterConferenceRoom"));
const TrainingRoom = lazy(() => import("./pages/en/TrainingRoom"));
const PhoneBooth = lazy(() => import("./pages/en/PhoneBooth"));

// Legal
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const LegalNotice = lazy(() => import("./pages/LegalNotice"));

// About Us
const AboutUsEN = lazy(() => import("./pages/en/AboutUs"));
const AboutUsIT = lazy(() => import("./pages/it/AboutUs"));
const AboutUsES = lazy(() => import("./pages/es/AboutUs"));

// Gallery
const GalleryEN = lazy(() => import("./pages/en/Gallery"));
const GalleryIT = lazy(() => import("./pages/it/Gallery"));
const GalleryES = lazy(() => import("./pages/es/Gallery"));
const GallerySpacesEN = lazy(() => import("./pages/en/GallerySpaces"));
const GallerySpacesIT = lazy(() => import("./pages/it/GallerySpaces"));
const GallerySpacesES = lazy(() => import("./pages/es/GallerySpaces"));
const GalleryEventsEN = lazy(() => import("./pages/en/GalleryEvents"));
const GalleryEventsIT = lazy(() => import("./pages/it/GalleryEvents"));
const GalleryEventsES = lazy(() => import("./pages/es/GalleryEvents"));

// ES pages
const IndexES = lazy(() => import("./pages/es/Index"));
const MalagaPalaceES = lazy(() => import("./pages/es/MalagaPalace"));
const MalagaTerraceES = lazy(() => import("./pages/es/MalagaTerrace"));
const AnconaES = lazy(() => import("./pages/es/Ancona"));
const OlbiaES = lazy(() => import("./pages/es/Olbia"));
const FindUsES = lazy(() => import("./pages/es/FindUs"));
const MeetingRoomsES = lazy(() => import("./pages/es/MeetingRooms"));
const PrivateTerraceES = lazy(() => import("./pages/es/PrivateTerrace"));
const PrivateOfficesES = lazy(() => import("./pages/es/PrivateOffices"));
const BusinessRegistrationES = lazy(() => import("./pages/es/BusinessRegistration"));
const CoworkingSpaceES = lazy(() => import("./pages/es/CoworkingSpace"));
const EventsES = lazy(() => import("./pages/es/Events"));
const HostYourEventES = lazy(() => import("./pages/es/HostYourEvent"));
const EventLeadCaptureES = lazy(() => import("./pages/es/EventLeadCapture"));
const OfficesLeadCaptureES = lazy(() => import("./pages/es/OfficesLeadCapture"));
const AcademyES = lazy(() => import("./pages/es/Academy"));
const BenefitsES = lazy(() => import("./pages/es/Benefits"));
const BlogES = lazy(() => import("./pages/es/Blog"));
const BigConferenceRoomES = lazy(() => import("./pages/es/BigConferenceRoom"));
const LargeConferenceRoomES = lazy(() => import("./pages/es/LargeConferenceRoom"));
const QuarterConferenceRoomES = lazy(() => import("./pages/es/QuarterConferenceRoom"));
const TrainingRoomES = lazy(() => import("./pages/es/TrainingRoom"));
const PhoneBoothES = lazy(() => import("./pages/es/PhoneBooth"));

// ES event pages
const LadiesThatUXApr2026ES = lazy(() => import("./pages/es/events/LadiesThatUXApr2026"));
const LadiesThatUXApr2026ThankYouES = lazy(() => import("./pages/es/events/LadiesThatUXApr2026ThankYou"));
const PowerTalksApr2026ES = lazy(() => import("./pages/es/events/PowerTalksApr2026"));
const PowerTalksApr2026ThankYouES = lazy(() => import("./pages/es/events/PowerTalksApr2026ThankYou"));
const SheWinsApr2026ES = lazy(() => import("./pages/es/events/SheWinsApr2026"));
const SheWinsApr2026ThankYouES = lazy(() => import("./pages/es/events/SheWinsApr2026ThankYou"));
const MalagaAIApr2026ES = lazy(() => import("./pages/es/events/MalagaAIApr2026"));
const MalagaAIApr2026ThankYouES = lazy(() => import("./pages/es/events/MalagaAIApr2026ThankYou"));
const PowerTalksBApr2026ES = lazy(() => import("./pages/es/events/PowerTalksBApr2026"));
const PowerTalksBApr2026ThankYouES = lazy(() => import("./pages/es/events/PowerTalksBApr2026ThankYou"));

// IT pages
const IndexIT = lazy(() => import("./pages/it/Index"));
const MalagaPalaceIT = lazy(() => import("./pages/it/MalagaPalace"));
const MalagaTerraceIT = lazy(() => import("./pages/it/MalagaTerrace"));
const AnconaIT = lazy(() => import("./pages/it/Ancona"));
const OlbiaIT = lazy(() => import("./pages/it/Olbia"));
const FindUsIT = lazy(() => import("./pages/it/FindUs"));
const MeetingRoomsIT = lazy(() => import("./pages/it/MeetingRooms"));
const PrivateTerraceIT = lazy(() => import("./pages/it/PrivateTerrace"));
const PrivateOfficesIT = lazy(() => import("./pages/it/PrivateOffices"));
const BusinessRegistrationIT = lazy(() => import("./pages/it/BusinessRegistration"));
const CoworkingSpaceIT = lazy(() => import("./pages/it/CoworkingSpace"));
const EventsIT = lazy(() => import("./pages/it/Events"));
const HostYourEventIT = lazy(() => import("./pages/it/HostYourEvent"));
const EventLeadCaptureIT = lazy(() => import("./pages/it/EventLeadCapture"));
const OfficesLeadCaptureIT = lazy(() => import("./pages/it/OfficesLeadCapture"));
const AcademyIT = lazy(() => import("./pages/it/Academy"));
const BenefitsIT = lazy(() => import("./pages/it/Benefits"));
const BlogIT = lazy(() => import("./pages/it/Blog"));
const BigConferenceRoomIT = lazy(() => import("./pages/it/BigConferenceRoom"));
const LargeConferenceRoomIT = lazy(() => import("./pages/it/LargeConferenceRoom"));
const QuarterConferenceRoomIT = lazy(() => import("./pages/it/QuarterConferenceRoom"));
const TrainingRoomIT = lazy(() => import("./pages/it/TrainingRoom"));
const PhoneBoothIT = lazy(() => import("./pages/it/PhoneBooth"));

// IT event pages
const LadiesThatUXApr2026IT = lazy(() => import("./pages/it/events/LadiesThatUXApr2026"));
const LadiesThatUXApr2026ThankYouIT = lazy(() => import("./pages/it/events/LadiesThatUXApr2026ThankYou"));
const PowerTalksApr2026IT = lazy(() => import("./pages/it/events/PowerTalksApr2026"));
const PowerTalksApr2026ThankYouIT = lazy(() => import("./pages/it/events/PowerTalksApr2026ThankYou"));
const SheWinsApr2026IT = lazy(() => import("./pages/it/events/SheWinsApr2026"));
const SheWinsApr2026ThankYouIT = lazy(() => import("./pages/it/events/SheWinsApr2026ThankYou"));
const MalagaAIApr2026IT = lazy(() => import("./pages/it/events/MalagaAIApr2026"));
const MalagaAIApr2026ThankYouIT = lazy(() => import("./pages/it/events/MalagaAIApr2026ThankYou"));
const PowerTalksBApr2026IT = lazy(() => import("./pages/it/events/PowerTalksBApr2026"));
const PowerTalksBApr2026ThankYouIT = lazy(() => import("./pages/it/events/PowerTalksBApr2026ThankYou"));

// EN event pages
const LadiesThatUXApr2026EN = lazy(() => import("./pages/en/events/LadiesThatUXApr2026"));
const LadiesThatUXApr2026ThankYouEN = lazy(() => import("./pages/en/events/LadiesThatUXApr2026ThankYou"));
const PowerTalksApr2026EN = lazy(() => import("./pages/en/events/PowerTalksApr2026"));
const PowerTalksApr2026ThankYouEN = lazy(() => import("./pages/en/events/PowerTalksApr2026ThankYou"));
const SheWinsApr2026EN = lazy(() => import("./pages/en/events/SheWinsApr2026"));
const SheWinsApr2026ThankYouEN = lazy(() => import("./pages/en/events/SheWinsApr2026ThankYou"));
const MalagaAIApr2026EN = lazy(() => import("./pages/en/events/MalagaAIApr2026"));
const MalagaAIApr2026ThankYouEN = lazy(() => import("./pages/en/events/MalagaAIApr2026ThankYou"));
const PowerTalksBApr2026EN = lazy(() => import("./pages/en/events/PowerTalksBApr2026"));
const PowerTalksBApr2026ThankYouEN = lazy(() => import("./pages/en/events/PowerTalksBApr2026ThankYou"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageDetector />
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/en/meeting-rooms" element={<MeetingRooms />} />
            <Route path="/en/private-terrace" element={<PrivateTerrace />} />
            <Route path="/en/private-offices" element={<PrivateOffices />} />
            <Route path="/en/business-registration" element={<BusinessRegistration />} />
            <Route path="/en/coworking-space" element={<CoworkingSpace />} />
            <Route path="/en/events" element={<Events />} />
            <Route path="/en/host-your-event" element={<HostYourEvent />} />
            <Route path="/en/host-your-event/lead" element={<EventLeadCapture />} />
            <Route path="/en/private-offices/lead" element={<OfficesLeadCapture />} />
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
            <Route path="/en/meeting-rooms/phone-booth" element={<PhoneBooth />} />

            {/* About Us */}
            <Route path="/en/about-us" element={<AboutUsEN />} />
            <Route path="/it/chi-siamo" element={<AboutUsIT />} />
            <Route path="/es/quienes-somos" element={<AboutUsES />} />

            {/* Gallery */}
            <Route path="/en/gallery" element={<GalleryEN />} />
            <Route path="/en/gallery/spaces" element={<GallerySpacesEN />} />
            <Route path="/en/gallery/events" element={<GalleryEventsEN />} />
            <Route path="/it/galleria" element={<GalleryIT />} />
            <Route path="/it/galleria/spazi" element={<GallerySpacesIT />} />
            <Route path="/it/galleria/eventi" element={<GalleryEventsIT />} />
            <Route path="/es/galeria" element={<GalleryES />} />
            <Route path="/es/galeria/espacios" element={<GallerySpacesES />} />
            <Route path="/es/galeria/eventos" element={<GalleryEventsES />} />

            {/* EN event pages */}
            <Route path="/en/events/ladies-that-ux-malaga-apr-2026" element={<LadiesThatUXApr2026EN />} />
            <Route path="/en/events/ladies-that-ux-malaga-apr-2026/thank-you" element={<LadiesThatUXApr2026ThankYouEN />} />
            <Route path="/en/events/powertalks-malaga-apr-2026" element={<PowerTalksApr2026EN />} />
            <Route path="/en/events/powertalks-malaga-apr-2026/thank-you" element={<PowerTalksApr2026ThankYouEN />} />
            <Route path="/en/events/shewins-malaga-apr-2026" element={<SheWinsApr2026EN />} />
            <Route path="/en/events/shewins-malaga-apr-2026/thank-you" element={<SheWinsApr2026ThankYouEN />} />
            <Route path="/en/events/malaga-ai-networking-apr-2026" element={<MalagaAIApr2026EN />} />
            <Route path="/en/events/malaga-ai-networking-apr-2026/thank-you" element={<MalagaAIApr2026ThankYouEN />} />
            <Route path="/en/events/powertalks-malaga-apr-2026-b" element={<PowerTalksBApr2026EN />} />
            <Route path="/en/events/powertalks-malaga-apr-2026-b/thank-you" element={<PowerTalksBApr2026ThankYouEN />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/legal-notice" element={<LegalNotice />} />

            {/* ES routes */}
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
            <Route path="/es/organiza-tu-evento/lead" element={<EventLeadCaptureES />} />
            <Route path="/es/oficinas-privadas/lead" element={<OfficesLeadCaptureES />} />
            <Route path="/es/academia" element={<AcademyES />} />
            <Route path="/es/beneficios" element={<BenefitsES />} />
            <Route path="/es/blog" element={<BlogES />} />
            <Route path="/es/salas/gran-sala-conferencias" element={<BigConferenceRoomES />} />
            <Route path="/es/salas/gran-sala-conferencias-2" element={<LargeConferenceRoomES />} />
            <Route path="/es/salas/sala-quarter" element={<QuarterConferenceRoomES />} />
            <Route path="/es/salas/sala-formacion" element={<TrainingRoomES />} />
            <Route path="/es/salas/cabina-telefonica" element={<PhoneBoothES />} />

            {/* ES event pages */}
            <Route path="/es/eventos/ladies-that-ux-malaga-apr-2026" element={<LadiesThatUXApr2026ES />} />
            <Route path="/es/eventos/ladies-that-ux-malaga-apr-2026/gracias" element={<LadiesThatUXApr2026ThankYouES />} />
            <Route path="/es/eventos/powertalks-malaga-apr-2026" element={<PowerTalksApr2026ES />} />
            <Route path="/es/eventos/powertalks-malaga-apr-2026/gracias" element={<PowerTalksApr2026ThankYouES />} />
            <Route path="/es/eventos/shewins-malaga-apr-2026" element={<SheWinsApr2026ES />} />
            <Route path="/es/eventos/shewins-malaga-apr-2026/gracias" element={<SheWinsApr2026ThankYouES />} />
            <Route path="/es/eventos/malaga-ai-networking-apr-2026" element={<MalagaAIApr2026ES />} />
            <Route path="/es/eventos/malaga-ai-networking-apr-2026/gracias" element={<MalagaAIApr2026ThankYouES />} />
            <Route path="/es/eventos/powertalks-malaga-apr-2026-b" element={<PowerTalksBApr2026ES />} />
            <Route path="/es/eventos/powertalks-malaga-apr-2026-b/gracias" element={<PowerTalksBApr2026ThankYouES />} />

            {/* IT routes */}
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
            <Route path="/it/organizza-evento/lead" element={<EventLeadCaptureIT />} />
            <Route path="/it/uffici-privati/lead" element={<OfficesLeadCaptureIT />} />
            <Route path="/it/academy" element={<AcademyIT />} />
            <Route path="/it/vantaggi" element={<BenefitsIT />} />
            <Route path="/it/blog" element={<BlogIT />} />
            <Route path="/it/sale/grande-sala-conferenze" element={<BigConferenceRoomIT />} />
            <Route path="/it/sale/grande-sala-conferenze-2" element={<LargeConferenceRoomIT />} />
            <Route path="/it/sale/sala-quarter" element={<QuarterConferenceRoomIT />} />
            <Route path="/it/sale/sala-formazione" element={<TrainingRoomIT />} />
            <Route path="/it/sale/cabina-telefonica" element={<PhoneBoothIT />} />

            {/* IT event pages */}
            <Route path="/it/eventi/ladies-that-ux-malaga-apr-2026" element={<LadiesThatUXApr2026IT />} />
            <Route path="/it/eventi/ladies-that-ux-malaga-apr-2026/grazie" element={<LadiesThatUXApr2026ThankYouIT />} />
            <Route path="/it/eventi/powertalks-malaga-apr-2026" element={<PowerTalksApr2026IT />} />
            <Route path="/it/eventi/powertalks-malaga-apr-2026/grazie" element={<PowerTalksApr2026ThankYouIT />} />
            <Route path="/it/eventi/shewins-malaga-apr-2026" element={<SheWinsApr2026IT />} />
            <Route path="/it/eventi/shewins-malaga-apr-2026/grazie" element={<SheWinsApr2026ThankYouIT />} />
            <Route path="/it/eventi/malaga-ai-networking-apr-2026" element={<MalagaAIApr2026IT />} />
            <Route path="/it/eventi/malaga-ai-networking-apr-2026/grazie" element={<MalagaAIApr2026ThankYouIT />} />
            <Route path="/it/eventi/powertalks-malaga-apr-2026-b" element={<PowerTalksBApr2026IT />} />
            <Route path="/it/eventi/powertalks-malaga-apr-2026-b/grazie" element={<PowerTalksBApr2026ThankYouIT />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
