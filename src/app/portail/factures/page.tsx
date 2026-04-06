import type { Metadata } from "next";
import { FileText, Download, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Mes factures – Mon portail GarageOS",
};

const factures = [
  {
    numero: "2025-042",
    date: "12 février 2025",
    description: "Révision 7 500 km – Yamaha MT-07",
    montantHT: "237,50€",
    tva: "47,50€",
    montantTTC: "285,00€",
    status: "payée",
    moyen: "Carte bancaire",
  },
  {
    numero: "2024-089",
    date: "4 novembre 2024",
    description: "Remplacement plaquettes de frein AV – Yamaha MT-07",
    montantHT: "79,17€",
    tva: "15,83€",
    montantTTC: "95,00€",
    status: "payée",
    moyen: "Espèces",
  },
  {
    numero: "2024-061",
    date: "3 septembre 2024",
    description: "Diagnostic électronique – Yamaha MT-07",
    montantHT: "50,00€",
    tva: "10,00€",
    montantTTC: "60,00€",
    status: "payée",
    moyen: "Virement",
  },
  {
    numero: "2024-028",
    date: "15 mai 2024",
    description: "Révision 2 500 km + pose pneus Michelin Road 6 – Yamaha MT-07",
    montantHT: "320,83€",
    tva: "64,17€",
    montantTTC: "385,00€",
    status: "payée",
    moyen: "Carte bancaire",
  },
];

const statusConfig = {
  payée: {
    icon: CheckCircle2,
    label: "Payée",
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-100",
  },
  "en attente": {
    icon: Clock,
    label: "En attente",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-100",
  },
  impayée: {
    icon: AlertCircle,
    label: "Impayée",
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-100",
  },
};

export default function FacturesPage() {
  const total = factures.reduce((sum, f) => sum + parseFloat(f.montantTTC.replace(",", ".").replace("€", "")), 0);

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Mes factures</h1>
          <p className="text-slate-500 mt-1">Téléchargez vos factures en PDF à tout moment.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3 text-right">
          <div className="text-xs text-slate-500 mb-0.5">Total dépensé</div>
          <div className="text-xl font-black text-slate-900">{total.toFixed(2).replace(".", ",")}€</div>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
          <div className="text-2xl font-black text-green-600">4</div>
          <div className="text-xs text-green-700 font-medium mt-1">Factures payées</div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-center">
          <div className="text-2xl font-black text-amber-600">0</div>
          <div className="text-xs text-amber-700 font-medium mt-1">En attente</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center">
          <div className="text-2xl font-black text-slate-900">4</div>
          <div className="text-xs text-slate-500 mt-1">Total factures</div>
        </div>
      </div>

      {/* Table - desktop */}
      <div className="hidden md:block bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50">
              <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Facture
              </th>
              <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Description
              </th>
              <th className="text-right px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Montant TTC
              </th>
              <th className="text-center px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Statut
              </th>
              <th className="px-5 py-3.5" />
            </tr>
          </thead>
          <tbody>
            {factures.map((f, idx) => {
              const s = statusConfig[f.status as keyof typeof statusConfig];
              const StatusIcon = s.icon;
              return (
                <tr key={f.numero} className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${idx === factures.length - 1 ? "border-0" : ""}`}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-slate-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">#{f.numero}</p>
                        <p className="text-xs text-slate-400">{f.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-sm text-slate-600 max-w-xs">{f.description}</p>
                    <p className="text-xs text-slate-400 mt-0.5">via {f.moyen}</p>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <p className="text-sm font-bold text-slate-900">{f.montantTTC}</p>
                    <p className="text-xs text-slate-400">HT : {f.montantHT}</p>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${s.bg} ${s.text} ${s.border}`}>
                      <StatusIcon className="w-3 h-3" />
                      {s.label}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      PDF
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Cards - mobile */}
      <div className="md:hidden space-y-3">
        {factures.map((f) => {
          const s = statusConfig[f.status as keyof typeof statusConfig];
          const StatusIcon = s.icon;
          return (
            <div key={f.numero} className="bg-white border border-slate-200 rounded-2xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-slate-900 text-sm">#{f.numero}</p>
                  <p className="text-xs text-slate-400">{f.date}</p>
                </div>
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${s.bg} ${s.text} ${s.border}`}>
                  <StatusIcon className="w-3 h-3" />
                  {s.label}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-3">{f.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-slate-900">{f.montantTTC}</span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-orange-500 hover:text-orange-600 font-medium"
                >
                  <Download className="w-4 h-4" />
                  Télécharger
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legal note */}
      <p className="text-xs text-slate-400 mt-6 text-center">
        Les factures sont conservées 10 ans conformément à la réglementation fiscale française.
      </p>
    </div>
  );
}
