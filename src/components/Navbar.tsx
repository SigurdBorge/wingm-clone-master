import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-heading font-extrabold text-xl tracking-tight text-foreground">
          Romera
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#approach" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Our Approach</a>
          <a href="#process" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Our Process</a>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Company <ChevronDown className={`w-3.5 h-3.5 transition-transform ${companyOpen ? "rotate-180" : ""}`} />
            </button>
            {companyOpen && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-card border border-border rounded-xl shadow-lg py-2 min-w-[160px] animate-fade-in-up" style={{ animationDuration: "0.2s" }}>
                <a href="#" className="block px-5 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors">About us</a>
                <a href="#" className="block px-5 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors">Contact</a>
                <a href="#" className="block px-5 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors">Careers</a>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:block">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-semibold text-sm shadow-lg shadow-primary/25">
            Book a Meeting
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-4">
          <a href="#approach" className="block text-sm font-medium text-foreground">Our Approach</a>
          <a href="#process" className="block text-sm font-medium text-foreground">Our Process</a>
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Company</p>
            <a href="#" className="block text-sm text-foreground pl-3">About us</a>
            <a href="#" className="block text-sm text-foreground pl-3">Contact</a>
            <a href="#" className="block text-sm text-foreground pl-3">Careers</a>
          </div>
          <Button className="w-full bg-primary text-primary-foreground rounded-full font-semibold">
            Book a Meeting
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
