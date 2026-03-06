import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/about-campus.jpg";

export default function AboutSection() {
  const { ref: r1, isVisible: v1 } = useScrollAnimation();
  const { ref: r2, isVisible: v2 } = useScrollAnimation();

  return (
    <section
      id="about"
      className="relative py-20 md:py-0 overflow-hidden"
      style={{ background: "hsl(40, 30%, 96%)" }}
    >
      <div className="flex flex-col md:flex-row items-stretch min-h-[80vh]">
        {/* Text — left side */}
        <div
          ref={r1}
          className={`scroll-animate ${v1 ? "visible" : ""} flex-1 flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-24`}
        >
          <div className="max-w-xl">
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-6">
              The Campus
            </p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-foreground">
              Between Spain and Italy, a project that never stands still
            </h2>

            <div className="w-16 h-[3px] bg-primary mb-8" />

            <div className="space-y-5 font-body text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                Innovation Campus is an independent coworking present across two
                countries, two cultures and two ways of working — with spaces in
                Málaga, Olbia and Ancona, and our eyes always on the people
                building something real.
              </p>

              <p>In Málaga we are in two places that couldn't be more different.</p>

              <p>
                <strong className="text-foreground">Málaga Palace</strong>, in
                the heart of the old town, within the walls of a frescoed and
                restored historic palace: where silence and history walk
                alongside you while you work.
              </p>

              <p>
                And{" "}
                <strong className="text-foreground">Málaga Terrace</strong>,
                overlooking the Mediterranean: where the blue of the sea is the
                backdrop to your days and the terrace is waiting whenever you
                need it.
              </p>

              <p className="font-display text-xl md:text-2xl text-primary font-semibold pt-2">
                Two spaces, one community.
              </p>
            </div>
          </div>
        </div>

        {/* Image — right side */}
        <div
          ref={r2}
          className={`scroll-animate ${v2 ? "visible" : ""} flex-1 min-h-[400px] md:min-h-0`}
          style={{ transitionDelay: "0.2s" }}
        >
          <img
            src={aboutImage}
            alt="Innovation Campus — sunny coworking space in Málaga"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
