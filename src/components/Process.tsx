import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, Target, Phone, BarChart3 } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Onboarding", desc: "Define your ICP and set up a tailored outbound strategy in 1-2 weeks." },
  { icon: Target, title: "Targeting", desc: "We build and refine a curated list of ideal companies for maximum relevance." },
  { icon: Phone, title: "Outreach", desc: "Our senior BDRs engage decision-makers with proven cold-call methodology." },
  { icon: BarChart3, title: "Results", desc: "Qualified meetings booked, pipeline built, and continuous optimization." },
];

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our proven process</p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            Streamlined for sales success
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Every step is designed to maximize your results while ensuring efficiency and alignment with your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-xs font-bold text-primary mb-2">Step {i + 1}</div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/#process">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25">
              Discover Our Process <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
