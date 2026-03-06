import historicImg from "@/assets/historic-interior.jpg";
import seasideImg from "@/assets/seaside-interior.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Historic Side */}
      <div className="relative flex-1 min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden group">
        <img
          src={historicImg}
          alt="Historic coworking space with stone walls and warm lighting"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-6 md:px-12 max-w-lg">
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
            Historic Center
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-4 italic">
            Where ideas
            <br />
            grow slowly
          </h2>
          <p className="font-body text-white/60 text-sm md:text-base leading-relaxed">
            Stone walls. Warm light. The kind of silence where deep work happens.
          </p>
          <a
            href="#locations"
            className="inline-block mt-6 md:mt-8 border border-primary text-primary font-body text-sm uppercase tracking-widest px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Discover
          </a>
        </div>
      </div>

      {/* Red Thread Divider */}
      <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 z-20 -translate-x-1/2 flex-col items-center justify-center">
        <div className="w-[2px] flex-1 bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="my-4 flex flex-col items-center">
          <span className="font-display text-white text-2xl lg:text-3xl font-bold">Innovation</span>
          <span className="text-primary text-5xl lg:text-6xl font-display font-bold leading-none">/</span>
          <span className="font-body text-white text-2xl lg:text-3xl font-light tracking-wider">Campus</span>
        </div>
        <div className="w-[2px] flex-1 bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>

      {/* Mobile brand name */}
      <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-5 py-2 rounded-full">
        <span className="font-display text-white text-lg font-bold">Innovation</span>
        <span className="text-primary text-2xl font-display font-bold">/</span>
        <span className="font-body text-white text-lg font-light">Campus</span>
      </div>

      {/* Seaside Side */}
      <div className="relative flex-1 min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden group">
        <img
          src={seasideImg}
          alt="Seaside coworking space with ocean view and modern furniture"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-seaside-text/40" />
        <div className="relative z-10 text-center px-6 md:px-12 max-w-lg">
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-seaside-text/70 mb-4">
            By the Sea
          </p>
          <h2 className="font-body text-3xl md:text-5xl lg:text-6xl text-seaside-text font-extralight leading-tight mb-4">
            Where ideas
            <br />
            <span className="font-semibold">explode</span>
          </h2>
          <p className="font-body text-seaside-text/60 text-sm md:text-base leading-relaxed">
            Open air. Blue everywhere. The freedom to think without walls.
          </p>
          <a
            href="#locations"
            className="inline-block mt-6 md:mt-8 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest px-6 py-3 hover:bg-primary/90 transition-all duration-500"
          >
            Discover
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs font-body uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
