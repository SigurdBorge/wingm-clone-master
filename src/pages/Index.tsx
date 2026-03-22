import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import NoCureNoPay from "@/components/NoCureNoPay";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <NoCureNoPay />
      <Testimonials />
      <Process />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
