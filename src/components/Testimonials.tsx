import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Romera helped us ramp up fast in new markets. They adapt quickly and connect us with ideal prospects across multiple countries.",
    name: "Head of Sales",
    company: "B2B SaaS Company",
  },
  {
    quote: "We chose Romera over building our own SDR team. Within a week we were up and running, and meetings followed fast. They connect us with ideal prospects across multiple countries.",
    name: "VP of Growth",
    company: "Tech Scale-up",
  },
  {
    quote: "With Romera's fast and excellent onboarding, we've had quality meetings right from the start. This resulted in a high-value pipeline within a few short months.",
    name: "Chief Revenue Officer",
    company: "SaaS Platform",
  },
  {
    quote: "Romera helped us boost our pipeline with high-quality meetings in the Benelux and UK. We've already closed significant ARR. Highly recommended for companies expanding to new regions.",
    name: "Head of Business Development",
    company: "B2B Technology Company",
  },
  {
    quote: "Romera delivers quality leads from C-level execs across Western Europe. Their approach even enabled us to launch a new proposition. They truly stand out.",
    name: "Sales Director",
    company: "Enterprise Software Company",
  },
  {
    quote: "Romera helped us break into DACH, and we closed our first deal within 8 weeks. No fluff, just results.",
    name: "Co-founder",
    company: "AI Start-up",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            What our clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
