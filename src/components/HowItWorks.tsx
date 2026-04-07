import { Database, Palette, Rocket, ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Import de vos données",
    description:
      "Notre équipe migre votre fichier clients, l'historique des motos et vos données existantes. Aucune saisie manuelle.",
    detail: "Migration en 24h",
  },
  {
    number: "02",
    icon: Palette,
    title: "Configuration à vos couleurs",
    description:
      "Logo, couleurs, services proposés, techniciens, horaires. Votre GarageOS ressemble à votre garage.",
    detail: "Personnalisation complète",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lancement & formation",
    description:
      "Vos clients reçoivent une invitation à créer leur compte. Vous êtes formé en 1h. Vous êtes en production.",
    detail: "Opérationnel en 48h",
  },
];

export default function HowItWorks() {
  return (
    <section id="fonctionnalites" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Mise en place
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Opérationnel en 48h
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Notre équipe s&apos;occupe de tout. Vous n&apos;avez rien à
            configurer.
          </p>
        </AnimateIn>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map(({ number, icon: Icon, title, description, detail }, idx) => (
            <AnimateIn key={number} delay={idx * 150} animation="fade-up">
              <div className="relative h-full">
                {/* Connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-8 left-[calc(100%_-_1rem)] w-8 items-center justify-center z-10">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}

                <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-4xl font-black text-slate-100">{number}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg mb-3">{title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-4">{description}</p>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-100 px-3 py-1.5 rounded-full">
                    ✓ {detail}
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA */}
        <AnimateIn delay={450} className="mt-12 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 duration-200"
          >
            Démarrer maintenant
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-sm text-slate-400 mt-3">
            Migration incluse · Support dédié · Sans engagement
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
