import {
  BarChart3,
  Package,
  ClipboardList,
  Zap,
  Users,
  FileOutput,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Suivi temps réel",
    description: "Chaque moto, chaque intervention, chaque technicien — tracés en direct.",
  },
  {
    icon: Package,
    title: "Commandes centralisées",
    description: "Pneus, pièces, consommables. Un seul endroit pour tout commander et suivre.",
  },
  {
    icon: FileOutput,
    title: "Documents en 1 clic",
    description: "Devis, OR, factures PDF générés automatiquement depuis la fiche intervention.",
  },
  {
    icon: Zap,
    title: "Automatisations",
    description: "Rappels, relances, alertes stock. Votre assistant qui ne dort jamais.",
  },
  {
    icon: Users,
    title: "CRM client intégré",
    description: "Historique, notes, préférences, relances programmées. Fidélisez sans effort.",
  },
  {
    icon: BarChart3,
    title: "Reporting complet",
    description: "CA, marges, performance par technicien. Les chiffres qui font grandir.",
  },
];

export default function DashboardSection() {
  return (
    <section id="dashboard" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-white/10">
              <BarChart3 className="w-3.5 h-3.5" />
              Dashboard interne
            </div>
            <h2 className="text-4xl font-bold text-white mb-5 leading-tight">
              Votre cockpit.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Tout sous contrôle.
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Derrière le portail client, GarageOS vous offre un outil de
              gestion interne complet : suivi des interventions, commandes,
              facturation, CRM et automatisations — tout dans un seul dashboard.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all"
            >
              Voir le dashboard en démo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/5 rounded-3xl blur-3xl" />
            <div className="relative bg-slate-950 border border-white/10 rounded-2xl overflow-hidden">
              {/* Top bar */}
              <div className="bg-slate-800/60 px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-slate-500">Dashboard — Moto Service Paris</span>
                <div className="w-12" />
              </div>

              <div className="p-5 space-y-4">
                {/* KPIs */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { l: "RDV aujourd'hui", v: "8", d: "+2" },
                    { l: "En atelier", v: "12", d: "3 urgent" },
                    { l: "CA mois", v: "18K€", d: "+12%" },
                  ].map((k) => (
                    <div key={k.l} className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-xs text-slate-500 mb-1">{k.l}</div>
                      <div className="text-xl font-bold text-white">{k.v}</div>
                      <div className="text-xs text-orange-400">{k.d}</div>
                    </div>
                  ))}
                </div>

                {/* CRM table */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-white">
                      Clients à relancer
                    </span>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">
                      4 en attente
                    </span>
                  </div>
                  {[
                    { name: "M. Dupont", moto: "MT-07", action: "Révision 12 000km", since: "il y a 3 mois" },
                    { name: "Mme Martin", moto: "CB500", action: "Pneus usés", since: "il y a 6 sem." },
                    { name: "M. Bernard", moto: "R1", action: "CT à prévoir", since: "dans 2 mois" },
                  ].map((row) => (
                    <div key={row.name} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                      <div className="w-7 h-7 bg-slate-700 rounded-full flex items-center justify-center text-xs text-slate-300 font-medium flex-shrink-0">
                        {row.name[2]}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-white">{row.name}</div>
                        <div className="text-xs text-slate-500">{row.moto} · {row.action}</div>
                      </div>
                      <div className="text-xs text-slate-600">{row.since}</div>
                      <button className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-lg">
                        Relancer
                      </button>
                    </div>
                  ))}
                </div>

                {/* Doc generation */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                  <FileOutput className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-xs font-medium text-white">Facture #2024-089 générée</div>
                    <div className="text-xs text-slate-500">Dupont · Yamaha MT-07 · 385€</div>
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                    Envoyée ✓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
