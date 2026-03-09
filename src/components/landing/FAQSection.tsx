import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can I use both locations with one membership?",
    a: "Yes! All memberships give you access to both the Historic Center and Seaside spaces. Work from whichever world suits your mood.",
  },
  {
    q: "Do you offer day passes or trial days?",
    a: "Absolutely. We offer single-day passes and a free trial day so you can experience the space before committing. Just book through our contact form.",
  },
  {
    q: "What membership plans are available?",
    a: "We offer flexible options: hot desk passes (daily/weekly/monthly), dedicated desks, and private offices. Custom plans for teams of 5+ are also available.",
  },
  {
    q: "Is there 24/7 access?",
    a: "Dedicated desk and private office members enjoy 24/7 access at both locations. Hot desk passes are available during regular hours.",
  },
  {
    q: "Do you host events?",
    a: "Yes — we run weekly community events including talks, workshops, networking nights, and monthly demo days. Both locations host events, often with different themes.",
  },
  {
    q: "Can I book meeting rooms separately?",
    a: "Meeting rooms can be booked by members and non-members alike. Our Historic Center meeting rooms are especially popular for client-facing meetings.",
  },
  {
    q: "Is parking available?",
    a: "The Seaside location has nearby public parking. The Historic Center is best accessed on foot or by public transport — it's steps from the city center.",
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 md:py-36 bg-muted/50">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-12`}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Questions & Answers
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-lg border border-border px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:text-primary hover:no-underline transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
