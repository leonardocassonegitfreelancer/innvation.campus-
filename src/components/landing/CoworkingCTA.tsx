import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CoworkingCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 md:py-28 bg-neutral-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} max-w-3xl mx-auto px-6 text-center relative`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Ready to Start?
        </h2>
        <p className="font-body text-lg text-primary-foreground/60 mb-10 max-w-xl mx-auto">
          Book a free tour of our spaces, 
we'll help you find the right plan.
        </p>

        <Button asChild
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-body uppercase tracking-widest text-sm">
          
          <a
            href="https://members.innovationcampus.biz/tours/locations"
            target="_blank"
            rel="noopener noreferrer">
            
            Book a Tour
          </a>
        </Button>
      </div>
    </section>);

}