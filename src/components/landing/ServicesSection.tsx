import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Monitor, Users, Wifi, Printer, Coffee, Calendar, Building, Sun,
} from "lucide-react";

const services = [
  { icon: Monitor, label: "Hot Desks", desc: "Flexible seating, show up and start working" },
  { icon: Building, label: "Private Offices", desc: "Dedicated space for focused teams" },
  { icon: Users, label: "Meeting Rooms", desc: "Professional spaces for your most important conversations", badge: "Best at Historic Center" },
  { icon: Wifi, label: "High-Speed WiFi", desc: "Blazing fast fiber connection everywhere" },
  { icon: Printer, label: "Printing & Scanning", desc: "Professional-grade equipment on demand" },
  { icon: Calendar, label: "Community Events", desc: "Talks, workshops, and networking nights" },
  { icon: Sun, label: "Rooftop Terrace", desc: "Work with the Mediterranean at your feet", badge: "Unbeatable at Seaside" },
  { icon: Coffee, label: "Kitchen & Café", desc: "Fuel your ideas with great coffee" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-16`}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Everything you need.{" "}
            <span className="text-primary">Both locations.</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            The same world-class amenities in two completely different worlds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isHistoricBadge = s.badge?.includes("Historic");
            return (
              <div
                key={s.label}
                className="group relative rounded-lg border border-border bg-card p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {s.badge && (
                  <span
                    className={`absolute -top-3 left-4 text-[10px] font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                      isHistoricBadge
                        ? "bg-historic-bg text-historic-text"
                        : "bg-seaside-bg text-seaside-text"
                    }`}
                  >
                    ★ {s.badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-body font-semibold text-foreground text-lg mb-2">
                  {s.label}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
