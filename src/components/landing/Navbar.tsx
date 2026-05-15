import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import logoWhite from "@/assets/logo-white.webp";
import { routeMap } from "@/lib/i18n";
import { useLang, PageWrapper } from "@/lib/lang-context";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

const linksEN = { location: [{ label: "Málaga Palace", href: "/en/malaga-palace" }, { label: "Málaga Terrace", href: "/en/malaga-terrace" }, { label: "Ancona", href: "/en/ancona" }, { label: "Olbia", href: "/en/olbia" }], business: [{ label: "Meeting Rooms", href: "/en/meeting-rooms" }, { label: "Private Terrace", href: "/en/private-terrace" }, { label: "Private Offices", href: "/en/private-offices" }, { label: "Business Registration", href: "/en/business-registration" }], individual: [{ label: "Coworking & Pricing", href: "/en/coworking-space" }, { label: "Community Events", href: "/en/events" }, { label: "Academy", href: "/en/academy" }, { label: "Member Perks", href: "/en/benefits" }], explore: [{ label: "Gallery", href: "/en/gallery" }, { label: "Blog", href: "/en/blog" }, { label: "About Us", href: "/en/about-us" }], nav: [{ label: "Contact", href: "/en/contact" }], labels: { locations: "Locations", forBusinesses: "For Businesses", forIndividuals: "For Individuals", explore: "Explore", getInTouch: "Get in Touch" }, home: "/" };
const linksES = { location: [{ label: "Málaga Palace", href: "/es/malaga-palace" }, { label: "Málaga Terrace", href: "/es/malaga-terrace" }, { label: "Ancona", href: "/es/ancona" }, { label: "Olbia", href: "/es/olbia" }], business: [{ label: "Salas de Reuniones", href: "/es/salas-de-reuniones" }, { label: "Terraza Privada", href: "/es/terraza-privada" }, { label: "Oficinas Privadas", href: "/es/oficinas-privadas" }, { label: "Registro de Empresas", href: "/es/registro-de-empresas" }], individual: [{ label: "Coworking y Precios", href: "/es/coworking" }, { label: "Eventos", href: "/es/eventos" }, { label: "Academia", href: "/es/academia" }, { label: "Beneficios", href: "/es/beneficios" }], explore: [{ label: "Galería", href: "/es/galeria" }, { label: "Blog", href: "/es/blog" }, { label: "Quiénes Somos", href: "/es/quienes-somos" }], nav: [{ label: "Contacto", href: "/es/contacto" }], labels: { locations: "Ubicaciones", forBusinesses: "Para Empresas", forIndividuals: "Para Individuos", explore: "Explorar", getInTouch: "Contacto" }, home: "/es" };
const linksIT = { location: [{ label: "Málaga Palace", href: "/it/malaga-palace" }, { label: "Málaga Terrace", href: "/it/malaga-terrace" }, { label: "Ancona", href: "/it/ancona" }, { label: "Olbia", href: "/it/olbia" }], business: [{ label: "Sale Riunioni", href: "/it/sale-riunioni" }, { label: "Terrazza Privata", href: "/it/terrazza-privata" }, { label: "Uffici Privati", href: "/it/uffici-privati" }, { label: "Registrazione Aziendale", href: "/it/registrazione-aziendale" }], individual: [{ label: "Coworking e Prezzi", href: "/it/coworking" }, { label: "Eventi", href: "/it/eventi" }, { label: "Academy", href: "/it/academy" }, { label: "Vantaggi", href: "/it/vantaggi" }], explore: [{ label: "Galleria", href: "/it/galleria" }, { label: "Blog", href: "/it/blog" }, { label: "Chi Siamo", href: "/it/chi-siamo" }], nav: [{ label: "Contatti", href: "/it/contatti" }], labels: { locations: "Sedi", forBusinesses: "Per Aziende", forIndividuals: "Per Individui", explore: "Esplora", getInTouch: "Contatti" }, home: "/it" };

function DropdownMenu({ label, links, open, onToggle, onClose }: { label: string; links: { label: string; href: string }[]; open: boolean; onToggle: () => void; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (!open) return; const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) onClose(); }; document.addEventListener("mousedown", handler); return () => document.removeEventListener("mousedown", handler); }, [onClose, open]);
  return (<div ref={ref} className="relative" onMouseEnter={onToggle} onMouseLeave={onClose}><button onClick={onToggle} className="text-white/70 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 py-2">{label}<ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} /></button>{open && (<div className="absolute top-full left-0 mt-0 w-56 bg-neutral-dark/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2 z-50">{links.map((link) => (<a key={link.href} href={link.href} onClick={onClose} className="block px-4 py-2.5 text-sm font-body text-white/70 hover:text-white hover:bg-white/5 transition-colors">{link.label}</a>))}</div>)}</div>);
}

function LanguageSwitcher() {
  const lang = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentLang = lang === "es" ? "ES" : lang === "it" ? "IT" : "EN";

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleMouseEnter = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true); };
  const handleMouseLeave = () => { timeoutRef.current = setTimeout(() => setOpen(false), 150); };

  const switchLanguage = (toLang: "en" | "es" | "it") => {
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    const target = routeMap[toLang]?.[path] || (toLang === "es" ? "/es" : toLang === "it" ? "/it" : "/");
    window.location.href = target;
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-body font-medium transition-colors py-2">
        <Globe size={16} />{currentLang}<ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-0 w-28 bg-neutral-dark/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-1 z-50">
          <button onClick={() => switchLanguage("en")} className={`w-full text-left px-4 py-2 text-sm font-body transition-colors ${currentLang === "EN" ? "text-primary" : "text-white/70 hover:text-white hover:bg-white/5"}`}>English</button>
          <button onClick={() => switchLanguage("es")} className={`w-full text-left px-4 py-2 text-sm font-body transition-colors ${currentLang === "ES" ? "text-primary" : "text-white/70 hover:text-white hover:bg-white/5"}`}>Español</button>
          <button onClick={() => switchLanguage("it")} className={`w-full text-left px-4 py-2 text-sm font-body transition-colors ${currentLang === "IT" ? "text-primary" : "text-white/70 hover:text-white hover:bg-white/5"}`}>Italiano</button>
        </div>
      )}
    </div>
  );
}

function MobileLangSwitcher() {
  const lang = useLang();
  const switchLanguage = (toLang: "en" | "es" | "it") => {
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    const target = routeMap[toLang]?.[path] || (toLang === "es" ? "/es" : toLang === "it" ? "/it" : "/");
    window.location.href = target;
  };
  const current = lang === "es" ? "es" : lang === "it" ? "it" : "en";
  return (
    <div className="pt-4 border-t border-white/10 flex items-center gap-2">
      {(["en", "es", "it"] as const).map((l) => (
        <button
          key={l}
          onClick={() => switchLanguage(l)}
          className={`font-body text-sm uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all duration-200 ${
            current === l
              ? "border-primary text-primary"
              : "border-white/20 text-white/50 hover:text-white hover:border-white/40"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function MobileSection({ label, links, open, onToggle, onClose }: { label: string; links: { label: string; href: string }[]; open: boolean; onToggle: () => void; onClose: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-body text-sm font-semibold uppercase tracking-widest text-white/50">
          {label}
        </span>
        <ChevronDown
          size={16}
          className={`text-white/40 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-4" : "max-h-0"}`}>
        <div className="flex flex-col gap-1 pl-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-body text-lg text-white/80 hover:text-primary py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ lang: langProp }: { lang?: "en" | "es" | "it" } = {}) {
  const contextLang = useLang();
  const lang = langProp ?? contextLang;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const links = lang === "es" ? linksES : lang === "it" ? linksIT : linksEN;

  const toggleMobileSection = (key: string) =>
    setOpenMobileSection((prev) => (prev === key ? null : key));

  const closeMobile = () => { setMobileOpen(false); setOpenMobileSection(null); };

  return (
    <PageWrapper lang={lang}>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-neutral-dark/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href={links.home} className="flex items-center">
              <img src={_s(logoWhite)} alt="Innovation/Campus" className="h-7 md:h-12 w-auto" />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              <DropdownMenu label={links.labels.locations} links={links.location} open={openDropdown === "locations"} onToggle={() => setOpenDropdown(openDropdown === "locations" ? null : "locations")} onClose={() => setOpenDropdown(null)} />
              <DropdownMenu label={links.labels.forBusinesses} links={links.business} open={openDropdown === "business"} onToggle={() => setOpenDropdown(openDropdown === "business" ? null : "business")} onClose={() => setOpenDropdown(null)} />
              <DropdownMenu label={links.labels.forIndividuals} links={links.individual} open={openDropdown === "individual"} onToggle={() => setOpenDropdown(openDropdown === "individual" ? null : "individual")} onClose={() => setOpenDropdown(null)} />
              <DropdownMenu label={links.labels.explore} links={links.explore} open={openDropdown === "explore"} onToggle={() => setOpenDropdown(openDropdown === "explore" ? null : "explore")} onClose={() => setOpenDropdown(null)} />
              <LanguageSwitcher />
              <div className="flex items-center ml-2 border-l border-white/10 pl-6 gap-3">
                {links.nav.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-body text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 text-white/80 hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-2">
              {links.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:border-primary hover:text-primary transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-white hover:text-primary transition-colors p-1 ml-1"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-neutral-dark border-t border-white/10 max-h-[calc(100vh-64px)] overflow-y-auto">
            <div className="px-6 pt-2 pb-8">
              <MobileSection
                label={links.labels.locations}
                links={links.location}
                open={openMobileSection === "locations"}
                onToggle={() => toggleMobileSection("locations")}
                onClose={closeMobile}
              />
              <MobileSection
                label={links.labels.forBusinesses}
                links={links.business}
                open={openMobileSection === "business"}
                onToggle={() => toggleMobileSection("business")}
                onClose={closeMobile}
              />
              <MobileSection
                label={links.labels.forIndividuals}
                links={links.individual}
                open={openMobileSection === "individual"}
                onToggle={() => toggleMobileSection("individual")}
                onClose={closeMobile}
              />
              <MobileSection
                label={links.labels.explore}
                links={links.explore}
                open={openMobileSection === "explore"}
                onToggle={() => toggleMobileSection("explore")}
                onClose={closeMobile}
              />

              <MobileLangSwitcher />
            </div>
          </div>
        )}
      </nav>
    </PageWrapper>
  );
}
