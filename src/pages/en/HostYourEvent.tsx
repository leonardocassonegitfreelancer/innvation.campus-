import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import EventHero from "@/components/landing/EventHero";
import EventSocialProof from "@/components/landing/EventSocialProof";
import EventSpacesGrid from "@/components/landing/EventSpacesGrid";
import EventDetails from "@/components/landing/EventDetails";
import EventConversionForm from "@/components/landing/EventConversionForm";

export default function HostYourEvent({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
    <>
      <EventHero lang={lang} />
      <EventSocialProof lang={lang} />
      <EventSpacesGrid lang={lang} />
      <EventDetails lang={lang} />
      <EventConversionForm lang={lang} />
    </>
  );
}
