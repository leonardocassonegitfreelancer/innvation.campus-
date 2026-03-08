import { Wifi, Users, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: Wifi, label: "200Mbps WiFi", desc: "Fiber-optic, reliable connection" },
  { icon: MapPin, label: "2 Locations", desc: "Historic Center & Seaside" },
  { icon: Users, label: "Active Community", desc: "Events, networking & perks" },
];

export default function CoworkingIntro() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-neutral-dark text-primary-foreground">
      <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} max-w-5xl mx-auto px-6 text-center`}>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
          Your Workspace in Málaga
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Find Your Perfect Plan
        </h2>
        <p className="font-body text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-14">
          Whether you need a desk for a day or a permanent home for your team, we have flexible
          coworking options designed around the way you work.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <h.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display text-lg font-bold">{h.label}</p>
              <p className="font-body text-sm text-primary-foreground/60">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
