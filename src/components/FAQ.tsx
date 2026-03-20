import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the time commitment required for a successful onboarding?",
    a: "On average, onboarding with WINGM requires 1-2 weeks, during which we collaborate with you in 3 sessions to define your Ideal Customer Profile (ICP) and set up a tailored outbound strategy.",
  },
  {
    q: "What kind of businesses can WINGM help with their expansion?",
    a: "WINGM specializes in working with B2B SaaS companies looking to expand into key European markets, including Benelux, Scandinavia, DACH, and the UK.",
  },
  {
    q: "How does WINGM book meetings for us?",
    a: "We use our proven outbound method combining an advanced tech stack for targeted prospecting with a 90% focus on cold calling for direct and effective outreach.",
  },
  {
    q: "Why does WINGM have a better conversion rate than most marketing channels?",
    a: "Our expert Senior BDRs excel at engaging top decision-makers. We combine hyper-precise targeting, an advanced tech stack worth tens of thousands per month, and persistent account development for sustained results.",
  },
  {
    q: "Why is WINGM a better choice than building an in-house team?",
    a: "WINGM provides specialized efficiency, a no-cure-no-pay model with zero overhead costs, faster results (meetings within 2-4 weeks), and zero risk — if we don't deliver, you don't pay.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
