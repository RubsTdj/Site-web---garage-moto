"use client";

import CountUp from "./CountUp";
import AnimateIn from "./AnimateIn";

const metrics = [
  {
    value: "3h",
    unit: "économisées / jour",
    description: "En automatisant prises de RDV, rappels, relances et génération de documents",
    color: "orange",
  },
  {
    value: "+35%",
    unit: "de fidélisation",
    description: "Un portail client professionnel renforce la confiance et le retour des clients",
    color: "blue",
  },
  {
    value: "0",
    unit: 'appel "où est ma moto"',
    description: "Vos clients suivent l'avancement en temps réel. Vous restez concentré",
    color: "green",
  },
  {
    value: "ROI",
    unit: "dès le 1er mois",
    description: "Le temps économisé et les clients fidélisés couvrent l'abonnement rapidement",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  orange: "text-orange-500",
  blue:   "text-blue-500",
  green:  "text-green-500",
  purple: "text-purple-500",
};

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Impact mesurable
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Ce que ça change, concrètement
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Des résultats visibles dès la première semaine.
          </p>
        </AnimateIn>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map(({ value, unit, description, color }, idx) => (
            <AnimateIn key={unit} delay={idx * 100}>
              <div className="text-center p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all bg-white h-full">
                <div className={`text-5xl font-black mb-1 ${colorMap[color]}`}>
                  {value}
                </div>
                <div className="font-semibold text-slate-900 text-sm mb-2">{unit}</div>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Trust banner — animated gradient */}
        <AnimateIn animation="scale-in">
          <div
            className="animate-gradient-x rounded-2xl p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, #0f172a, #1e293b, #1a1028, #0f172a)",
              backgroundSize: "300% 300%",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-orange-400 mb-1">
                  <CountUp end={150} suffix="+" />
                </div>
                <div className="text-slate-300 font-medium">Garages équipés</div>
                <div className="text-slate-500 text-sm mt-1">en France</div>
              </div>
              <div className="md:border-x border-white/10">
                <div className="text-4xl font-black text-orange-400 mb-1">
                  <CountUp end={25000} suffix="+" />
                </div>
                <div className="text-slate-300 font-medium">Clients portail</div>
                <div className="text-slate-500 text-sm mt-1">actifs chaque mois</div>
              </div>
              <div>
                <div className="text-4xl font-black text-orange-400 mb-1">
                  <CountUp end={98} suffix="%" />
                </div>
                <div className="text-slate-300 font-medium">Satisfaction</div>
                <div className="text-slate-500 text-sm mt-1">sur les renouvellements</div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
