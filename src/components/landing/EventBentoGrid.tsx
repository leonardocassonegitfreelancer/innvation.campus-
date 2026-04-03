import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "react-router-dom";
import { MoveRight } from "lucide-react";

// Placeholder images for the bento items. We'll use standard photos or placeholders for now.
const bento1 = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"; // Conference
const bento2 = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"; // Networking/Party
const bento3 = "https://images.unsplash.com/photo-1556761175-5973e86c0683?q=80&w=1974&auto=format&fit=crop"; // Workshop
const bento4 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"; // Meeting

const translations = {
  en: {
    tagline: "Tailored to You",
    title: "Curated Event Experiences",
    items: [
      { id: 1, title: "Corporate Conferences", desc: "Equipped with state-of-the-art tech and premium seating.", img: bento1, span: "md:col-span-2 md:row-span-2" },
      { id: 2, title: "Networking & Mixers", desc: "Fluid spaces designed for conversation.", img: bento2, span: "md:col-span-1 md:row-span-1" },
      { id: 3, title: "Private Celebrations", desc: "Exclusive ambiance for your special day.", img: bento3, span: "md:col-span-1 md:row-span-1" },
      { id: 4, title: "Creative Workshops", desc: "Bright, airy rooms that inspire innovation.", img: bento4, span: "md:col-span-2 md:row-span-1" },
    ]
  },
  es: {
    tagline: "Adaptado a Ti",
    title: "Experiencias de Eventos Seleccionadas",
    items: [
      { id: 1, title: "Conferencias Corporativas", desc: "Equipado con tecnología de vanguardia y asientos premium.", img: bento1, span: "md:col-span-2 md:row-span-2" },
      { id: 2, title: "Networking y Eventos Sociales", desc: "Espacios fluidos diseñados para la conversación.", img: bento2, span: "md:col-span-1 md:row-span-1" },
      { id: 3, title: "Celebraciones Privadas", desc: "Ambiente exclusivo para tu día especial.", img: bento3, span: "md:col-span-1 md:row-span-1" },
      { id: 4, title: "Talleres Creativos", desc: "Salas amplias y luminosas que inspiran innovación.", img: bento4, span: "md:col-span-2 md:row-span-1" },
    ]
  },
  it: {
    tagline: "Su Misura per Te",
    title: "Esperienze Esclusive",
    items: [
      { id: 1, title: "Conferenze Aziendali", desc: "Attrezzati con tecnologie all'avanguardia.", img: bento1, span: "md:col-span-2 md:row-span-2" },
      { id: 2, title: "Networking & Aperitivi", desc: "Spazi fluidi progettati per la conversazione.", img: bento2, span: "md:col-span-1 md:row-span-1" },
      { id: 3, title: "Feste Private", desc: "Atmosfera esclusiva per i tuoi momenti speciali.", img: bento3, span: "md:col-span-1 md:row-span-1" },
      { id: 4, title: "Workshop Creativi", desc: "Stanze ampie e luminose che ispirano innovazione.", img: bento4, span: "md:col-span-2 md:row-span-1" },
    ]
  }
};

export default function EventBentoGrid() {
  const { ref, isVisible } = useScrollAnimation();
  const location = useLocation();
  const lang = location.pathname.startsWith("/es") ? "es" : location.pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8`}>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
              {t.tagline}
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-2xl">
              {t.title}
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-4 group cursor-pointer">
            <span className="font-body text-sm uppercase tracking-widest font-semibold transition-colors group-hover:text-primary">Discover More</span>
            <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-2 text-primary" />
          </div>
        </div>

        {/* Bento Grid: No rounded corners, absolute flat luxury */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">
          {t.items.map((item, idx) => (
            <div 
              key={item.id} 
              className={`relative overflow-hidden group bg-neutral-900 ${item.span} animate-fade-in`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="font-display text-3xl text-white font-medium mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {item.title}
                </h3>
                <p className="font-body text-white/80 text-sm max-w-md transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
