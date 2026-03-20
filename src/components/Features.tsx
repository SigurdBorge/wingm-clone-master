import { motion } from "framer-motion";
import { TrendingUp, Globe, Cpu, Zap } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "High conversion",
    description:
      "Our proven cold-call methodology cuts through the noise, achieving a 20% conversion rate from lead list to qualified meetings.",
  },
  {
    icon: Globe,
    title: "Multiple regions",
    description:
      "WINGM drives your international growth as a single partner in key markets: DACH, UK & Ireland, Benelux, Scandinavia.",
  },
  {
    icon: Cpu,
    title: "SaaS specialization",
    description:
      "We work exclusively with B2B SaaS companies. Every team member has a strong SaaS background, making us true experts.",
  },
  {
    icon: Zap,
    title: "The fastest way to grow",
    description:
      "From onboarding to your first meetings in under 30 days. Our streamlined formula delivers faster results than traditional agencies.",
  },
];

const Features = () => {
  return (
    <section id="approach" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            Why Choose WINGM?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Our specialized approach delivers results tailored for B2B SaaS & AI companies expanding into new markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
