import { ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

const problems = [
  {
    emoji: "📞",
    title: '"Où en est ma moto ?"',
    description:
      "Vos clients appellent sans cesse pour connaître l'avancement. Chaque appel vous coupe de votre travail.",
    time: "~20 min / jour",
  },
  {
    emoji: "📧",
    title: "E-mail de livraison pneus",
    description:
      "Vous recevez un e-mail d'Allopneus. Vous appelez le client. Vous attendez. Vous rappelez. Vous notez dans votre agenda.",
    time: "~45 min / commande",
  },
  {
    emoji: "📄",
    title: "La paperasse quotidienne",
    description:
      "Devis à rédiger, factures à envoyer, relances à faire... Des heures de travail administratif à faible valeur.",
    time: "~2h / jour",
  },
  {
    emoji: "🔍",
    title: '"Vous avez fait quoi exactement ?"',
    description:
      "Retrouver l'historique d'un client prend du temps. Factures égarées, notes perdues, e-mails introuvables.",
    time: "~10 min / recherche",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Le quotidien sans GarageOS
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Vous perdez du temps{" "}
            <span className="line-through text-slate-400">tous les jours</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            La plupart des garages moto passent plus de{" "}
            <strong className="text-slate-700">3 heures par jour</strong> sur
            des tâches administratives qui pourraient être automatisées.
          </p>
        </AnimateIn>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map(({ emoji, title, description, time }, idx) => (
            <AnimateIn key={title} delay={idx * 100}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-200 hover:shadow-md transition-all group h-full">
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {description}
                </p>
                <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-100 text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                  ⏱ {time}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Arrow / transition */}
        <AnimateIn delay={400} className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="text-slate-400">Tout ça</span>
            <ArrowRight className="w-4 h-4 text-orange-500" />
            <span className="bg-orange-500 text-white px-3 py-1.5 rounded-full">
              automatisé avec GarageOS
            </span>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
