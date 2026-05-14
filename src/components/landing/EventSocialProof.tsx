import { motion } from "framer-motion";

const translations = {
  en: { title: "Trusted by innovative companies for their offsites & events" },
  es: { title: "Elegidos por empresas innovadoras para sus eventos" },
  it: { title: "Scelto da aziende innovative per i loro eventi" },
};

// Mock logos using stylish typography to mimic real company wordmarks
const CompanyLogos = [
  <span key="1" className="text-xl md:text-2xl font-display font-bold tracking-tight">ACME Corp</span>,
  <span key="2" className="text-xl md:text-2xl font-body font-black tracking-tighter uppercase italic">Veloce</span>,
  <span key="3" className="text-xl md:text-2xl font-serif font-semibold tracking-normal">Nexus</span>,
  <span key="4" className="text-xl md:text-2xl font-display font-light tracking-widest uppercase">Lumina</span>,
  <span key="5" className="text-xl md:text-2xl font-body font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Strata</span>,
  <span key="6" className="text-xl md:text-2xl font-display font-medium tracking-wide">OASIS</span>,
];

export default function EventSocialProof({ lang = "en" }: { lang?: "en" | "es" | "it" }) {
  const t = translations[lang];

  return (
    <section className="py-12 md:py-16 bg-card border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="font-body text-sm text-muted-foreground uppercase tracking-widest font-semibold">
          {t.title}
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Fading Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-card to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap items-center gap-16 md:gap-24 px-8"
          animate={{ x: [0, -1035] }} // Arbitrary pixel width depending on the content length. Using percentage requires specific CSS setup.
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        // A safer, bulletproof way to do marquee in pure CSS is often preferred, but framer motion works well if the duplicated content is long enough.
        // Alternatively, flex with duplicated arrays:
        >
          {/* We duplicate the array 3 times to ensure infinite seamless scrolling */}
          {[...CompanyLogos, ...CompanyLogos, ...CompanyLogos, ...CompanyLogos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 text-foreground/50 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
