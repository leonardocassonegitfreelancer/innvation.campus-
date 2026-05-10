import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Can I use both locations with one membership?",
    a: "Yes! All memberships give you access to both the Historic Center and Seaside spaces. Work from whichever world suits your mood.",
  },
  {
    q: "Do you offer day passes or trial days?",
    a: "These are two different things. Day passes are for anyone who wants to work here occasionally — no membership needed, just show up. Trial days, on the other hand, are reserved for people who are seriously considering a monthly membership and want to experience the space before committing. If you're not sure whether you'll be coming regularly, a day pass is what you're looking for.",
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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-36 bg-muted/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Questions & Answers
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card rounded-lg border border-border overflow-hidden transition-shadow data-open:shadow-md"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 font-body font-semibold text-foreground text-left hover:text-primary transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={`w-4 h-4 shrink-0 ml-4 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-4 font-body text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
