import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";

// Route mappings for language switching
const routeMap: Record<string, string> = {
  // EN -> ES
  "/": "/es",
  "/en/malaga-palace": "/es/malaga-palace",
  "/en/malaga-terrace": "/es/malaga-terrace",
  "/en/ancona": "/es/ancona",
  "/en/olbia": "/es/olbia",
  "/en/find-us": "/es/encuentranos",
  "/en/conference-rooms": "/es/salas-de-conferencias",
  "/en/private-terrace": "/es/terraza-privada",
  "/en/private-offices": "/es/oficinas-privadas",
  "/en/business-registration": "/es/registro-de-empresas",
  "/en/coworking-space": "/es/coworking",
  "/en/events": "/es/eventos",
  "/en/host-your-event": "/es/organiza-tu-evento",
  "/en/academy": "/es/academia",
  "/en/benefits": "/es/beneficios",
  "/blog": "/es/blog",
  // ES -> EN
  "/es": "/",
  "/es/malaga-palace": "/en/malaga-palace",
  "/es/malaga-terrace": "/en/malaga-terrace",
  "/es/ancona": "/en/ancona",
  "/es/olbia": "/en/olbia",
  "/es/encuentranos": "/en/find-us",
  "/es/salas-de-conferencias": "/en/conference-rooms",
  "/es/terraza-privada": "/en/private-terrace",
  "/es/oficinas-privadas": "/en/private-offices",
  "/es/registro-de-empresas": "/en/business-registration",
  "/es/coworking": "/en/coworking-space",
  "/es/eventos": "/en/events",
  "/es/organiza-tu-evento": "/en/host-your-event",
  "/es/academia": "/en/academy",
  "/es/beneficios": "/en/benefits",
  "/es/blog": "/blog",
};

const locationLinksEN = [
  { label: "Málaga Palace", href: "/en/malaga-palace" },
  { label: "Málaga Terrace", href: "/en/malaga-terrace" },
  { label: "Ancona", href: "/en/ancona" },
  { label: "Olbia", href: "/en/olbia" },
];

const businessLinksEN = [
  { label: "Private Conference Rooms", href: "/en/conference-rooms" },
  { label: "Private Terrace", href: "/en/private-terrace" },
  { label: "Private Offices", href: "/en/private-offices" },
  { label: "Business Registration", href: "/en/business-registration" },
];

const individualLinksEN = [
  { label: "Coworking & Pricing", href: "/en/coworking-space" },
  { label: "Community Events", href: "/en/events" },
  { label: "Academy", href: "/en/academy" },
  { label: "Member Perks", href: "/en/benefits" },
];

const navLinksEN = [
  { label: "Host Your Event", href: "/en/host-your-event" },
  { label: "Blog", href: "/blog" },
  { label: "Find Us", href: "/en/find-us" },
];

const locationLinksES = [
  { label: "Málaga Palace", href: "/es/malaga-palace" },
  { label: "Málaga Terrace", href: "/es/malaga-terrace" },
  { label: "Ancona", href: "/es/ancona" },
  { label: "Olbia", href: "/es/olbia" },
];

const businessLinksES = [
  { label: "Salas de Conferencias Privadas", href: "/es/salas-de-conferencias" },
  { label: "Terraza Privada", href: "/es/terraza-privada" },
  { label: "Oficinas Privadas", href: "/es/oficinas-privadas" },
  { label: "Registro de Empresas", href: "/es/registro-de-empresas" },
];

const individualLinksES = [
  { label: "Coworking y Precios", href: "/es/coworking" },
  { label: "Eventos Comunitarios", href: "/es/eventos" },
  { label: "Academia", href: "/es/academia" },
  { label: "Beneficios para Miembros", href: "/es/beneficios" },
];

const navLinksES = [
  { label: "Organiza Tu Evento", href: "/es/organiza-tu-evento" },
  { label: "Blog", href: "/es/blog" },
  { label: "Encuéntranos", href: "/es/encuentranos" },
];

function DropdownMenu({ label, links, open, onToggle, onClose }: {
  label: string;
  links: { label: string; href: string }[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose, open]);

  return (
    <div ref={ref} className="relative" onMouseEnter={onToggle} onMouseLeave={onClose}>
      <button onClick={onToggle} className="text-white/70 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 py-2">
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-0 w-56 bg-neutral-dark/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2 z-50">
          {links.map((link) =>
            link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link key={link.href} to={link.href} onClick={onClose} className="block px-4 py-2.5 text-sm font-body text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} onClick={onClose} className="block px-4 py-2.5 text-sm font-body text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
}

function LanguageSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const isSpanish = location.pathname.startsWith("/es");
  const currentLang = isSpanish ? "ES" : "EN";

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const switchLanguage = (toLang: "en" | "es") => {
    const currentPath = location.pathname;
    let targetPath = routeMap[currentPath];
    
    if (!targetPath) {
      // Default fallback
      targetPath = toLang === "es" ? "/es" : "/";
    }
    
    navigate(targetPath);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-body font-medium transition-colors">
        <Globe size={16} />
        {currentLang}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-2 w-24 bg-neutral-dark/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-1 z-50">
          <button onClick={() => switchLanguage("en")} className={`w-full text-left px-4 py-2 text-sm font-body transition-colors ${!isSpanish ? "text-primary" : "text-white/70 hover:text-white hover:bg-white/5"}`}>
            English
          </button>
          <button onClick={() => switchLanguage("es")} className={`w-full text-left px-4 py-2 text-sm font-body transition-colors ${isSpanish ? "text-primary" : "text-white/70 hover:text-white hover:bg-white/5"}`}>
            Español
          </button>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isSpanish = location.pathname.startsWith("/es");
  
  const locationLinks = isSpanish ? locationLinksES : locationLinksEN;
  const businessLinks = isSpanish ? businessLinksES : businessLinksEN;
  const individualLinks = isSpanish ? individualLinksES : individualLinksEN;
  const navLinks = isSpanish ? navLinksES : navLinksEN;
  
  const labels = isSpanish ? {
    locations: "Ubicaciones",
    forBusinesses: "Para Empresas",
    forIndividuals: "Para Individuos",
    getInTouch: "Contacto",
  } : {
    locations: "Locations",
    forBusinesses: "For Businesses",
    forIndividuals: "For Individuals",
    getInTouch: "Get in Touch",
  };

  const homeLink = isSpanish ? "/es" : "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-neutral-dark/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to={homeLink} className="flex items-center">
            <img src={logoWhite} alt="Innovation/Campus" className="h-7 md:h-12 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu label={labels.locations} links={locationLinks} open={openDropdown === "locations"} onToggle={() => setOpenDropdown(openDropdown === "locations" ? null : "locations")} onClose={() => setOpenDropdown(null)} />
            <DropdownMenu label={labels.forBusinesses} links={businessLinks} open={openDropdown === "business"} onToggle={() => setOpenDropdown(openDropdown === "business" ? null : "business")} onClose={() => setOpenDropdown(null)} />
            <DropdownMenu label={labels.forIndividuals} links={individualLinks} open={openDropdown === "individual"} onToggle={() => setOpenDropdown(openDropdown === "individual" ? null : "individual")} onClose={() => setOpenDropdown(null)} />
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.href} to={link.href} className="text-white/70 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className="text-white/70 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </a>
              )
            )}
            <LanguageSwitcher />
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm animate-pulse-red">
              <a href="#contact">{labels.getInTouch}</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-dark/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-2">
            {/* Language Switcher Mobile */}
            <div className="flex items-center justify-between pb-4 mb-2 border-b border-white/10">
              <span className="text-white/60 text-sm font-body">{isSpanish ? "Idioma" : "Language"}</span>
              <div className="flex gap-2">
                <Link to="/" onClick={() => setMobileOpen(false)} className={`px-3 py-1.5 rounded text-sm font-body ${!isSpanish ? "bg-primary text-primary-foreground" : "text-white/60 hover:text-white"}`}>EN</Link>
                <Link to="/es" onClick={() => setMobileOpen(false)} className={`px-3 py-1.5 rounded text-sm font-body ${isSpanish ? "bg-primary text-primary-foreground" : "text-white/60 hover:text-white"}`}>ES</Link>
              </div>
            </div>

            {/* Locations */}
            <button onClick={() => setMobileExpanded(mobileExpanded === "locations" ? null : "locations")} className="flex items-center justify-between text-white/80 hover:text-white text-lg font-body transition-colors py-2">
              {labels.locations}
              <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "locations" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "locations" && (
              <div className="pl-4 flex flex-col gap-1 mb-2">
                {locationLinks.map((link) => (
                  <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white text-base font-body py-1.5 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* For Businesses */}
            <button onClick={() => setMobileExpanded(mobileExpanded === "business" ? null : "business")} className="flex items-center justify-between text-white/80 hover:text-white text-lg font-body transition-colors py-2">
              {labels.forBusinesses}
              <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "business" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "business" && (
              <div className="pl-4 flex flex-col gap-1 mb-2">
                {businessLinks.map((link) => (
                  <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white text-base font-body py-1.5 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* For Individuals */}
            <button onClick={() => setMobileExpanded(mobileExpanded === "individual" ? null : "individual")} className="flex items-center justify-between text-white/80 hover:text-white text-lg font-body transition-colors py-2">
              {labels.forIndividuals}
              <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "individual" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "individual" && (
              <div className="pl-4 flex flex-col gap-1 mb-2">
                {individualLinks.map((link) => (
                  <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white text-base font-body py-1.5 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-white text-lg font-body transition-colors py-2">
                {link.label}
              </Link>
            ))}
            
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2 w-full">
              <a href="#contact" onClick={() => setMobileOpen(false)}>{labels.getInTouch}</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
