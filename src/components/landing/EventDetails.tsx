import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const translations = {
  en: {
    eyebrow: "What We Offer",
    title: "Everything You\nNeed to Succeed",
    features: [
      "State-of-the-art AV equipment & screens",
      "High-speed fibre WiFi throughout",
      "Dedicated event coordinator on-site",
      "Catering and bar service available",
      "Flexible room configurations",
      "Natural light & rooftop terraces",
      "Parking & central Málaga location",
      "Capacity from 10 to 200+ guests",
    ],
    statsLabel: ["Events Hosted", "Capacity", "Locations"],
    statsValue: ["500+", "200+", "3"],
    ctaTitle: "Ready to Plan Your Event?",
    ctaSubtitle: "Get in touch and our team will help you find the perfect space.",
    ctaButton: "Contact Us",
    ctaHref: "/en/find-us",
  },
  es: {
    eyebrow: "Lo Que Ofrecemos",
    title: "Todo lo que\nNecesitas",
    features: [
      "Equipos audiovisuales de última generación",
      "WiFi de fibra óptica de alta velocidad",
      "Coordinador de eventos dedicado in situ",
      "Servicio de catering y bar disponible",
      "Configuraciones de sala flexibles",
      "Luz natural y terrazas en azotea",
      "Aparcamiento y ubicación central en Málaga",
      "Capacidad para 10 a 200+ personas",
    ],
    statsLabel: ["Eventos Realizados", "Capacidad Máx.", "Ubicaciones"],
    statsValue: ["500+", "200+", "3"],
    ctaTitle: "¿Listo para Planificar tu Evento?",
    ctaSubtitle: "Contáctanos y nuestro equipo te ayudará a encontrar el espacio perfecto.",
    ctaButton: "Contáctanos",
    ctaHref: "/es/find-us",
  },
  it: {
    eyebrow: "Cosa Offriamo",
    title: "Tutto quello\nche ti Serve",
    features: [
      "Attrezzatura AV e schermi all'avanguardia",
      "WiFi in fibra ad alta velocità ovunque",
      "Coordinatore eventi dedicato in loco",
      "Servizio catering e bar disponibile",
      "Configurazioni sala flessibili",
      "Luce naturale e terrazze sul tetto",
      "Parcheggio e posizione centrale a Málaga",
      "Capacità da 10 a 200+ ospiti",
    ],
    statsLabel: ["Eventi Ospitati", "Capienza Max", "Sedi"],
    statsValue: ["500+", "200+", "3"],
    ctaTitle: "Pronto a Pianificare il Tuo Evento?",
    ctaSubtitle: "Contattaci e il nostro team ti aiuterà a trovare lo spazio perfetto.",
    ctaButton: "Contattaci",
    ctaHref: "/it/find-us",
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as any },
  }),
};

export default function EventDetails() {
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  return (
    <>
      {/* Features section */}
      <section className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left: heading */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-6">{t.eyebrow}</p>
              <h2
                className="font-display font-bold text-foreground leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                {t.title.split("\n").map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>

              {/* Stats row */}
              <div className="flex gap-10 mt-12 pt-12 border-t border-border">
                {t.statsValue.map((val, i) => (
                  <div key={i}>
                    <p className="font-display font-bold text-3xl md:text-4xl text-foreground">{val}</p>
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{t.statsLabel[i]}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: feature list */}
            <ul className="space-y-4">
              {t.features.map((feat, i) => (
                <motion.li
                  key={feat}
                  className="flex items-start gap-4"
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="font-body text-base text-foreground/80">{feat}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 md:py-32 bg-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-display font-bold text-background leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {t.ctaTitle}
            </h2>
            <p className="font-body text-lg text-background/60 mb-10 max-w-xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <Link
              to={t.ctaHref}
              className="inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.25em] text-foreground bg-background px-10 py-4 hover:bg-background/90 transition-colors duration-300"
            >
              {t.ctaButton} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
