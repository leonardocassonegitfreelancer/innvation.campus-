import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();
  
  const faqItems = t("faq.items", { returnObjects: true }) as Array<{ q: string; a: string }>;

  return (
    <section id="faq" className="py-24 md:py-36 bg-muted/50">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-12`}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
            {t("faq.label")}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t("faq.title")}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((faq, i) => (
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
