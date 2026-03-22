import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutOffice from "@/assets/about-office.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const timeline = [
  {
    year: "2024",
    title: "Scaling the Team",
    desc: "Our team grew from 5 to over 25 professionals in just two years. We attracted top-tier sales talent and invested in continuous training, ensuring every team member delivered the quality our clients expected.",
    image: aboutTeam,
  },
  {
    year: "2025",
    title: "New Leadership",
    desc: "To fuel the next phase of growth, we welcomed a co-founder to lead operations. With strengthened leadership and a clear strategic vision, Romera is positioned to become the leading outbound sales partner for B2B companies across Europe.",
    image: null,
  },
];

const perks = [
  "Top-tier compensation in the industry",
  "Strong base salary + uncapped performance bonuses",
  "Flexible remote work options throughout the year",
  "Access to high-quality leads — no cold prospecting needed",
  "Rapid career growth in a fast-scaling company",
  "Premium gear from day one: MacBook, monitors, headset",
  "Work with industry-leading tools and technology",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl md:text-6xl text-foreground"
          >
            From vision to reality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Romera was created to tackle a core SaaS challenge: expanding into new international markets. With battle-tested outbound expertise, we've become the go-to partner for European SaaS growth.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-border ml-4 md:ml-0">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{item.year}</p>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-md rounded-xl object-cover aspect-[4/3]"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-foreground text-primary-foreground rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20 rounded-3xl" />
          <div className="relative z-10">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              Ready to Grow with Romera?
            </h2>
            <p className="text-lg opacity-80 max-w-xl mx-auto mb-8">
              Whether you're looking to scale your SaaS business or join our high-performance team, Romera is the place to be.
            </p>
            <a href="https://calendly.com/borge-romerapartners/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25">
                Book a Meeting
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Join Team */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">
              Join Our Team
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Romera, we're redefining outbound sales for SaaS. Work with top-tier clients, earn industry-leading compensation, and be part of a high-performance team.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="rounded-full px-6 py-5 font-semibold border-border text-foreground hover:bg-card">
                Contact Us <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <ul className="space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground text-sm">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
