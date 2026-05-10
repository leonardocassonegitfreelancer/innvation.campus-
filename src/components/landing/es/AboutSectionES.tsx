import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/about-campus.webp";

const _s = (img: unknown): string => typeof img === 'string' ? img : (img as any)?.src ?? '';

export default function AboutSectionES() {
  const { ref: r1, isVisible: v1 } = useScrollAnimation();
  const { ref: r2, isVisible: v2 } = useScrollAnimation();

  return (
    <section id="about" className="relative py-20 md:py-28 bg-neutral-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div ref={r2} className={`scroll-animate ${v2 ? "visible" : ""} w-full md:w-1/2`}>
            <img src={_s(aboutImage)} alt="Innovation Campus — espacio de coworking en Málaga" className="w-full h-auto rounded-lg" />
          </div>

          <div ref={r1} className={`scroll-animate ${v1 ? "visible" : ""} w-full md:w-1/2`} style={{ transitionDelay: "0.15s" }}>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">El Campus</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-none mb-6 uppercase text-secondary bg-inherit font-medium" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              ENTRE ESPAÑA E ITALIA, UN PROYECTO QUE NUNCA SE DETIENE
            </h2>
            <div className="w-12 h-[3px] bg-primary mb-6" />
            <div className="space-y-4 font-body text-base leading-relaxed text-historic-muted">
              <p className="text-secondary">
                Innovation Campus es un coworking independiente presente en dos países, dos culturas y dos formas de trabajar:
                Ofrecemos espacios en Málaga, Olbia y Ancona con nuestros ojos siempre puestos en las personas que construyen algo real.
              </p>
              <p className="text-secondary">En Málaga estamos en dos lugares que no podrían ser más diferentes.</p>
              <p className="text-secondary">
                <strong className="bg-inherit text-primary">Málaga Palace</strong>, en el corazón del casco antiguo, dentro de las paredes de un palacio histórico con frescos y restaurado: donde el silencio y la historia caminan junto a ti mientras trabajas.
              </p>
              <p className="text-secondary">
                Y <strong className="text-primary">Málaga Terrace</strong>, con vistas al Mediterráneo: donde el azul del mar es el telón de fondo de tus días y la terraza te espera cuando la necesites.
              </p>
              <p className="font-display text-xl text-primary font-semibold pt-2">Una comunidad, muchos espacios.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
