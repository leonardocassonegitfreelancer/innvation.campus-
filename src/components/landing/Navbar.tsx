import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";

const locationLinks = [
  { label: "Málaga Palace", href: "/en/malaga-palace" },
  { label: "Málaga Terrace", href: "/en/malaga-terrace" },
  { label: "Ancona", href: "/en/ancona" },
  { label: "Olbia", href: "/en/olbia" },
];

const businessLinks = [
  { label: "Private Conference Rooms", href: "/en/conference-rooms" },
  { label: "Private Terrace", href: "/en/private-terrace" },
  { label: "Private Offices", href: "/en/private-offices" },
  { label: "Business Registration", href: "/en/business-registration" },
];

const individualLinks = [
  { label: "Coworking Space", href: "/en/coworking-space" },
  { label: "Community Events", href: "/en/events" },
  { label: "Academy", href: "/en/academy" },
  { label: "Member Perks", href: "/en/benefits" },
];

const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Find Us", href: "/en/find-us" },
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
    <div ref={ref} className="relative"
      onMouseEnter={onToggle}
      onMouseLeave={onClose}
    >
      <button
        onClick={onToggle}
        className="text-white/70 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 py-2"
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-0 w-56 bg-neutral-dark/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2 z-50">
          {links.map((link) =>
            link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={onClose}
                className="block px-4 py-2.5 text-sm font-body text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block px-4 py-2.5 text-sm font-body text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-neutral-dark/95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            <img src={logoWhite} alt="Innovation/Campus" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <DropdownMenu
              label="Locations"
              links={locationLinks}
              open={openDropdown === "locations"}
              onToggle={() => setOpenDropdown(openDropdown === "locations" ? null : "locations")}
              onClose={() => setOpenDropdown(null)}
            />
            <DropdownMenu
              label="For Businesses"
              links={businessLinks}
              open={openDropdown === "business"}
              onToggle={() => setOpenDropdown(openDropdown === "business" ? null : "business")}
              onClose={() => setOpenDropdown(null)}
            />
            <DropdownMenu
              label="For Individuals"
              links={individualLinks}
              open={openDropdown === "individual"}
              onToggle={() => setOpenDropdown(openDropdown === "individual" ? null : "individual")}
              onClose={() => setOpenDropdown(null)}
            />
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white/70 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              )
            )}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm animate-pulse-red"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-dark/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-2">
            {/* Locations */}
            <button
              onClick={() => setMobileExpanded(mobileExpanded === "locations" ? null : "locations")}
              className="flex items-center justify-between text-white/80 hover:text-white text-lg font-body transition-colors py-2"
            >
              Locations
              <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "locations" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "locations" && (
              <div className="pl-4 flex flex-col gap-1 mb-2">
                {locationLinks.map((link) =>
                  link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white text-base font-body py-1.5 transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white text-base font-body py-1.5 transition-colors">
                      {link.label}
                    </a>
                  )
                )}
              </div>
            )}

            {/* For Businesses */}
            <button
              onClick={() => setMobileExpanded(mobileExpanded === "business" ? null : "business")}
              className="flex items-center justify-between text-white/80 hover:text-white text-lg font-body transition-colors py-2"
            >
              For Businesses
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
            <button
              onClick={() => setMobileExpanded(mobileExpanded === "individual" ? null : "individual")}
              className="flex items-center justify-between text-white/80 hover:text-white text-lg font-body transition-colors py-2"
            >
              For Individuals
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

            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-white text-lg font-body transition-colors py-2"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-white text-lg font-body transition-colors py-2"
                >
                  {link.label}
                </a>
              )
            )}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2 w-full"
            >
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
