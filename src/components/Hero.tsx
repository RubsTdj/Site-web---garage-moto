"use client";

import { ArrowRight, Star, CheckCircle2 } from "lucide-react";

const highlights = [
  "Portail client inclus",
  "RDV automatisés",
  "Sans formation requise",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-0">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-16 pb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-sm text-orange-700 font-medium">
              Nouveau — Intégration Allopneus & 1001Pneus
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            Le garage moto{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-orange-500">moderne</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C50 2 100 2 199 5.5"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </span>{" "}
            commence ici
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Automatisez vos prises de rendez-vous, offrez à vos clients un
            portail de suivi, et gérez tout votre atelier depuis un seul
            dashboard.
          </p>

          {/* Checks */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
            {highlights.map((h) => (
              <span
                key={h}
                className="flex items-center gap-1.5 text-sm text-slate-600"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                {h}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-slate-900/20"
            >
              Essayer gratuitement
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#fonctionnalites"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
            >
              Voir une démo
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
              <span className="font-semibold text-slate-700 ml-1">4.9/5</span>
            </div>
            <span className="hidden sm:block text-slate-300">·</span>
            <span>
              <span className="font-semibold text-slate-700">150+</span> garages moto en France
            </span>
            <span className="hidden sm:block text-slate-300">·</span>
            <span>
              <span className="font-semibold text-slate-700">25 000+</span> clients sur le portail
            </span>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative -mb-1">
          {/* Gradient overlay bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />

          <div className="bg-slate-900 rounded-t-2xl border border-slate-800 border-b-0 shadow-2xl shadow-slate-900/20 overflow-hidden max-w-5xl mx-auto">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-slate-800/60 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <div className="flex-1 mx-4 bg-slate-700/60 rounded-md h-6 flex items-center px-3 gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-xs text-slate-500">app.garageos.fr/dashboard</span>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded bg-white/5" />
                <div className="w-6 h-6 rounded bg-white/5" />
              </div>
            </div>

            {/* Dashboard layout */}
            <div className="flex">
              {/* Sidebar */}
              <div className="w-48 bg-slate-950/80 p-3 space-y-1 min-h-72 flex-shrink-0">
                <div className="flex items-center gap-2 px-3 py-2 mb-4">
                  <div className="w-6 h-6 bg-orange-500 rounded" />
                  <span className="text-xs font-bold text-white">GarageOS</span>
                </div>
                {["Dashboard", "Clients", "Rendez-vous", "Commandes", "Factures", "Stock"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
                        i === 0
                          ? "bg-orange-500/20 border border-orange-500/30"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-orange-400" : "bg-slate-600"}`} />
                      <span className={`text-xs ${i === 0 ? "text-orange-300 font-medium" : "text-slate-500"}`}>
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* Main */}
              <div className="flex-1 p-5 space-y-4">
                {/* Top row KPIs */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "RDV aujourd'hui", value: "8", trend: "+2 vs hier" },
                    { label: "Motos en atelier", value: "12", trend: "3 urgentes" },
                    { label: "Commandes pneus", value: "3", trend: "1 livrée" },
                    { label: "CA du mois", value: "18 420€", trend: "+12%" },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className="bg-white/5 border border-white/10 rounded-xl p-3"
                    >
                      <div className="text-xs text-slate-500 mb-1">{kpi.label}</div>
                      <div className="text-lg font-bold text-white mb-0.5">{kpi.value}</div>
                      <div className="text-xs text-orange-400">{kpi.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Alert + table */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-xs font-semibold text-white mb-3">Rendez-vous du jour</div>
                    {[
                      { time: "09:00", name: "M. Dupont", moto: "Yamaha MT-07", status: "En cours" },
                      { time: "11:30", name: "Mme Martin", moto: "Honda CB500", status: "En attente" },
                      { time: "14:00", name: "M. Bernard", moto: "KTM 390", status: "Confirmé" },
                    ].map((r) => (
                      <div key={r.time} className="flex items-center gap-3 py-1.5 border-b border-white/5 last:border-0">
                        <span className="text-xs text-slate-500 w-8">{r.time}</span>
                        <div className="flex-1">
                          <span className="text-xs font-medium text-slate-300">{r.name}</span>
                          <span className="text-xs text-slate-600 ml-2">{r.moto}</span>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${r.status === "En cours" ? "bg-orange-500/20 text-orange-400" : r.status === "Confirmé" ? "bg-green-500/20 text-green-400" : "bg-white/10 text-slate-400"}`}>
                          {r.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                    <div className="text-xs font-semibold text-orange-300 mb-3">Auto-RDV reçu</div>
                    <div className="bg-slate-800 rounded-lg p-2 mb-2">
                      <div className="text-xs text-slate-400">📧 Allopneus.com</div>
                      <div className="text-xs text-slate-300 mt-0.5">2 pneus livrés</div>
                    </div>
                    <div className="text-xs text-orange-300 text-center">→ SMS envoyé au client</div>
                    <div className="mt-2 bg-green-500/20 rounded-lg p-2 text-center">
                      <div className="text-xs text-green-400 font-medium">RDV confirmé ✓</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
