import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const NoCureNoPay = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-foreground text-primary-foreground rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20 rounded-3xl" />
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-6">
            No Cure, No Pay
          </h2>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed mb-8">
            Our approach means you only invest in meetings that drive real value. Success is defined by engaging the right decision-makers, targeting companies that match your ideal customer profile.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25">
            Book a Meeting
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default NoCureNoPay;
