const partners = [
  { name: "Allopneus.com", sub: "Intégration native" },
  { name: "1001Pneus.fr", sub: "Intégration native" },
  { name: "Moto-Net.com", sub: "Compatible" },
  { name: "Dafy Moto", sub: "Compatible" },
  { name: "Motoblouz", sub: "Compatible" },
  { name: "LOXAM", sub: "Partenaire" },
  { name: "Webike.net", sub: "Compatible" },
  { name: "MotoADN", sub: "Compatible" },
];

export default function PartnersBanner() {
  // Duplicate list for seamless loop
  const doubled = [...partners, ...partners];

  return (
    <section className="py-10 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-7">
        Intégrations &amp; partenaires
      </p>

      <div className="relative">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-12 animate-marquee"
          style={{ width: "max-content" }}
        >
          {doubled.map(({ name, sub }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 text-center px-2"
            >
              <div className="font-bold text-slate-600 text-sm tracking-tight whitespace-nowrap">
                {name}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 whitespace-nowrap">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
