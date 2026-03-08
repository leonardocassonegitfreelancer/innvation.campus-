import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can I try before committing?",
    a: "Yes! We offer a free trial day so you can experience the space, the community, and the vibe before choosing a plan.",
  },
  {
    q: "What are the opening hours?",
    a: "Flex desk members have access Monday to Friday, 7 am – 11 pm. Unlimited members enjoy 24/7 access including weekends and holidays.",
  },
  {
    q: "Can I switch plans?",
    a: "Absolutely. You can upgrade or downgrade your membership at the end of each billing cycle — no penalties.",
  },
  {
    q: "Can I bring guests?",
    a: "Members can bring guests for meetings in common areas. For extended visits, guest day passes are available at a discounted rate.",
  },
  {
    q: "Is there parking nearby?",
    a: "The Seaside location has nearby public parking. The Historic Center is best accessed on foot or by public transport — it's steps from the city center.",
  },
];

export default function CoworkingFAQ() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
          FAQ
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
          Common Questions
        </h2>

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
