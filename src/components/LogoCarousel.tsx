const logos = [
  { name: "Zuuvi", url: "https://brightsite.devbright.nl/app/uploads/sites/2/2025/02/ZC_Logo_Coloured-1_Grijs-1024x282.png" },
  { name: "Ampler", url: "https://brightsite.devbright.nl/app/uploads/sites/2/2025/03/ampler-logo-Grey.png" },
  { name: "Verusen", url: "https://brightsite.devbright.nl/app/uploads/sites/2/2025/03/Verusen-Horizontal-Logo-1024x245.png" },
  { name: "Priceshape", url: "https://brightsite.devbright.nl/app/uploads/sites/2/2025/02/Priceshape_Grijs.png" },
  { name: "Zensai", url: "https://brightsite.devbright.nl/app/uploads/sites/2/2025/02/ZENSAI_Grijs.png" },
  { name: "AccuRanker", url: "https://brightsite.devbright.nl/app/uploads/sites/2/2025/02/Accuranker-01_Grijs.png" },
  { name: "Hakio", url: "https://brightsite.devbright.nl/app/uploads/sites/2/2025/03/Hakio_logo_grey.png" },
  { name: "Effectory", url: "https://brightsite.devbright.nl/app/uploads/sites/2/2025/03/effectory.png" },
  { name: "Visma", url: "https://brightsite.devbright.nl/app/uploads/sites/2/2025/03/visma-logo-png-transparent-1024x274.png" },
  { name: "Kindly", url: "https://brightsite.devbright.nl/app/uploads/sites/2/2025/04/Kindly-logo.png" },
  { name: "Ingrid", url: "https://brightsite.devbright.nl/app/uploads/sites/2/2025/04/Logo_Ingrid.png" },
];

const LogoCarousel = () => {
  return (
    <section className="py-8 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll-left" style={{ width: "fit-content" }}>
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 px-8 flex items-center justify-center h-12">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain opacity-50 grayscale hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
