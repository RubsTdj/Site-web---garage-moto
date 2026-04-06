import type { Metadata } from "next";
import { Wrench, FileText, ChevronRight, CheckCircle2, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Historique – Mon portail GarageOS",
};

const interventions = [
  {
    id: "2025-042",
    date: "12 février 2025",
    type: "Révision 7 500 km",
    moto: "Yamaha MT-07",
    km: "7 500 km",
    technicien: "Lucas M.",
    prix: "285€",
    travaux: [
      "Vidange huile moteur + filtre",
      "Vérification et réglage chaîne",
      "Contrôle plaquettes de frein AV/AR",
      "Vérification des câbles et leviers",
      "Contrôle pression pneus",
      "Vérification éclairage",
    ],
    piecesUtilisees: [
      { ref: "YAM-OIL-07", nom: "Huile moteur Yamalube 10W40 (4L)", prix: "28€" },
      { ref: "YAM-FILTER-07", nom: "Filtre à huile MT-07", prix: "12€" },
    ],
    note: "RAS. Pneus AR à surveiller, usure à ~50%. À prévoir dans 3-4 000 km.",
  },
  {
    id: "2024-089",
    date: "4 novembre 2024",
    type: "Remplacement plaquettes de frein",
    moto: "Yamaha MT-07",
    km: "6 200 km",
    technicien: "Lucas M.",
    prix: "95€",
    travaux: [
      "Remplacement plaquettes de frein avant (jeu complet)",
      "Purge liquide de frein AV",
      "Test et vérification freinage",
    ],
    piecesUtilisees: [
      { ref: "EBC-FA447HH", nom: "Plaquettes EBC HH Sintered AV", prix: "38€" },
    ],
    note: "Plaquettes arrière encore à 60%, pas d'intervention nécessaire.",
  },
  {
    id: "2024-061",
    date: "3 septembre 2024",
    type: "Diagnostic électronique",
    moto: "Yamaha MT-07",
    km: "5 100 km",
    technicien: "Thomas K.",
    prix: "60€",
    travaux: [
      "Lecture des codes défauts via interface YDS",
      "Reset des codes d'erreur",
      "Vérification des connexions capteurs",
    ],
    piecesUtilisees: [],
    note: "Code P0300 (raté allumage). Origine : bougie légèrement encrassée. Remplacée sur place.",
  },
  {
    id: "2024-028",
    date: "15 mai 2024",
    type: "Révision 2 500 km + pose pneus",
    moto: "Yamaha MT-07",
    km: "2 500 km",
    technicien: "Lucas M.",
    prix: "385€",
    travaux: [
      "Vidange huile moteur + filtre",
      "Démontage/montage pneus AV + AR",
      "Équilibrage roues",
      "Réglage pression et géométrie",
      "Bilan de santé complet (45 points)",
    ],
    piecesUtilisees: [
      { ref: "MIC-ROAD6-120", nom: "Michelin Road 6 120/70 ZR17 AV", prix: "125€" },
      { ref: "MIC-ROAD6-180", nom: "Michelin Road 6 180/55 ZR17 AR", prix: "145€" },
    ],
    note: "Moto en parfait état à l'entrée. Pneus d'origine remplacés, usure normale.",
  },
];

export default function HistoriquePage() {
  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Historique des interventions</h1>
        <p className="text-slate-500 mt-1">
          Toutes les interventions effectuées sur vos motos, avec le détail complet.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center">
          <div className="text-2xl font-black text-slate-900">4</div>
          <div className="text-xs text-slate-500 mt-1">Interventions</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center">
          <div className="text-2xl font-black text-orange-500">825€</div>
          <div className="text-xs text-slate-500 mt-1">Total dépensé</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center">
          <div className="text-2xl font-black text-slate-900">9 500</div>
          <div className="text-xs text-slate-500 mt-1">km au compteur</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {interventions.map((intervention, idx) => (
          <details key={intervention.id} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
            <summary className="flex items-center gap-4 p-5 cursor-pointer list-none">
              {/* Timeline dot */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                idx === 0 ? "bg-orange-50 border border-orange-100" : "bg-slate-100"
              }`}>
                <Wrench className={`w-5 h-5 ${idx === 0 ? "text-orange-500" : "text-slate-400"}`} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-slate-900 text-sm">{intervention.type}</span>
                  {idx === 0 && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      Dernier
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>{intervention.date}</span>
                  <span>·</span>
                  <span>{intervention.km}</span>
                  <span>·</span>
                  <span className="font-semibold text-slate-700">{intervention.prix}</span>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0" />
            </summary>

            {/* Detail */}
            <div className="border-t border-slate-100 p-5 space-y-5">
              {/* Travaux */}
              <div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Travaux effectués
                </h3>
                <ul className="space-y-1.5">
                  {intervention.travaux.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pièces */}
              {intervention.piecesUtilisees.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Package className="w-3.5 h-3.5" />
                    Pièces utilisées
                  </h3>
                  <div className="space-y-2">
                    {intervention.piecesUtilisees.map((p) => (
                      <div key={p.ref} className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-2.5">
                        <div>
                          <p className="text-sm font-medium text-slate-700">{p.nom}</p>
                          <p className="text-xs text-slate-400">Réf. {p.ref}</p>
                        </div>
                        <span className="text-sm font-bold text-slate-900">{p.prix}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Note technicien */}
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="text-xs font-semibold text-amber-700 mb-1 flex items-center gap-1.5">
                  📝 Note du technicien ({intervention.technicien})
                </p>
                <p className="text-sm text-amber-900">{intervention.note}</p>
              </div>

              {/* Footer actions */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400">Facture #{intervention.id}</span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Télécharger la facture
                </a>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
