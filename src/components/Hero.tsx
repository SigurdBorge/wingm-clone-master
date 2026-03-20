import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-foreground"
        >
          Your outbound sales partner{" "}
          <span className="text-primary">for B2B SaaS & AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          WINGM is an outbound sales agency helping B2B SaaS & AI companies scale effortlessly across Europe.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-3 text-lg md:text-xl font-bold text-foreground"
        >
          No cure, no pay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25">
            Book a Meeting
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-border text-foreground hover:bg-secondary">
            Our Approach
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2"
        >
          <span className="font-heading font-bold text-lg text-foreground">5.0</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">70+ reviews</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-sm font-medium text-muted-foreground uppercase tracking-wider"
        >
          Trusted by 150+ leading B2B SaaS companies
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
