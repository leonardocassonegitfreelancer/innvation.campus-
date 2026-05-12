import { ArrowLeft, Users, CheckCircle2, MapPin, Clock } from "lucide-react";
import LeadForm from "@/components/landing/LeadForm";
import { spacesDataset } from "@/data/spaces";

const _s = (img: unknown): string =>
  typeof img === "string" ? img : (img as any)?.src ?? "";

const backLinks: Record<"en" | "es" | "it", { meetingRooms: { href: string; label: string }; privateTerrace: { href: string; label: string } }> = {
  en: {
    meetingRooms: { href: "/en/meeting-rooms", label: "Back to meeting rooms" },
    privateTerrace: { href: "/en/private-terrace", label: "Back to private terrace" },
  },
  es: {
    meetingRooms: { href: "/es/salas-de-reuniones", label: "Volver a las salas" },
    privateTerrace: { href: "/es/terraza-privada", label: "Volver a la terraza privada" },
  },
  it: {
    meetingRooms: { href: "/it/sale-riunioni", label: "Torna alle sale riunioni" },
    privateTerrace: { href: "/it/terrazza-privata", label: "Torna alla terrazza privata" },
  },
};

const locationLabels: Record<"en" | "es" | "it", Record<"city" | "seaside", string>> = {
  en: { city: "Historic Center — Málaga Palace", seaside: "Sea Side — Málaga Terrace" },
  es: { city: "Centro Histórico — Málaga Palace", seaside: "Frente al Mar — Málaga Terrace" },
  it: { city: "Centro Storico — Málaga Palace", seaside: "Lungomare — Málaga Terrace" },
};

const nearbyHeadings: Record<"en" | "es" | "it", string> = {
  en: "Other spaces you might like",
  es: "Otros espacios que podrían interesarte",
  it: "Altri spazi che potrebbero interessarti",
};

export default function EventLeadCapture({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const spaceSlug =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("space") ?? ""
      : "";

  const space = spacesDataset.find((s) => s.slug === spaceSlug);

  if (!space) {
    if (typeof window !== "undefined") {
      window.location.href = backLinks[lang].meetingRooms.href;
    }
    return null;
  }

  const tr = space.translations[lang] ?? space.translations.en;
  const amenities = space.amenities[lang] ?? space.amenities.en;
  const otherSpaces = spacesDataset
    .filter((s) => s.slug !== space.slug && s.location === space.location)
    .slice(0, 3);

  const backLink = space.baseRoute === "meeting-rooms"
    ? backLinks[lang].meetingRooms
    : backLinks[lang].privateTerrace;

  const leadHrefBase = `/${lang}/lead?service=${space.baseRoute}`;

  return (
    <main className="pt-20 bg-background min-h-screen">

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <a
          href={backLink.href}
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> {backLink.label}
        </a>
      </div>

      {/* Main checkout layout */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 items-start">

        {/* LEFT — Sticky space summary */}
        <aside className="lg:sticky lg:top-24 space-y-4">
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-card">
            <div className="relative aspect-[4/3]">
              <img
                src={_s(space.image)}
                alt={tr.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm border border-border px-3 py-1 rounded-full font-body text-xs font-bold uppercase tracking-wider text-primary">
                {tr.label}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h1 className="font-display font-bold text-2xl text-foreground">{tr.name}</h1>
                <p className="font-body text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                  <Users className="w-3.5 h-3.5" /> {tr.capacityText}
                </p>
              </div>

              <p className="font-body text-xs text-muted-foreground flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {locationLabels[lang][space.location]}
              </p>

              <p className="font-body text-xs text-muted-foreground flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                Mon–Thu 9:30–18:30 · Fri 9:30–17:00
              </p>

              <div className="border-t border-border pt-4 space-y-2">
                {amenities.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 font-body text-sm text-foreground/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other spaces — desktop only, no distractions on mobile checkout */}
          {otherSpaces.length > 0 && (
            <div className="hidden lg:block space-y-3">
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                {nearbyHeadings[lang]}
              </p>
              {otherSpaces.map((alt) => {
                const altTr = alt.translations[lang] ?? alt.translations.en;
                return (
                  <a
                    key={alt.slug}
                    href={`${leadHrefBase}&space=${alt.slug}`}
                    className="flex gap-3 items-center bg-card border border-border rounded-xl p-3 hover:border-primary/50 hover:shadow-sm transition-all group"
                  >
                    <img
                      src={_s(alt.image)}
                      alt={altTr.name}
                      className="w-16 h-16 object-cover rounded-lg shrink-0"
                    />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {altTr.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
                        <Users className="w-3 h-3" /> {altTr.capacityText}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </aside>

        {/* RIGHT — Form */}
        <div>
          <LeadForm lang={lang} embedded />
        </div>
      </div>
    </main>
  );
}
