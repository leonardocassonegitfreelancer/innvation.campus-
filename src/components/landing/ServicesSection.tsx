import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import serviceCoworking from "@/assets/service-coworking.jpg";
import serviceMeeting from "@/assets/service-meeting.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import serviceTerrace from "@/assets/service-terrace.jpg";
import serviceCommunity from "@/assets/service-community.jpg";
import serviceVirtual from "@/assets/service-virtual.jpg";

const services = [
  { img: serviceCoworking, label: "Coworking Spaces" },
  { img: serviceMeeting, label: "Private Conference Rooms" },
  { img: servicePrivate, label: "Private Offices" },
  { img: serviceTerrace, label: "Terrace Near the Seaside" },
  { img: serviceCommunity, label: "Community Events" },
  { img: serviceVirtual, label: "Virtual Office & Business Jump" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-16`}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <a
              key={s.label}
              href="#contact"
              className="group relative aspect-[4/5] rounded-xl overflow-hidden block"
            >
              <img
                src={s.img}
                alt={s.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-body font-bold text-sm md:text-base uppercase tracking-wider text-primary-foreground">
                  {s.label}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
