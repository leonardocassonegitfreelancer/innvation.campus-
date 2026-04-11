import { ArrowLeft, Calendar, Clock, MapPin, User } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEOHead from "@/components/SEOHead";

export interface ScheduleItem {
  time: string;
  description: string;
}

export interface EventPageProps {
  seo: {
    title: string;
    description: string;
    path: string;
  };
  hero: {
    image: string;
    tag: string;
    title: string;
  };
  details: {
    date: string;
    time: string;
    location: string;
    address: string;
    organizer: string;
  };
  description: string;
  bullets: string[];
  schedule: ScheduleItem[];
  cta: {
    href: string;
    label: string;
  };
  backLink: {
    href: string;
    label: string;
  };
  detailsLabel: {
    eventDetails: string;
    date: string;
    time: string;
    location: string;
    organizer: string;
    schedule: string;
  };
}

export default function EventPageTemplate({
  seo,
  hero,
  details,
  description,
  bullets,
  schedule,
  cta,
  backLink,
  detailsLabel,
}: EventPageProps) {
  return (
    <>
      <SEOHead title={seo.title} description={seo.description} path={seo.path} />
      <main className="overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[55vh] min-h-[400px] flex items-end">
          <img
            src={hero.image}
            alt={hero.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/60 to-transparent" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 pb-12 w-full">
            <a
              href={backLink.href}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {backLink.label}
            </a>
            <span className="inline-block font-body text-xs font-bold uppercase tracking-widest text-primary bg-background px-3 py-1.5 rounded-full mb-4">
              {hero.tag}
            </span>
            <h1
              className="font-display font-bold text-primary-foreground leading-tight max-w-3xl"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              {hero.title}
            </h1>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="font-body text-foreground/80 text-lg leading-relaxed mb-8">
                {description}
              </p>

              {bullets.length > 0 && (
                <ul className="space-y-3 mb-10">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Schedule */}
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                {detailsLabel.schedule}
              </h2>
              <div className="space-y-4 mb-12">
                {schedule.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start border-l-2 border-primary/20 pl-4">
                    <span className="font-body font-bold text-sm text-primary w-16 shrink-0 pt-0.5">
                      {item.time}
                    </span>
                    <span className="font-body text-foreground/80">{item.description}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={cta.href}
                className="inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-colors duration-300"
              >
                {cta.label}
              </a>
            </div>

            {/* Sidebar */}
            <div className="bg-muted/50 border border-border rounded-2xl p-6 h-fit">
              <h3 className="font-display font-bold text-lg text-foreground mb-5">
                {detailsLabel.eventDetails}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      {detailsLabel.date}
                    </p>
                    <p className="font-body text-sm text-foreground">{details.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      {detailsLabel.time}
                    </p>
                    <p className="font-body text-sm text-foreground">{details.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      {detailsLabel.location}
                    </p>
                    <p className="font-body text-sm text-foreground">{details.location}</p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">{details.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      {detailsLabel.organizer}
                    </p>
                    <p className="font-body text-sm text-foreground">{details.organizer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
