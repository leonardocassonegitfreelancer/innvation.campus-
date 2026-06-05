import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import serviceMeeting from "@/assets/service-meeting.webp";
import serviceTerrace from "@/assets/service-terrace.webp";
import servicePrivate from "@/assets/service-private.webp";
import serviceRegistration from "@/assets/service-registration.webp";
import serviceCoworking from "@/assets/service-coworking.webp";
import serviceCommunity from "@/assets/service-community.webp";
import serviceAcademy from "@/assets/service-academy.webp";
import servicePerks from "@/assets/service-perks.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const businessServices = [
  { img: serviceMeeting, label: "Meeting Rooms", subtitle: "With catering option", href: "/en/meeting-rooms" },
  { img: serviceTerrace, label: "Private Terrace", subtitle: "With catering option", href: "/en/private-terrace" },
  { img: servicePrivate, label: "Private Offices", subtitle: "Different sizes available", href: "/en/private-offices" },
  { img: serviceRegistration, label: "Business Registration", subtitle: "Relocate to Spain or Italy", href: "/en/business-registration" },
];

const individualServices = [
  { img: serviceCoworking, label: "Coworking Space", subtitle: "Plans & prices", href: "/en/coworking-space" },
  { img: serviceCommunity, label: "Community Events", subtitle: "New and past", href: "/en/events" },
  { img: serviceAcademy, label: "Academy", subtitle: "Get better day by day", href: "/en/academy" },
  { img: servicePerks, label: "Member Perks", subtitle: "Discounts & offers for our members", href: "/en/benefits" },
];

const getSrc = (img: any): string => typeof img === 'string' ? img : img.src;

function ServiceCard({ img, label, subtitle, href }: { img: any; label: string; subtitle: string; href: string }) {
  return (
    <a
      href={href}
      className="group relative aspect-[4/5] rounded-2xl overflow-hidden block shadow-[0_4px_24px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.28)] transition-shadow duration-500"
    >
      <img
        src={getSrc(img)}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-body text-[10px] uppercase tracking-[0.18em] text-white/70 mb-1" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}>
          {subtitle}
        </p>
        <h3 className="font-body font-bold text-base md:text-lg uppercase tracking-wide text-white leading-tight" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}>
          {label}
        </h3>
      </div>
    </a>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: refBiz, isVisible: visBiz } = useScrollAnimation(0.1);
  const { ref: refInd, isVisible: visInd } = useScrollAnimation(0.1);
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<"business" | "individual">("business");

  const mobileCards = activeTab === "business" ? businessServices : individualServices;

  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-12 md:mb-20`}>
          <p className="font-body uppercase tracking-[0.4em] text-primary mb-4 text-xl font-semibold">
            What We Offer
          </p>
          <h2 className="font-display md:text-5xl text-foreground text-5xl font-semibold">
            Services
          </h2>
        </div>

        {/* MOBILE: Toggle buttons + single grid */}
        <div className="md:hidden">
          <div className="flex gap-3 mb-8 justify-center">
            <button
              onClick={() => setActiveTab("business")}
              className={`flex-1 max-w-[180px] py-3 px-4 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "business"
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary bg-transparent"
              }`}
            >
              For Businesses
            </button>
            <button
              onClick={() => setActiveTab("individual")}
              className={`flex-1 max-w-[180px] py-3 px-4 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "individual"
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary bg-transparent"
              }`}
            >
              For Individuals
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {mobileCards.map((s) => (
              <ServiceCard key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* DESKTOP: Both sections visible */}
        <div className="hidden md:block">
          <div ref={refBiz} className={`scroll-animate ${visBiz ? "visible" : ""} mb-20`}>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.2em] mb-8 text-center">
              For Businesses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {businessServices.map((s) => (
                <ServiceCard key={s.label} {...s} />
              ))}
            </div>
          </div>

          <div ref={refInd} className={`scroll-animate ${visInd ? "visible" : ""}`}>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.2em] mb-8 text-center">
              For Individuals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {individualServices.map((s) => (
                <ServiceCard key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
