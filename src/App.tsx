import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConferenceRoom from "./pages/en/ConferenceRoom";
import PrivateTerrace from "./pages/en/PrivateTerrace";
import PrivateOffices from "./pages/en/PrivateOffices";
import BusinessRegistration from "./pages/en/BusinessRegistration";
import CoworkingSpace from "./pages/en/CoworkingSpace";
import Events from "./pages/en/Events";
import Academy from "./pages/en/Academy";
import Benefits from "./pages/en/Benefits";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/en/conference-rooms" element={<ConferenceRoom />} />
          <Route path="/en/private-terrace" element={<PrivateTerrace />} />
          <Route path="/en/private-offices" element={<PrivateOffices />} />
          <Route path="/en/business-registration" element={<BusinessRegistration />} />
          <Route path="/en/coworking-space" element={<CoworkingSpace />} />
          <Route path="/en/events" element={<Events />} />
          <Route path="/en/academy" element={<Academy />} />
          <Route path="/en/benefits" element={<Benefits />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
