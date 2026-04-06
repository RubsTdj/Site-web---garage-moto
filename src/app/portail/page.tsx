import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  History,
  Receipt,
  Bell,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  Bike,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mon portail – GarageOS",
};

const upcomingRdv = [
  {
    date: "Jeu. 10 avr.",
    time: "14h30",
    type: "Révision 10 000 km + pose pneus",
    garage: "Moto Service Paris – 12e",
    status: "confirmé",
  },
];

const notifications = [
  {
    icon: AlertCircle,
    color: "orange",
    title: "Vidange à prévoir",
    description: "Votre Yamaha MT-07 approche de l'intervalle de vidange (9 500 km).",
    time: "Il y a 2 jours",
  },
  {
    icon: CheckCircle2,
    color: "green",
    title: "Facture disponible",
    description: "La facture #2024-087 (285€) est disponible en téléchargement.",
    time: "Il y a 5 jours",
  },
  {
    icon: Bell,
    color: "blue",
    title: "Rappel révision",
    description: "Votre prochaine révision est dans 3 semaines. RDV confirmé.",
    time: "Il y a 1 semaine",
  },
];

export default function PortailPage() {
  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Bonjour, Jean 👋</h1>
        <p className="text-slate-500 mt-1">Voici un résumé de vos motos et rendez-vous.</p>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { href: "/portail/rdv", icon: CalendarCheck, label: "Prendre RDV", color: "orange" },
          { href: "/portail/historique", icon: History, label: "Historique", color: "blue" },
          { href: "/portail/factures", icon: Receipt, label: "Factures", color: "green" },
          { href: "#", icon: Bell, label: "Notifications", color: "purple" },
        ].map(({ href, icon: Icon, label, color }) => (
          <Link key={label} href={href}>
            <div className={`border border-slate-200 rounded-2xl p-4 text-center hover:shadow-md transition-all cursor-pointer group bg-white`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2 ${
                color === "orange" ? "bg-orange-50" :
                color === "blue" ? "bg-blue-50" :
                color === "green" ? "bg-green-50" :
                "bg-purple-50"
              }`}>
                <Icon className={`w-5 h-5 ${
                  color === "orange" ? "text-orange-500" :
                  color === "blue" ? "text-blue-500" :
                  color === "green" ? "text-green-500" :
                  "text-purple-500"
                }`} />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">{label}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Ma moto */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-slate-900">Ma moto</h2>
              <a href="#" className="text-xs text-orange-500 hover:text-orange-600 font-medium">
                + Ajouter une moto
              </a>
            </div>
            <div className="bg-slate-900 rounded-2xl p-5 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Mon véhicule</p>
                  <h3 className="text-xl font-bold">Yamaha MT-07</h3>
                  <p className="text-slate-400 text-sm mt-1">AB-123-CD · 2021 · 9 500 km</p>
                </div>
                <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Bike className="w-5 h-5 text-orange-400" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-xs text-slate-400 mb-1">Prochaine révision</div>
                  <div className="text-sm font-bold text-orange-400">10 000 km</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-xs text-slate-400 mb-1">Contrôle tech.</div>
                  <div className="text-sm font-bold text-green-400">Jan. 2026</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-xs text-slate-400 mb-1">Dernier entretien</div>
                  <div className="text-sm font-bold text-white">Fév. 2025</div>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <span className="text-xs bg-green-500/20 text-green-400 px-2.5 py-1 rounded-full">✓ RCT à jour</span>
                <span className="text-xs bg-orange-500/20 text-orange-400 px-2.5 py-1 rounded-full">⚠ Vidange bientôt</span>
              </div>
            </div>
          </div>

          {/* Prochain RDV */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-slate-900">Prochain rendez-vous</h2>
              <Link href="/portail/rdv" className="text-xs text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1">
                Voir tout
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            {upcomingRdv.map((rdv, i) => (
              <div key={i} className="bg-orange-50 border border-orange-100 rounded-2xl p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CalendarCheck className="w-4 h-4 text-orange-500" />
                      <span className="font-bold text-slate-900 text-sm">
                        {rdv.date} à {rdv.time}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 mb-1">{rdv.type}</p>
                    <p className="text-xs text-slate-500">{rdv.garage}</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded-full capitalize">
                    {rdv.status}
                  </span>
                </div>
              </div>
            ))}

            <Link
              href="/portail/rdv"
              className="mt-4 w-full border border-dashed border-slate-200 rounded-xl py-3 text-sm text-slate-500 hover:border-orange-300 hover:text-orange-500 transition-colors flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              Prendre un nouveau rendez-vous
            </Link>
          </div>
        </div>

        {/* Right column — notifications */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h2 className="font-bold text-slate-900 mb-4">Notifications</h2>
          <div className="space-y-4">
            {notifications.map(({ icon: Icon, color, title, description, time }) => (
              <div key={title} className="flex gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  color === "orange" ? "bg-orange-50" :
                  color === "green" ? "bg-green-50" :
                  "bg-blue-50"
                }`}>
                  <Icon className={`w-4 h-4 ${
                    color === "orange" ? "text-orange-500" :
                    color === "green" ? "text-green-500" :
                    "text-blue-500"
                  }`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{description}</p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
