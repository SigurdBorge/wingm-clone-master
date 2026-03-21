import { motion } from "framer-motion";
import { MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "20%", label: "Conversion rate from lead list to qualified sales meetings." },
  { value: "90%", label: "Our outbound approach is focused on cold calling for maximum effectiveness." },
  { value: "100+", label: "Meetings booked per client per quarter, delivering consistent pipeline growth." },
];

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Whether you're ready to take your SaaS business to the next level or simply want to learn more, we'd love to hear from you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25">
              Book a Meeting
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-border text-foreground hover:bg-secondary">
              Our Approach →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: MapPin,
              title: "HQ Europe",
              lines: ["Nieuwezijds Voorburgwal 271", "1012 RL, Amsterdam", "The Netherlands"],
            },
            {
              icon: Mail,
              title: "Sales & Partnerships",
              lines: ["contact@romerapartners.com", "+31 20 250 4641"],
              links: true,
            },
            {
              icon: Clock,
              title: "Opening Hours",
              lines: ["Monday – Friday", "8:00 AM – 5:30 PM"],
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-l-2 border-primary pl-5"
            >
              <h3 className="font-heading font-bold text-foreground mb-3">{card.title}</h3>
              {card.lines.map((line) => (
                <p key={line} className="text-sm text-muted-foreground leading-relaxed">
                  {card.links ? (
                    <a href="#" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors">
                      {line}
                    </a>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground text-center mb-10">
            Let's Connect
          </h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">First Name <span className="text-primary">*</span></label>
                <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-card" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name <span className="text-primary">*</span></label>
                <Input value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-card" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email <span className="text-primary">*</span></label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-card" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message <span className="text-primary">*</span></label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                maxLength={600}
                className="bg-card resize-none"
                placeholder="Please let us know what's on your mind..."
              />
              <p className="text-xs text-muted-foreground mt-1">{message.length} of 600 max characters</p>
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 font-semibold text-base shadow-lg shadow-primary/25">
              Submit
            </Button>
          </form>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-heading font-extrabold text-5xl text-primary mb-3">{stat.value}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
