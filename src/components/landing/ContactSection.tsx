import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [location, setLocation] = useState<"historic" | "seaside" | "both">("both");
  const { ref, isVisible } = useScrollAnimation();

  const bgStyle = "bg-neutral-dark";

  const textColor =
    location === "seaside" ? "text-seaside-text" : "text-white";

  const mutedColor =
    location === "seaside" ? "text-seaside-muted" : "text-white/60";

  return (
    <section id="contact" className={`py-24 md:py-36 transition-all duration-1000 ${bgStyle}`}>
      <div className="max-w-2xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
              Get in Touch
            </p>
            <h2 className={`font-display text-3xl md:text-5xl font-bold ${textColor}`}>
              Start your journey
            </h2>
            <p className={`font-body mt-4 ${mutedColor}`}>
              Book a tour, ask a question, or just say hello.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We'll get back to you soon.");
            }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>Name</Label>
                <Input
                  required
                  placeholder="Your name"
                  className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary"
                />
              </div>
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>Email</Label>
                <Input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>
                Which location interests you?
              </Label>
              <div className="flex flex-wrap gap-3 mt-2">
                {(
                  [
                    { value: "historic", label: "Historic Center" },
                    { value: "seaside", label: "Seaside" },
                    { value: "both", label: "Both" },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setLocation(opt.value)}
                    className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-500 ${
                      location === opt.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent border-white/20 text-white/60 hover:border-primary/50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>Message</Label>
              <Textarea
                placeholder="Tell us what you're looking for..."
                rows={4}
                className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body uppercase tracking-widest gap-2"
              size="lg"
            >
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
