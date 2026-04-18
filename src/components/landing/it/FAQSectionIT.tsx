import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Posso usare entrambe le sedi con un abbonamento?",
    a: "Sì! Tutti gli abbonamenti ti danno accesso sia al Centro Storico che allo spazio Sul Mare. Lavora dal mondo che meglio si adatta al tuo umore.",
  },
  {
    q: "Offrite pass giornalieri o giorni di prova?",
    a: "Sono due cose diverse. I pass giornalieri sono per chiunque voglia lavorare qui occasionalmente — nessuna membership richiesta, vieni e basta. I giorni di prova, invece, sono riservati a chi sta valutando seriamente una membership mensile e vuole vivere lo spazio prima di impegnarsi. Se non sai ancora se verrai con regolarità, il pass giornaliero è quello che fa per te.",
  },
  {
    q: "Quali piani di abbonamento sono disponibili?",
    a: "Offriamo opzioni flessibili: pass per scrivania condivisa (giornaliero/settimanale/mensile), scrivanie dedicate e uffici privati. Sono disponibili anche piani personalizzati per team di 5+ persone.",
  },
  {
    q: "C'è accesso 24/7?",
    a: "I membri con scrivania dedicata e ufficio privato godono di accesso 24/7 in entrambe le sedi. I pass per scrivania condivisa sono disponibili durante l'orario regolare.",
  },
  {
    q: "Organizzate eventi?",
    a: "Sì — organizziamo eventi comunitari settimanali tra cui talk, workshop, serate di networking e demo day mensili. Entrambe le sedi ospitano eventi, spesso con temi diversi.",
  },
  {
    q: "Posso prenotare le sale riunioni separatamente?",
    a: "Le sale riunioni possono essere prenotate sia dai membri che dai non membri. Le nostre sale del Centro Storico sono particolarmente popolari per gli incontri con i clienti.",
  },
  {
    q: "È disponibile il parcheggio?",
    a: "La sede Sul Mare ha parcheggio pubblico nelle vicinanze. Il Centro Storico è meglio raggiungibile a piedi o con i mezzi pubblici — è a pochi passi dal centro città.",
  },
];

export default function FAQSectionIT() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 md:py-36 bg-muted/50">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""} text-center mb-12`}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">FAQ</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Domande e Risposte</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-6 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:text-primary hover:no-underline transition-colors">{faq.q}</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
