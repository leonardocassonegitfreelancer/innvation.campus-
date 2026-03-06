import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function MobileToggle() {
  const [isSeaside, setIsSeaside] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsSeaside(checked);
    const target = checked ? "seaside-card" : "historic-card";
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="md:hidden sticky top-16 z-40 bg-neutral-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-center gap-4 py-3 px-6">
        <span
          className={`font-display text-sm italic transition-colors duration-500 ${
            !isSeaside ? "text-historic-text" : "text-white/40"
          }`}
        >
          Historic
        </span>
        <Switch
          checked={isSeaside}
          onCheckedChange={handleToggle}
          className="data-[state=unchecked]:bg-historic-muted data-[state=checked]:bg-seaside-muted"
        />
        <span
          className={`font-body text-sm font-light transition-colors duration-500 ${
            isSeaside ? "text-seaside-bg" : "text-white/40"
          }`}
        >
          Seaside
        </span>
      </div>
    </section>
  );
}
