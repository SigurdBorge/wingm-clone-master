import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-heading font-extrabold text-xl tracking-tight text-foreground">
          WINGM
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#approach" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Our Approach</a>
          <a href="#process" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Our Process</a>
          <div className="relative group">
            <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
              Company <ChevronDown className="w-3.5 h-3.5" />
            </button>
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
          <a href="#" className="block text-sm font-medium text-foreground">Company</a>
          <Button className="w-full bg-primary text-primary-foreground rounded-full font-semibold">
            Book a Meeting
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
