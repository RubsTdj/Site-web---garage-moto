"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Je ne suis pas à l'aise avec l'informatique. Est-ce difficile à utiliser ?",
    a: "Non. GarageOS a été conçu par et pour des gérants de garage — pas des informaticiens. L'interface est aussi simple qu'un agenda papier, mais en beaucoup plus puissant. Notre équipe vous forme en 1 heure et reste disponible 7j/7.",
  },
  {
    q: "Combien de temps faut-il pour tout mettre en place ?",
    a: "48 heures en moyenne. Notre équipe s'occupe de migrer vos données existantes (clients, motos, historique). Vous n'avez rien à saisir manuellement. Le jour J, vos clients reçoivent leur invitation par SMS.",
  },
  {
    q: "Est-ce que mes clients doivent télécharger une application ?",
    a: "Non. Le portail client fonctionne directement depuis un navigateur web, sur mobile ou ordinateur. Vos clients reçoivent un lien par SMS ou e-mail. Un clic et c'est ouvert.",
  },
  {
    q: "Puis-je essayer GarageOS avant de m'abonner ?",
    a: "Oui. Le plan Pro est disponible en essai gratuit 30 jours, sans carte bancaire requise. Nous offrons aussi une démo personnalisée de 30 minutes avec un de nos conseillers.",
  },
  {
    q: "Est-ce que ça fonctionne avec Allopneus et 1001Pneus ?",
    a: "Oui, c'est l'une de nos fonctionnalités phares. GarageOS détecte automatiquement les e-mails de livraison de ces plateformes et envoie un SMS à votre client pour qu'il réserve son créneau de pose — sans aucune action de votre part.",
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: "Absolument. Vos données et celles de vos clients sont hébergées en France (OVHcloud, Roubaix), chiffrées en transit (TLS) et au repos (AES-256). GarageOS est entièrement conforme au RGPD. Vous restez propriétaire de vos données à tout moment.",
  },
  {
    q: "Que se passe-t-il si je résilie ?",
    a: "Vous pouvez exporter toutes vos données en un clic (clients, historique, factures) au format CSV ou PDF. Pas de données retenues en otage. L'abonnement mensuel se résilie à tout moment, sans frais.",
  },
  {
    q: "GarageOS fonctionne-t-il pour un garage avec plusieurs techniciens ?",
    a: "Oui. Vous pouvez créer autant de comptes techniciens que nécessaire, définir les droits d'accès de chacun, et suivre les interventions par technicien dans le dashboard. Le plan Entreprise supporte même plusieurs établissements.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Questions fréquentes</h2>
          <p className="text-lg text-slate-500">
            Tout ce que vous voulez savoir avant de démarrer.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-colors ${
                open === i ? "border-orange-200 bg-orange-50/30" : "border-slate-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-semibold text-sm leading-snug pr-4 ${open === i ? "text-slate-900" : "text-slate-700"}`}>
                  {q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform text-slate-400 ${open === i ? "rotate-180 text-orange-500" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Vous avez d'autres questions ?{" "}
          <a href="/#contact" className="text-orange-500 hover:text-orange-600 font-medium">
            Parlez à un conseiller →
          </a>
        </p>
      </div>
    </section>
  );
}
