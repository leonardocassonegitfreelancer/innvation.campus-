import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";
import { routeMap } from "@/lib/i18n";

const linksEN = { location: [{ label: "Málaga Palace", href: "/en/malaga-palace" }, { label: "Málaga Terrace", href: "/en/malaga-terrace" }, { label: "Ancona", href: "/en/ancona" }, { label: "Olbia", href: "/en/olbia" }], business: [{ label: "Private Conference Rooms", href: "/en/conference-rooms" }, { label: "Private Terrace", href: "/en/private-terrace" }, { label: "Private Offices", href: "/en/private-offices" }, { label: "Business Registration", href: "/en/business-registration" }], individual: [{ label: "Coworking & Pricing", href: "/en/coworking-space" }, { label: "Community Events", href: "/en/events" }, { label: "Academy", href: "/en/academy" }, { label: "Member Perks", href: "/en/benefits" }], nav: [{ label: "Host Your Event", href: "/en/host-your-event" }, { label: "Blog", href: "/blog" }, { label: "Find Us", href: "/en/find-us" }], labels: { locations: "Locations", forBusinesses: "For Businesses", forIndividuals: "For Individuals", getInTouch: "Get in Touch" }, home: "/" };
const linksES = { location: [{ label: "Málaga Palace", href: "/es/malaga-palace" }, { label: "Málaga Terrace", href: "/es/malaga-terrace" }, { label: "Ancona", href: "/es/ancona" }, { label: "Olbia", href: "/es/olbia" }], business: [{ label: "Salas de Conferencias", href: "/es/salas-de-conferencias" }, { label: "Terraza Privada", href: "/es/terraza-privada" }, { label: "Oficinas Privadas", href: "/es/oficinas-privadas" }, { label: "Registro de Empresas", href: "/es/registro-de-empresas" }], individual: [{ label: "Coworking y Precios", href: "/es/coworking" }, { label: "Eventos", href: "/es/eventos" }, { label: "Academia", href: "/es/academia" }, { label: "Beneficios", href: "/es/beneficios" }], nav: [{ label: "Organiza Tu Evento", href: "/es/organiza-tu-evento" }, { label: "Blog", href: "/es/blog" }, { label: "Encuéntranos", href: "/es/encuentranos" }], labels: { locations: "Ubicaciones", forBusinesses: "Para Empresas", forIndividuals: "Para Individuos", getInTouch: "Contacto" }, home: "/es" };
const linksIT = { location: [{ label: "Málaga Palace", href: "/it/malaga-palace" }, { label: "Málaga Terrace", href: "/it/malaga-terrace" }, { label: "Ancona", href: "/it/ancona" }, { label: "Olbia", href: "/it/olbia" }], business: [{ label: "Sale Conferenze", href: "/it/sale-conferenze" }, { label: "Terrazza Privata", href: "/it/terrazza-privata" }, { label: "Uffici Privati", href: "/it/uffici-privati" }, { label: "Registrazione Aziendale", href: "/it/registrazione-aziendale" }], individual: [{ label: "Coworking e Prezzi", href: "/it/coworking" }, { label: "Eventi", href: "/it/eventi" }, { label: "Academy", href: "/it/academy" }, { label: "Vantaggi", href: "/it/vantaggi" }], nav: [{ label: "Organizza Evento", href: "/it/organizza-evento" }, { label: "Blog", href: "/it/blog" }, { label: "Trovaci", href: "/it/trovaci" }], labels: { locations: "Sedi", forBusinesses: "Per Aziende", forIndividuals: "Per Individui", getInTouch: "Contatti" }, home: "/it" };

function DropdownMenu({ label, links, open, onToggle, onClose }: { label: string; links: { label: string; href: string }[]; open: boolean; onToggle: () => void; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (!open) return; const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) onClose(); }; document.addEventListener("mousedown", handler); return () => document.removeEventListener("mousedown", handler); }, [onClose, open]);
  return (<div ref={ref} className="relative" onMouseEnter={onToggle} onMouseLeave={onClose}><button onClick={onToggle} className="text-white/70 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 py-2">{label}<ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} /></button>{open && (<div className="absolute top-full left-0 mt-0 w-56 bg-neutral-dark/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2 z-50">{links.map((link) => (<Link key={link.href} to={link.href} onClick={onClose} className="block px-4 py-2.5 text-sm font-body text-white/70 hover:text-white hover:bg-white/5 transition-colors">{link.label}</Link>))}</div>)}</div>);
}

function LanguageSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentLang = location.pathname.startsWith("/es") ? "ES" : location.pathname.startsWith("/it") ? "IT" : "EN";
  
  useEffect(() => { 
    if (!open) return; 
    const handler = (e: MouseEvent) => { 
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); 
    }; 
    document.addEventListener("mousedown", handler); 
    return () => document.removeEventListener("mousedown", handler); 
  }, [open]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  const switchLanguage = (toLang: "en" | "es" | "it") => { 
    const target = routeMap[toLang]?.[location.pathname] || (toLang === "es" ? "/es" : toLang === "it" ? "/it" : "/"); 
    navigate(target); 
    setOpen(false); 
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-body font-medium transition-colors py-2">
        <Globe size={16} />
        {currentLang}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-0 w-28 bg-neutral-dark/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-1 z-50">
          <button onClick={() => switchLanguage("en")} className={`w-full text-left px-4 py-2 text-sm font-body transition-colors ${currentLang === "EN" ? "text-primary" : "text-white/70 hover:text-white hover:bg-white/5"}`}>English</button>
          <button onClick={() => switchLanguage("es")} className={`w-full text-left px-4 py-2 text-sm font-body transition-colors ${currentLang === "ES" ? "text-primary" : "text-white/70 hover:text-white hover:bg-white/5"}`}>Español</button>
          <button onClick={() => switchLanguage("it")} className={`w-full text-left px-4 py-2 text-sm font-body transition-colors ${currentLang === "IT" ? "text-primary" : "text-white/70 hover:text-white hover:bg-white/5"}`}>Italiano</button>
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
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const links = lang === "es" ? linksES : lang === "it" ? linksIT : linksEN;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-neutral-dark/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to={links.home} className="flex items-center"><img src={logoWhite} alt="Innovation/Campus" className="h-7 md:h-12 w-auto" /></Link>
          <div className="hidden md:flex items-center gap-6">
            <DropdownMenu label={links.labels.locations} links={links.location} open={openDropdown === "locations"} onToggle={() => setOpenDropdown(openDropdown === "locations" ? null : "locations")} onClose={() => setOpenDropdown(null)} />
            <DropdownMenu label={links.labels.forBusinesses} links={links.business} open={openDropdown === "business"} onToggle={() => setOpenDropdown(openDropdown === "business" ? null : "business")} onClose={() => setOpenDropdown(null)} />
            <DropdownMenu label={links.labels.forIndividuals} links={links.individual} open={openDropdown === "individual"} onToggle={() => setOpenDropdown(openDropdown === "individual" ? null : "individual")} onClose={() => setOpenDropdown(null)} />
            {links.nav.map((link) => (<Link key={link.href} to={link.href} className="text-white/70 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-300">{link.label}</Link>))}
            <LanguageSwitcher />
            
          </div>
          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-neutral-dark/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-2">
            <button onClick={() => setMobileExpanded(mobileExpanded === "locations" ? null : "locations")} className="flex items-center justify-between text-white/80 hover:text-white text-lg font-body transition-colors py-2">{links.labels.locations}<ChevronDown size={16} className={`transition-transform ${mobileExpanded === "locations" ? "rotate-180" : ""}`} /></button>
            {mobileExpanded === "locations" && (<div className="pl-4 flex flex-col gap-1 mb-2">{links.location.map((link) => (<Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white text-base font-body py-1.5 transition-colors">{link.label}</Link>))}</div>)}
            <button onClick={() => setMobileExpanded(mobileExpanded === "business" ? null : "business")} className="flex items-center justify-between text-white/80 hover:text-white text-lg font-body transition-colors py-2">{links.labels.forBusinesses}<ChevronDown size={16} className={`transition-transform ${mobileExpanded === "business" ? "rotate-180" : ""}`} /></button>
            {mobileExpanded === "business" && (<div className="pl-4 flex flex-col gap-1 mb-2">{links.business.map((link) => (<Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white text-base font-body py-1.5 transition-colors">{link.label}</Link>))}</div>)}
            <button onClick={() => setMobileExpanded(mobileExpanded === "individual" ? null : "individual")} className="flex items-center justify-between text-white/80 hover:text-white text-lg font-body transition-colors py-2">{links.labels.forIndividuals}<ChevronDown size={16} className={`transition-transform ${mobileExpanded === "individual" ? "rotate-180" : ""}`} /></button>
            {mobileExpanded === "individual" && (<div className="pl-4 flex flex-col gap-1 mb-2">{links.individual.map((link) => (<Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white text-base font-body py-1.5 transition-colors">{link.label}</Link>))}</div>)}
            {links.nav.map((link) => (<Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-white text-lg font-body transition-colors py-2">{link.label}</Link>))}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/10">
              <span className="text-white/60 text-sm font-body">{lang === "es" ? "Idioma" : lang === "it" ? "Lingua" : "Language"}</span>
              <div className="flex gap-2">
                <Link to="/" onClick={() => setMobileOpen(false)} className={`px-3 py-1.5 rounded text-sm font-body ${lang === "en" ? "bg-primary text-primary-foreground" : "text-white/60"}`}>EN</Link>
                <Link to="/es" onClick={() => setMobileOpen(false)} className={`px-3 py-1.5 rounded text-sm font-body ${lang === "es" ? "bg-primary text-primary-foreground" : "text-white/60"}`}>ES</Link>
                <Link to="/it" onClick={() => setMobileOpen(false)} className={`px-3 py-1.5 rounded text-sm font-body ${lang === "it" ? "bg-primary text-primary-foreground" : "text-white/60"}`}>IT</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
