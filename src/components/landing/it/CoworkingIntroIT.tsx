import { Wifi, Users, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: Wifi, label: "WiFi Veloce", desc: "Fibra ottica, connessione affidabile" },
  { icon: MapPin, label: "2 Sedi", desc: "Centro Storico e Lungomare" },
  { icon: Users, label: "Comunità Attiva", desc: "Eventi, networking e vantaggi" },
];

export default function CoworkingIntroIT() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 md:py-28 bg-neutral-dark text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} max-w-5xl mx-auto px-6 text-center`}>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
          Il Tuo Spazio di Lavoro a Málaga
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Trova il Piano Perfetto
        </h2>
        <p className="font-body text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-14">
          Che tu abbia bisogno di una scrivania per un giorno o di una sede permanente per il tuo team,
          abbiamo opzioni di coworking flessibili pensate per il tuo modo di lavorare.
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
