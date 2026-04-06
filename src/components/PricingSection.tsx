"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 79,
    annualPrice: 63,
    description: "Pour les garages qui démarrent leur digitalisation.",
    features: [
      "Portail client (jusqu'à 100 clients)",
      "Prise de RDV en ligne",
      "Historique & factures client",
      "Notifications SMS/e-mail",
      "Génération de factures PDF",
      "Support e-mail",
    ],
    cta: "Commencer",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    monthlyPrice: 149,
    annualPrice: 119,
    description: "La solution complète pour les garages sérieux.",
    features: [
      "Portail client illimité",
      "Dashboard interne complet",
      "Auto-RDV Allopneus & 1001Pneus",
      "CRM & relances automatiques",
      "Commandes & suivi de stock",
      "Génération devis, OR, factures",
      "Reporting & analytique avancé",
      "Support prioritaire 7j/7",
    ],
    cta: "Essayer 30j gratuit",
    highlighted: true,
    badge: "Le plus populaire",
  },
  {
    name: "Entreprise",
    monthlyPrice: null,
    annualPrice: null,
    description: "Pour les réseaux multi-établissements.",
    features: [
      "Tout le plan Pro",
      "Multi-établissements",
      "API & intégrations sur mesure",
      "Marque blanche possible",
      "Onboarding & formation dédiée",
      "Account manager",
      "SLA 99,9% garanti",
    ],
    cta: "Nous contacter",
    highlighted: false,
    badge: null,
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="tarifs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Tarifs
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Simple et transparent
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Pas de frais cachés. Migration incluse. Résiliez quand vous voulez.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-sm font-medium ${!annual ? "text-slate-900" : "text-slate-400"}`}>
            Mensuel
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
              annual ? "bg-orange-500" : "bg-slate-200"
            }`}
            aria-label="Toggle annual billing"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                annual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-slate-900" : "text-slate-400"}`}>
            Annuel
          </span>
          {annual && (
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
              −20%
            </span>
          )}
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map(({ name, monthlyPrice, annualPrice, description, features, cta, highlighted, badge }) => {
            const price = annual ? annualPrice : monthlyPrice;
            return (
              <div
                key={name}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  highlighted
                    ? "bg-slate-900 text-white ring-2 ring-orange-500 ring-offset-2"
                    : "bg-white border border-slate-200"
                }`}
              >
                {badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {badge}
                  </div>
                )}

                <div className="mb-6">
                  <div
                    className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
                      highlighted ? "text-orange-400" : "text-slate-500"
                    }`}
                  >
                    {name}
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    {price === null ? (
                      <span className={`text-2xl font-bold ${highlighted ? "text-white" : "text-slate-900"}`}>
                        Sur devis
                      </span>
                    ) : (
                      <>
                        <span className={`text-4xl font-black ${highlighted ? "text-white" : "text-slate-900"}`}>
                          {price}€
                        </span>
                        <span className={`text-sm mb-1 ${highlighted ? "text-slate-400" : "text-slate-500"}`}>
                          / mois HT
                        </span>
                      </>
                    )}
                  </div>
                  {annual && price !== null && monthlyPrice !== null && (
                    <p className={`text-xs mb-2 ${highlighted ? "text-slate-400" : "text-slate-500"}`}>
                      soit {price * 12}€ / an — économisez {(monthlyPrice - price) * 12}€
                    </p>
                  )}
                  <p className={`text-sm leading-relaxed ${highlighted ? "text-slate-400" : "text-slate-500"}`}>
                    {description}
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          highlighted ? "bg-orange-500/20" : "bg-slate-100"
                        }`}
                      >
                        <Check
                          className={`w-2.5 h-2.5 ${
                            highlighted ? "text-orange-400" : "text-slate-600"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${highlighted ? "text-slate-300" : "text-slate-600"}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className={`flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm transition-all ${
                    highlighted
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  {cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-400 text-sm mt-6">
          {annual
            ? "Facturation annuelle. Tous prix HT."
            : "Engagement mensuel ou annuel (−20%). Tous prix HT."}
        </p>
      </div>
    </section>
  );
}
