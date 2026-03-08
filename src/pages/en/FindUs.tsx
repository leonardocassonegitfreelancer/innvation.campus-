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
    phone: "+34 671 44 12 88",
    email: "info@innovationcampus.biz",
    mapUrl: "https://maps.google.com/?q=Calle+Álamos+7+29012+Málaga",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.1!2d-4.4215!3d36.7213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle+%C3%81lamos+7%2C+29012+M%C3%A1laga!5e0!3m2!1sen!2ses!4v1",
    link: "/en/malaga-palace",
  },
  {
    name: "Málaga Terrace",
    subtitle: "Sea Side",
    address: "Calle Puerto 14, 29016 Málaga",
    hours: "Mon–Fri 09:30–18:30 · 24/7",
    phone: "+34 676 94 39 78",
    email: "malaga.terrace@innovationcampus.biz",
    mapUrl: "https://maps.google.com/?q=Calle+Puerto+14+29016+Málaga",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.1!2d-4.4185!3d36.7143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle+Puerto+14%2C+29016+M%C3%A1laga!5e0!3m2!1sen!2ses!4v1",
    link: "/en/malaga-terrace",
  },
  {
    name: "Ancona",
    subtitle: "Italy",
    address: "Ancona, Italy",
    hours: "Mon–Fri 09:00–18:00",
    phone: "+39 338 335 5908",
    email: "ancona@innovationcampus.biz",
    mapUrl: "https://maps.google.com/?q=Ancona+Italy",
    link: "/en/ancona",
  },
  {
    name: "Olbia",
    subtitle: "Sardinia",
    address: "Olbia, Sardinia, Italy",
    hours: "Mon–Fri 09:00–18:00",
    phone: "+39 338 335 5908",
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
      <section className="py-20 md:py-28 bg-neutral-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col gap-4"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-white">{loc.name}</h2>
                <p className="font-body text-sm text-white/50">{loc.subtitle}</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/70 hover:text-primary transition-colors underline-offset-2 hover:underline"
                >
                  {loc.address}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-white/60">{loc.hours}</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="font-body text-sm text-white/70 hover:text-primary transition-colors">
                  {loc.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={`mailto:${loc.email}`} className="font-body text-sm text-white/70 hover:text-primary transition-colors">
                  {loc.email}
                </a>
              </div>

              {loc.mapEmbed ? (
                <div className="mt-auto pt-4 rounded-lg overflow-hidden">
                  <iframe
                    src={loc.mapEmbed}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map – ${loc.name}`}
                  />
                </div>
              ) : (
                <Link to={loc.link} className="mt-auto pt-4">
                  <Button variant="outline" className="w-full font-body text-sm uppercase tracking-widest border-white/20 text-white hover:bg-white/10 hover:text-white">
                    View Location
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
