import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { MapPin, Clock, Phone, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Málaga Palace",
    subtitle: "Historic Center",
    address: "Calle Álamos 7, 29012 Málaga",
    hours: "Mon–Fri 8:00–22:00 · Sat 9:00–18:00",
    phone: "+34 951 123 456",
    email: "palace@innovationcampus.biz",
    mapUrl: "https://maps.google.com/?q=Calle+Álamos+7+29012+Málaga",
    link: "/en/malaga-palace",
  },
  {
    name: "Málaga Terrace",
    subtitle: "Sea Side",
    address: "Calle Puerto 14, 29016 Málaga",
    hours: "Mon–Fri 09:30–18:30 · 24/7",
    phone: "+34 951 789 012",
    email: "terrace@innovationcampus.biz",
    mapUrl: "https://maps.google.com/?q=Calle+Puerto+14+29016+Málaga",
    link: "/en/malaga-terrace",
  },
  {
    name: "Ancona",
    subtitle: "Italy",
    address: "Ancona, Italy",
    hours: "Mon–Fri 09:00–18:00",
    phone: "+39 071 123 456",
    email: "ancona@innovationcampus.biz",
    mapUrl: "https://maps.google.com/?q=Ancona+Italy",
    link: "/en/ancona",
  },
  {
    name: "Olbia",
    subtitle: "Sardinia",
    address: "Olbia, Sardinia, Italy",
    hours: "Mon–Fri 09:00–18:00",
    phone: "+39 078 123 456",
    email: "olbia@innovationcampus.biz",
    mapUrl: "https://maps.google.com/?q=Olbia+Sardinia+Italy",
    link: "/en/olbia",
  },
];

export default function FindUs() {
  return (
    <main className="overflow-x-hidden">
      <SEOHead
        title="Find Us – Innovation Campus Locations"
        description="Find directions and contact details for all Innovation Campus coworking locations in Málaga, Ancona, and Olbia."
        path="/en/find-us"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-neutral-dark">
        <div className="max-w-6xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-2 font-semibold">
            Our locations
          </p>
          <h1 className="font-display italic text-4xl md:text-5xl font-bold text-primary-foreground">
            Find Us
          </h1>
          <p className="font-body text-primary-foreground/70 mt-3 max-w-xl">
            Addresses, hours, and directions for every Innovation Campus location.
          </p>
        </div>
      </section>

      {/* Locations grid */}
      <section
        className="py-20 md:py-28"
        style={{
          background: "linear-gradient(170deg, hsl(35 30% 92%), hsl(30 25% 90%), hsl(40 20% 93%))",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="rounded-xl border border-border bg-card p-8 flex flex-col gap-4"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">{loc.name}</h2>
                <p className="font-body text-sm text-muted-foreground">{loc.subtitle}</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-foreground/80 hover:text-primary transition-colors underline-offset-2 hover:underline"
                >
                  {loc.address}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-foreground/70">{loc.hours}</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="font-body text-sm text-foreground/80 hover:text-primary transition-colors">
                  {loc.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={`mailto:${loc.email}`} className="font-body text-sm text-foreground/80 hover:text-primary transition-colors">
                  {loc.email}
                </a>
              </div>

              <Link to={loc.link} className="mt-auto pt-4">
                <Button variant="outline" className="w-full font-body text-sm uppercase tracking-widest">
                  View Location
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
