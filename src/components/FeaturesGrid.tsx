import {
  CalendarCheck,
  FileText,
  Package,
  Users,
  BarChart3,
  RefreshCcw,
  Bell,
  FileOutput,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    category: "Agenda",
    title: "Prise de RDV automatisée",
    description:
      "Vos clients réservent en ligne 24h/24. Rappels SMS automatiques. Plus de no-show.",
    color: "orange",
  },
  {
    icon: RefreshCcw,
    category: "Automatisation",
    title: "Relances intelligentes",
    description:
      "Relance automatique pour révision à venir, contrôle technique, rappel pneus usés. Le bon message au bon moment.",
    color: "blue",
  },
  {
    icon: FileOutput,
    category: "Documents",
    title: "Génération de documents",
    description:
      "Devis, ordres de réparation, factures PDF générés en un clic. Signature électronique incluse.",
    color: "green",
  },
  {
    icon: Package,
    category: "Stock",
    title: "Suivi des commandes pneus",
    description:
      "Centralisation des commandes Allopneus, 1001Pneus et autres fournisseurs. Stock en temps réel.",
    color: "purple",
  },
  {
    icon: Users,
    category: "CRM",
    title: "Gestion client complète",
    description:
      "Fiche client, historique des motos, notes internes, préférences. Retrouvez tout en quelques secondes.",
    color: "rose",
  },
  {
    icon: Bell,
    category: "Notifications",
    title: "Alertes personnalisées",
    description:
      "Stock critique, moto prête, révision dépassée... Vous et vos clients êtes toujours informés.",
    color: "amber",
  },
  {
    icon: FileText,
    category: "Facturation",
    title: "Factures & encaissements",
    description:
      "Créez, envoyez et suivez vos factures. Lien de paiement en ligne intégré.",
    color: "teal",
  },
  {
    icon: BarChart3,
    category: "Analytique",
    title: "Tableaux de bord",
    description:
      "CA, interventions, performance par technicien, taux de retour. Pilotez avec les bons chiffres.",
    color: "indigo",
  },
];

const colorStyles: Record<string, { bg: string; text: string; badge: string }> = {
  orange: { bg: "bg-orange-50", text: "text-orange-600", badge: "bg-orange-100 text-orange-700" },
  blue: { bg: "bg-blue-50", text: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
  green: { bg: "bg-green-50", text: "text-green-600", badge: "bg-green-100 text-green-700" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", badge: "bg-purple-100 text-purple-700" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", badge: "bg-rose-100 text-rose-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", badge: "bg-amber-100 text-amber-700" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", badge: "bg-teal-100 text-teal-700" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", badge: "bg-indigo-100 text-indigo-700" },
};

export default function FeaturesGrid() {
  return (
    <section id="fonctionnalites" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Tout ce qu&apos;il vous faut
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Un seul outil. Tout dedans.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Fini les 5 logiciels qui ne se parlent pas. GarageOS centralise tout
            ce dont vous avez besoin pour gérer votre garage moto au quotidien.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, category, title, description, color }) => {
            const styles = colorStyles[color];
            return (
              <div
                key={title}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-lg transition-all group cursor-default"
              >
                {/* Badge */}
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${styles.badge}`}
                >
                  {category}
                </span>

                {/* Icon */}
                <div
                  className={`w-10 h-10 ${styles.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-5 h-5 ${styles.text}`} />
                </div>

                <h3 className="font-semibold text-slate-900 mb-2 text-sm leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
