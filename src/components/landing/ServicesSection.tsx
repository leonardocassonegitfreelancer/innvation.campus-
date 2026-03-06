import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Presentation,
  UmbrellaOff,
  Building2,
  Globe,
  Users,
  CalendarHeart,
  GraduationCap,
  BadgePercent,
} from "lucide-react";

const businessServices = [
  {
    icon: Presentation,
    title: "Private Conference Rooms",
    desc: "Fully equipped rooms for meetings, workshops, and presentations — catering available on request.",
  },
  {
    icon: UmbrellaOff,
    title: "Private Terrace",
    desc: "Host your team or clients in a stunning outdoor setting with optional catering service.",
  },
  {
    icon: Building2,
    title: "Private Offices",
    desc: "Dedicated offices in different sizes for teams of all scales — from solo to enterprise.",
  },
  {
    icon: Globe,
    title: "Business Registration",
    desc: "Relocate your business to Spain or Italy with our guided company registration support.",
  },
];

const individualServices = [
  {
    icon: Users,
    title: "Coworking Space",
    desc: "Flexible plans and pricing for freelancers and remote professionals — day, week, or month.",
  },
  {
    icon: CalendarHeart,
    title: "Community Events",
    desc: "Networking, talks, and social gatherings — discover upcoming events or revisit past ones.",
  },
  {
    icon: GraduationCap,
    title: "Academy",
    desc: "Workshops, courses, and skill-building sessions to help you grow every day.",
  },
  {
    icon: BadgePercent,
    title: "Member Perks",
    desc: "Exclusive discounts and special offers from our partners — just for our members.",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-20`}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Services
          </h2>
        </div>

        {/* For Businesses */}
        <ServiceCategory title="For Businesses" services={businessServices} />

        {/* For Individuals */}
        <ServiceCategory title="For Individuals" services={individualServices} className="mt-16 md:mt-20" />
      </div>
    </section>
  );
}

function ServiceCategory({
  title,
  services,
  className = "",
}: {
  title: string;
  services: typeof businessServices;
  className?: string;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} ${className}`}>
      <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-8 text-center md:text-left">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => (
          <a
            key={s.title}
            href="#contact"
            className="group rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-body font-semibold text-sm text-foreground mb-2">
              {s.title}
            </h4>
            <p className="font-body text-xs leading-relaxed text-muted-foreground">
              {s.desc}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
