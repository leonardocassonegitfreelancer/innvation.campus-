import { MapPin, Mail, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white/60 font-body">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-display text-xl font-bold text-white">Innovation</span>
              <span className="text-primary text-2xl font-display font-bold">/</span>
              <span className="font-body text-xl font-light text-white">Campus</span>
            </div>
            <p className="text-sm leading-relaxed">
              Two coworking spaces in Málaga. Two worlds. One community of
              creators, builders, and dreamers.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Historic */}
          <div>
            <h4 className="font-display text-white text-lg italic mb-4">
              Historic Center
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Calle Granada 42, Centro Histórico, Málaga</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>historic@innovationcampus.es</span>
              </div>
            </div>
          </div>

          {/* Seaside */}
          <div>
            <h4 className="font-body text-white text-lg font-light mb-4">
              Seaside
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Paseo Marítimo 15, La Malagueta, Málaga</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>seaside@innovationcampus.es</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Innovation/Campus. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
