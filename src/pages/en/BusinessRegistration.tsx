import RegistrationIntro from "@/components/landing/RegistrationIntro";
import RegistrationPricing from "@/components/landing/RegistrationPricing";
import RegistrationIncludes from "@/components/landing/RegistrationIncludes";
import { ArrowRight } from "lucide-react";

const cta = {
  en: { heading: "Ready to get started?", sub: "Our team will guide you through the whole process.", btn: "Request information", href: "/en/lead?service=business-registration" },
  es: { heading: "¿Listo para empezar?", sub: "Nuestro equipo te guiará en todo el proceso.", btn: "Solicitar información", href: "/es/lead?service=business-registration" },
  it: { heading: "Pronto per iniziare?", sub: "Il nostro team ti guiderà in tutto il processo.", btn: "Richiedi informazioni", href: "/it/lead?service=business-registration" },
};

export default function BusinessRegistration({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const c = cta[lang];
  return (
    <>
      <RegistrationIntro lang={lang} />
      <RegistrationPricing lang={lang} />
      <RegistrationIncludes lang={lang} />

      <section className="py-24 bg-neutral-dark text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">{c.heading}</h2>
          <p className="font-body text-white/60 mb-10">{c.sub}</p>
          <a
            href={c.href}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all"
          >
            {c.btn} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
