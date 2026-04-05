import {
  Smartphone,
  CalendarCheck,
  Receipt,
  History,
  Bell,
  Shield,
  Plus,
} from "lucide-react";

const features = [
  {
    icon: Plus,
    title: "Enregistrement de la moto",
    description: "Le client ajoute ses motos : marque, modèle, plaque, kilométrage. Tout centralisé.",
  },
  {
    icon: CalendarCheck,
    title: "Prise de RDV en ligne",
    description: "Choix du créneau, du type d'intervention. Confirmation immédiate par SMS.",
  },
  {
    icon: History,
    title: "Historique complet",
    description: "Chaque intervention, révision et contrôle est consultable par le client.",
  },
  {
    icon: Receipt,
    title: "Factures accessibles",
    description: "Téléchargement PDF, historique complet, zéro appel pour retrouver un document.",
  },
  {
    icon: Bell,
    title: "Notifications & rappels",
    description: "Rappel de révision, contrôle technique, moto prête. Automatique.",
  },
  {
    icon: Shield,
    title: "Espace sécurisé",
    description: "Connexion par compte personnel. Données chiffrées et conformes RGPD.",
  },
];

export default function PortailClientSection() {
  return (
    <section id="portail-client" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: phone mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Background blur */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              {/* Phone frame */}
              <div className="bg-slate-900 rounded-[2.8rem] p-2 shadow-2xl shadow-slate-900/40 border border-white/10 w-64">
                <div className="bg-slate-50 rounded-[2.4rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-5 pt-4 pb-2">
                    <span className="text-xs font-semibold text-slate-800">9:41</span>
                    <div className="w-20 h-4 bg-slate-900 rounded-full" />
                    <div className="flex gap-1">
                      <div className="w-4 h-2.5 bg-slate-800 rounded-sm" />
                      <div className="w-2.5 h-2.5 bg-slate-800 rounded-full" />
                    </div>
                  </div>

                  <div className="px-4 pb-6 space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between py-1">
                      <div>
                        <p className="text-xs text-slate-500">Bonjour,</p>
                        <p className="font-bold text-slate-900 text-sm">Jean Dupont</p>
                      </div>
                      <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">JD</span>
                      </div>
                    </div>

                    {/* Moto card */}
                    <div className="bg-slate-900 rounded-2xl p-3.5 text-white">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-xs text-slate-400">Ma moto</p>
                          <p className="font-bold text-sm mt-0.5">Yamaha MT-07</p>
                          <p className="text-xs text-slate-500">AB-123-CD · 2021</p>
                        </div>
                        <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-4 h-4 text-orange-400" />
                        </div>
                      </div>
                      <div className="flex gap-1.5 mt-2">
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                          ✓ RCT à jour
                        </span>
                        <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">
                          Vidange bientôt
                        </span>
                      </div>
                    </div>

                    {/* Next RDV */}
                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-3.5">
                      <p className="text-xs font-semibold text-orange-600 mb-1">
                        Prochain rendez-vous
                      </p>
                      <p className="font-bold text-slate-900 text-sm">
                        Jeu. 10 avr. — 14h30
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Révision 10 000 km + pneus
                      </p>
                    </div>

                    {/* Actions grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: "📅 Prendre RDV", active: false },
                        { label: "🧾 Factures", active: false },
                        { label: "📋 Historique", active: false },
                        { label: "💬 Contact", active: false },
                      ].map((action) => (
                        <button
                          key={action.label}
                          className="bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-700 shadow-sm"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -right-12 top-16 bg-white border border-slate-200 rounded-xl p-3 shadow-lg w-44">
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bell className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Moto prête ✓</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Votre MT-07 est disponible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              Portail client
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Vos clients ont leur{" "}
              <span className="text-orange-500">espace perso</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Chaque client accède depuis son smartphone à l&apos;historique complet
              de sa moto, ses factures, et peut prendre rendez-vous en quelques
              secondes — sans vous appeler.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
