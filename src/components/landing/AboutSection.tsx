import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/about-campus.jpg";

export default function AboutSection() {
  const { ref: r1, isVisible: v1 } = useScrollAnimation();
  const { ref: r2, isVisible: v2 } = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-neutral-dark"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          {/* Image — left side */}
          <div
            ref={r2}
            className={`scroll-animate ${v2 ? "visible" : ""} w-full md:w-1/2`}
          >
            <img
              src={aboutImage}
              alt="Innovation Campus — coworking space in Málaga"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Text — right side */}
          <div
            ref={r1}
            className={`scroll-animate ${v1 ? "visible" : ""} w-full md:w-1/2`}
            style={{ transitionDelay: "0.15s" }}
          >
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
              The Campus
            </p>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none mb-6 text-white uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Between Spain and Italy, a project that never stands still
            </h2>

            <div className="w-12 h-[3px] bg-primary mb-6" />

            <div className="space-y-4 font-body text-base leading-relaxed text-historic-muted">
              <p>
                Innovation Campus is an independent coworking present across two
                countries, two cultures and two ways of working — with spaces in
                Málaga, Olbia and Ancona, and our eyes always on the people
                building something real.
              </p>

              <p>In Málaga we are in two places that couldn't be more different.</p>

              <p>
                <strong className="text-historic-text">Málaga Palace</strong>, in
                the heart of the old town, within the walls of a frescoed and
                restored historic palace: where silence and history walk
                alongside you while you work.
              </p>

              <p>
                And{" "}
                <strong className="text-historic-text">Málaga Terrace</strong>,
                overlooking the Mediterranean: where the blue of the sea is the
                backdrop to your days and the terrace is waiting whenever you
                need it.
              </p>

              <p className="font-display text-xl text-primary font-semibold pt-2">
                Two spaces, one community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
