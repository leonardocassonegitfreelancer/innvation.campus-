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

function ServiceCard({ img, label, subtitle, href }: { img: string; label: string; subtitle: string; href: string }) {
  return (
    <Link
      to={href}
      className="group relative aspect-[4/5] rounded-xl overflow-hidden block"
    >
      <img
        src={img}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-body font-bold text-sm md:text-base uppercase tracking-wider text-primary-foreground">
          {label}
        </h3>
        <p className="font-body text-xs md:text-sm text-primary-foreground/70 mt-1">
          {subtitle}
        </p>
      </div>
    </Link>
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
      <div className="max-w-6xl mx-auto px-6">
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