import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white font-body" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_0.8fr_0.8fr] gap-12">
          {/* Column 1 — Logo + Badges */}
          <div>
            <div className="mb-6">
              <span className="font-display text-2xl font-bold tracking-wide uppercase">
                Innovation<span className="text-primary">/</span>
              </span>
              <br />
              <span className="font-display text-2xl font-bold tracking-wide uppercase">
                Campus
              </span>
            </div>

            {/* EU Badge */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-8 border border-white/30 rounded-sm flex items-center justify-center text-xs shrink-0">
                <svg viewBox="0 0 48 32" className="w-full h-full" fill="none">
                  <rect width="48" height="32" rx="2" fill="#003399" />
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 - 90) * (Math.PI / 180);
                    const cx = 24 + 10 * Math.cos(angle);
                    const cy = 16 + 10 * Math.sin(angle);
                    return <polygon key={i} points={`${cx},${cy - 2} ${cx + 1.2},${cy + 1} ${cx - 1.2},${cy + 1}`} fill="#FFCC00" />;
                  })}
                </svg>
              </div>
              <div className="text-xs text-white/60 leading-tight">
                <p className="font-semibold text-white/80">Funded by</p>
                <p>the European Union</p>
                <p>NextGenerationEU</p>
              </div>
            </div>

            {/* Recovery Plan Badge */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <span className="text-white/80 font-bold text-lg leading-none">R</span>
              </div>
              <div className="text-xs text-white/60 leading-tight">
                <p>Recovery, Transformation</p>
                <p>and Resilience Plan</p>
              </div>
            </div>
          </div>

          {/* Column 2 — Contact */}
          <div>
            <h4 className="text-white/40 text-sm font-light italic mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>Málaga Palace (Historic Center): <a href="tel:+34671441288" className="hover:text-primary transition-colors">+34 671 44 12 88</a></p>
              <p>Málaga Terrace (Sea Side): <a href="tel:+34676943978" className="hover:text-primary transition-colors">+34 676 94 39 78</a></p>
              <p>Ancona/Olbia: <a href="tel:+393383355908" className="hover:text-primary transition-colors">+39 338 335 5908</a></p>
              <p>Málaga Management: <a href="tel:+34673737235" className="hover:text-primary transition-colors">+34 673 737235</a></p>
            </div>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="text-white/40 text-sm font-light italic mb-6">​Locations</h4>
            <div className="space-y-3 text-sm text-white/70">
              <Link to="/en/malaga-palace" className="block hover:text-primary transition-colors">Malaga Palace</Link>
              <Link to="/en/malaga-terrace" className="block hover:text-primary transition-colors">Malaga Terrace</Link>
              <Link to="/en/ancona" className="block hover:text-primary transition-colors">Ancona</Link>
              <a href="#" className="block hover:text-primary transition-colors">Olbia</a>
            </div>
          </div>

          {/* Column 4 — Policies */}
          <div>
            <h4 className="text-white/40 text-sm font-light italic mb-6">Policies</h4>
            <div className="space-y-3 text-sm text-white/70">
              <a href="#" className="block hover:text-primary transition-colors">Use of Cookies</a>
              <a href="#" className="block hover:text-primary transition-colors">Legal Notice</a>
              <a href="#" className="block hover:text-primary transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social icons — left */}
          <div className="flex gap-5">
            {[{ Icon: Facebook, label: "Facebook", href: "#" },
            { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/innovationcampus-coworking/" },
            { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/innovation_campus/" }].
            map(({ Icon, label, href }) =>
            <a
              key={label}
              href={href}
              target={href !== "#" ? "_blank" : undefined}
              rel={href !== "#" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-white/60 hover:text-primary transition-colors">
              
                <Icon className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Copyright — right */}
          <p className="text-xs text-white/40">
            ©{new Date().getFullYear()} - Innovation Campus. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>);

}