import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterES() {
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

            <div className="space-y-3 text-sm text-white/70">
              <h4 className="text-white/40 text-sm font-light italic mb-2">Horario de Apertura</h4>
              <div>
                <p className="font-semibold text-white/80">Málaga Palace</p>
                <p>Lun–Jue 9:30 – 18:30</p>
                <p>Vie 9:30 – 17:00</p>
              </div>
              <div>
                <p className="font-semibold text-white/80">Málaga Terrace</p>
                <p>Lun–Jue 9:30 – 18:30</p>
                <p>Vie 9:30 – 17:00</p>
              </div>
            </div>
          </div>

          {/* Column 2 — Contact */}
          <div>
            <h4 className="text-white/40 text-sm font-light italic mb-6">Contacto</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>Málaga Palace (Centro Histórico): <a href="tel:+34671441288" className="hover:text-primary transition-colors">+34 671 44 12 88</a></p>
              <p>Málaga Terrace (Junto al Mar): <a href="tel:+34676943978" className="hover:text-primary transition-colors">+34 676 94 39 78</a></p>
              <p>Ancona/Olbia: <a href="tel:+393383355908" className="hover:text-primary transition-colors">+39 338 335 5908</a></p>
              <p>Dirección Málaga: <a href="tel:+34673737235" className="hover:text-primary transition-colors">+34 673 737235</a></p>
            </div>
          </div>

          {/* Column 3 — Locations */}
          <div>
            <h4 className="text-white/40 text-sm font-light italic mb-6">Ubicaciones</h4>
            <div className="space-y-3 text-sm text-white/70">
              <Link to="/es/malaga-palace" className="block hover:text-primary transition-colors">Málaga Palace</Link>
              <Link to="/es/malaga-terrace" className="block hover:text-primary transition-colors">Málaga Terrace</Link>
              <Link to="/es/ancona" className="block hover:text-primary transition-colors">Ancona</Link>
              <Link to="/es/olbia" className="block hover:text-primary transition-colors">Olbia</Link>
            </div>
          </div>

          {/* Column 4 — Policies */}
          <div>
            <h4 className="text-white/40 text-sm font-light italic mb-6">Políticas</h4>
            <div className="space-y-3 text-sm text-white/70">
              <Link to="/cookie-policy" className="block hover:text-primary transition-colors">Uso de Cookies</Link>
              <Link to="/legal-notice" className="block hover:text-primary transition-colors">Aviso Legal</Link>
              <Link to="/privacy" className="block hover:text-primary transition-colors">Política de Privacidad</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social icons */}
          <div className="flex gap-5">
            {[{ Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/icampuscoworking" },
            { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/innovationcampus-coworking/" },
            { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/innovation_campus/" }].map(({ Icon, label, href }) =>
              <a key={label} href={href} target={href !== "#" ? "_blank" : undefined} rel={href !== "#" ? "noopener noreferrer" : undefined} aria-label={label} className="text-white/60 hover:text-primary transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/40">
            ©{new Date().getFullYear()} - Innovation Campus. Todos los Derechos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
