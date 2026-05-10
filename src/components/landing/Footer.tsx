import { Facebook, Linkedin, Instagram } from "lucide-react";

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
            <div className="space-y-3 text-sm text-white/70">
              <h4 className="text-white/40 text-sm font-light italic mb-2">Opening Hours</h4>
              <div>
                <p className="font-semibold text-white/80">Málaga Palace</p>
                <p>Mon–Thu 9:30 AM – 6:30 PM</p>
                <p>Fri 9:30 AM – 5:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white/80">Málaga Terrace</p>
                <p>Mon–Thu 9:30 AM – 6:30 PM</p>
                <p>Fri 9:30 AM – 5:00 PM</p>
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

          {/* Column 3 — Locations */}
          <div>
            <h4 className="text-white/40 text-sm font-light italic mb-6">​Locations</h4>
            <div className="space-y-3 text-sm text-white/70">
              <a href="/en/malaga-palace" className="block hover:text-primary transition-colors">Malaga Palace</a>
              <a href="/en/malaga-terrace" className="block hover:text-primary transition-colors">Malaga Terrace</a>
              <a href="/en/ancona" className="block hover:text-primary transition-colors">Ancona</a>
              <a href="/en/olbia" className="block hover:text-primary transition-colors">Olbia</a>
            </div>
          </div>

          {/* Column 4 — Policies */}
          <div>
            <h4 className="text-white/40 text-sm font-light italic mb-6">Policies</h4>
            <div className="space-y-3 text-sm text-white/70">
              <a href="/cookie-policy" className="block hover:text-primary transition-colors">Use of Cookies</a>
              <a href="/legal-notice" className="block hover:text-primary transition-colors">Legal Notice</a>
              <a href="/privacy" className="block hover:text-primary transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-5">
            {[
              { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/icampuscoworking" },
              { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/innovationcampus-coworking/" },
              { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/innovation_campus/" },
            ].map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/60 hover:text-primary transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-white/40">
            ©{new Date().getFullYear()} - Innovation Campus. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
