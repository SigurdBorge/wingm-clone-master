import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4">
          Ready to take your SaaS business to the next level?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Proven strategies, real-world examples, and expert tips to land your first customers in new markets, fast.
        </p>
        <a href="https://calendly.com/borge-romerapartners/30min" target="_blank" rel="noopener noreferrer">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25">
            Book a Meeting <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </motion.div>
    </section>
  );
};

export default CTASection;
