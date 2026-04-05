"use client";

import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";

const guarantees = [
  "Démo personnalisée en 30 min",
  "Migration des données incluse",
  "Formation & support dédié",
  "Sans engagement de durée",
];

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: pitch */}
          <div className="lg:pt-4">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Passez à l&apos;action
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Votre garage mérite
              <br />
              <span className="text-orange-500">mieux que la paperasse</span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Rejoignez les 150+ garages moto qui ont choisi GarageOS. Une démo
              de 30 minutes pour voir exactement ce que ça change pour vous.
            </p>

            {/* Guarantees */}
            <ul className="space-y-3 mb-10">
              {guarantees.map((g) => (
                <li key={g} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {g}
                </li>
              ))}
            </ul>

            {/* Testimonial mini */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <p className="text-sm text-slate-600 italic mb-3">
                &ldquo;En 2 semaines, j&apos;ai récupéré 1h30 par jour. Mes clients adorent
                le portail.&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  TM
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">Thierry M.</div>
                  <div className="text-xs text-slate-500">Moto Service 44 – Nantes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="font-bold text-slate-900 text-xl mb-1">
              Demander une démo gratuite
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Un conseiller vous rappelle sous 24h ouvrées.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Prénom
                  </label>
                  <input
                    type="text"
                    placeholder="Jean"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Dupont"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nom du garage
                </label>
                <input
                  type="text"
                  placeholder="Moto Service Paris"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  E-mail professionnel
                </label>
                <input
                  type="email"
                  placeholder="jean@mongarage.fr"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nombre de clients actifs (approx.)
                </label>
                <select className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-700">
                  <option value="">Sélectionner</option>
                  <option>Moins de 50</option>
                  <option>50 – 200</option>
                  <option>200 – 500</option>
                  <option>Plus de 500</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all mt-2"
              >
                Je veux une démo gratuite
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Alt contacts */}
            <div className="flex items-center gap-4 mt-5 pt-5 border-t border-slate-100">
              <a
                href="mailto:contact@garageos.fr"
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                contact@garageos.fr
              </a>
              <span className="text-slate-200">|</span>
              <a
                href="tel:+33123456789"
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
