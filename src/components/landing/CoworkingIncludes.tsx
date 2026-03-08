import {
  Wifi,
  Coffee,
  Printer,
  Lock,
  UtensilsCrossed,
  Monitor,
  Wind,
  CalendarHeart,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Coffee, label: "Coffee & Tea" },
  { icon: Printer, label: "Printing" },
  { icon: Lock, label: "Personal Locker" },
  { icon: UtensilsCrossed, label: "Fully Equipped Kitchen" },
  { icon: Monitor, label: "External Monitor" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: CalendarHeart, label: "Community Events" },
];

export default function CoworkingIncludes() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={headerRef} className={`scroll-animate ${headerVisible ? "visible" : ""} text-center mb-14`}>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
            Amenities
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What's Included
          </h2>
        </div>

        <div ref={gridRef} className={`scroll-animate ${gridVisible ? "visible" : ""} grid grid-cols-2 sm:grid-cols-4 gap-8`}>
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-body text-sm font-semibold text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
