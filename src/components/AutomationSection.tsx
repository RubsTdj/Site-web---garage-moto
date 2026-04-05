import { Mail, Zap, CalendarCheck, ArrowRight, Bell } from "lucide-react";

const steps = [
  {
    icon: Mail,
    color: "blue",
    label: "E-mail reçu",
    description: "Allopneus ou 1001Pneus confirme la livraison des pneus commandés",
    tag: "📧 allopneus.com",
  },
  {
    icon: Zap,
    color: "orange",
    label: "GarageOS détecte",
    description: "Le système parse automatiquement l'e-mail et identifie le client concerné",
    tag: "⚡ Analyse en 2s",
  },
  {
    icon: Bell,
    color: "purple",
    label: "SMS envoyé",
    description: "Le client reçoit un SMS personnalisé l'invitant à réserver son créneau de pose",
    tag: "💬 SMS automatique",
  },
  {
    icon: CalendarCheck,
    color: "green",
    label: "RDV réservé",
    description: "Le client choisit son créneau depuis son portail. L'agenda se met à jour.",
    tag: "✅ Agenda mis à jour",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-100 text-blue-600",
  orange: "bg-orange-50 border-orange-100 text-orange-600",
  purple: "bg-purple-50 border-purple-100 text-purple-600",
  green: "bg-green-50 border-green-100 text-green-600",
};

const iconColorMap: Record<string, string> = {
  blue: "text-blue-500",
  orange: "text-orange-500",
  purple: "text-purple-500",
  green: "text-green-500",
};

export default function AutomationSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <Zap className="w-3.5 h-3.5" />
              Automatisation
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Vos pneus livrés.
              <br />
              Le RDV pris{" "}
              <span className="text-orange-500">automatiquement.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              GarageOS se connecte à vos e-mails Allopneus et 1001Pneus. Dès
              qu&apos;une livraison est confirmée, un SMS est automatiquement
              envoyé à votre client pour qu&apos;il réserve son créneau de pose.
              Zéro action de votre part.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Fonctionne avec Allopneus, 1001Pneus et tous vos fournisseurs",
                "Personnalisation du message SMS envoyé",
                "Le RDV apparaît directement dans votre agenda",
                "Relance automatique si le client ne répond pas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <div className="w-5 h-5 bg-green-50 border border-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
            >
              Voir toutes les automatisations
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: flow visualization */}
          <div className="space-y-3">
            {steps.map(({ icon: Icon, color, label, description, tag }, idx) => (
              <div key={label}>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 border rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[color]}`}
                    >
                      <Icon className={`w-5 h-5 ${iconColorMap[color]}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-slate-900 text-sm">{label}</span>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">{description}</p>
                    </div>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex justify-center my-1">
                    <div className="w-px h-4 bg-slate-200" />
                  </div>
                )}
              </div>
            ))}

            {/* Time saved badge */}
            <div className="bg-slate-900 rounded-2xl p-5 text-center mt-2">
              <div className="text-3xl font-black text-orange-400 mb-1">
                ~45 min
              </div>
              <div className="text-sm text-slate-400">
                économisées par commande pneu traitée
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
