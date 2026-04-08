import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import serviceMeeting from "@/assets/service-meeting.jpg";
import serviceTerrace from "@/assets/service-terrace.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import serviceRegistration from "@/assets/service-registration.jpg";
import serviceCoworking from "@/assets/service-coworking.jpg";
import serviceCommunity from "@/assets/service-community.jpg";
import serviceAcademy from "@/assets/service-academy.jpg";
import servicePerks from "@/assets/service-perks.jpg";

const businessServices = [
  { img: serviceMeeting, label: "Salas de Conferencias Privadas", subtitle: "Con opción de catering", href: "/es/salas-de-reuniones" },
  { img: serviceTerrace, label: "Terraza Privada", subtitle: "Con opción de catering", href: "/es/terraza-privada" },
  { img: servicePrivate, label: "Oficinas Privadas", subtitle: "Diferentes tamaños disponibles", href: "/es/oficinas-privadas" },
  { img: serviceRegistration, label: "Registro de Empresas", subtitle: "Reubícate a España o Italia", href: "/es/registro-de-empresas" },
];

const individualServices = [
  { img: serviceCoworking, label: "Espacio de Coworking", subtitle: "Planes y precios", href: "/es/coworking" },
  { img: serviceCommunity, label: "Eventos Comunitarios", subtitle: "Nuevos y pasados", href: "/es/eventos" },
  { img: serviceAcademy, label: "Academia", subtitle: "Mejora día a día", href: "/es/academia" },
  { img: servicePerks, label: "Beneficios para Miembros", subtitle: "Descuentos y ofertas para nuestros miembros", href: "/es/beneficios" },
];

function ServiceCard({ img, label, subtitle, href }: { img: string; label: string; subtitle: string; href: string }) {
  return (
    <Link to={href} className="group relative aspect-[4/5] rounded-xl overflow-hidden block">
      <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-body font-bold text-sm md:text-base uppercase tracking-wider text-primary-foreground">{label}</h3>
        <p className="font-body text-xs md:text-sm text-primary-foreground/70 mt-1">{subtitle}</p>
      </div>
    </Link>
  );
}

export default function ServicesSectionES() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: refBiz, isVisible: visBiz } = useScrollAnimation(0.1);
  const { ref: refInd, isVisible: visInd } = useScrollAnimation(0.1);
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<"business" | "individual">("business");
  const mobileCards = activeTab === "business" ? businessServices : individualServices;

  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-12 md:mb-20`}>
          <p className="font-body uppercase tracking-[0.4em] text-primary mb-4 text-xl font-semibold">Lo Que Ofrecemos</p>
          <h2 className="font-display md:text-5xl text-foreground text-5xl font-semibold">Servicios</h2>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <div className="flex gap-3 mb-8 justify-center">
            <button onClick={() => setActiveTab("business")} className={`flex-1 max-w-[180px] py-3 px-4 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${activeTab === "business" ? "bg-primary text-primary-foreground" : "border border-primary text-primary bg-transparent"}`}>
              Para Empresas
            </button>
            <button onClick={() => setActiveTab("individual")} className={`flex-1 max-w-[180px] py-3 px-4 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${activeTab === "individual" ? "bg-primary text-primary-foreground" : "border border-primary text-primary bg-transparent"}`}>
              Para Individuos
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {mobileCards.map((s) => <ServiceCard key={s.label} {...s} />)}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block">
          <div ref={refBiz} className={`scroll-animate ${visBiz ? "visible" : ""} mb-20`}>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.2em] mb-8 text-center">Para Empresas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {businessServices.map((s) => <ServiceCard key={s.label} {...s} />)}
            </div>
          </div>
          <div ref={refInd} className={`scroll-animate ${visInd ? "visible" : ""}`}>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.2em] mb-8 text-center">Para Individuos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {individualServices.map((s) => <ServiceCard key={s.label} {...s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
