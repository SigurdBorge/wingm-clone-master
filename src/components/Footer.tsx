const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-heading font-extrabold text-xl text-foreground">Romera</div>
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#approach" className="hover:text-foreground transition-colors">Our Approach</a>
          <a href="#process" className="hover:text-foreground transition-colors">Our Process</a>
          <a href="#" className="hover:text-foreground transition-colors">Company</a>
        </div>
        <p className="text-sm text-muted-foreground">© 2025 Romera. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
