import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import EventHero from "@/components/landing/EventHero";
import EventSocialProof from "@/components/landing/EventSocialProof";
import EventSpacesGrid from "@/components/landing/EventSpacesGrid";
import EventDetails from "@/components/landing/EventDetails";
import EventConversionForm from "@/components/landing/EventConversionForm";

export default function HostYourEvent({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  return (
    <>
      <SEOHead
        title={lang === "it" ? "Organizza il Tuo Evento" : lang === "es" ? "Organiza Tu Evento" : "Host Your Event"}
        description={
          lang === "it" 
            ? "Organizza il tuo prossimo evento a Innovation Campus. Location uniche a Málaga per conferenze, workshop, networking e celebrazioni private."
            : lang === "es"
            ? "Organiza tu próximo evento en Innovation Campus. Espacios únicos en Málaga para conferencias, talleres, networking y celebraciones privadas."
            : "Host your next event at Innovation Campus. Unique spaces in Málaga for conferences, workshops, networking, and private celebrations."
        }
        path={lang === "it" ? "/it/organizza-evento" : lang === "es" ? "/es/organiza-tu-evento" : "/en/host-your-event"}
      />
      <Navbar lang={lang} />
      <main className="pt-20">
        <EventHero lang={lang} />
        <EventSocialProof lang={lang} />
        <EventSpacesGrid lang={lang} />
        <EventDetails lang={lang} />
        <EventConversionForm lang={lang} />
      </main>
      <Footer />
    </>
  );
}
