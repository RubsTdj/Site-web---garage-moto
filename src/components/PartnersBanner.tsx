const partners = [
  { name: "Allopneus.com", sub: "Intégration native" },
  { name: "1001Pneus.fr", sub: "Intégration native" },
  { name: "Moto-Net.com", sub: "Compatible" },
  { name: "Dafy Moto", sub: "Compatible" },
  { name: "Motoblouz", sub: "Compatible" },
  { name: "LOXAM", sub: "Partenaire" },
];

export default function PartnersBanner() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Intégrations & partenaires
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map(({ name, sub }) => (
            <div key={name} className="text-center">
              <div className="font-bold text-slate-700 text-sm tracking-tight">{name}</div>
              <div className="text-xs text-slate-400 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
