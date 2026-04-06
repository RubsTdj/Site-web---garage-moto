import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente – GarageOS",
  description: "Conditions Générales de Vente et d'Utilisation du logiciel GarageOS.",
  robots: { index: false, follow: false },
};

export default function CGVPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Conditions Générales de Vente</h1>
          <p className="text-slate-400 text-sm mb-10">Version en vigueur depuis le 1er janvier 2025</p>

          <div className="space-y-10 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Objet</h2>
              <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong className="text-slate-900">GarageOS SAS</strong> (ci-après "GarageOS" ou "le Prestataire") et tout professionnel (ci-après "le Client") souscrivant à l'un des abonnements GarageOS.</p>
              <p className="mt-3">GarageOS est un logiciel SaaS (Software as a Service) de gestion de garage moto, incluant un portail client, un dashboard interne, des outils de facturation et des fonctionnalités d'automatisation.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Abonnements et tarifs</h2>
              <div className="space-y-4">
                {[
                  { plan: "Starter", prix: "79 € HT/mois", desc: "Portail client jusqu'à 100 clients, prise de RDV, factures PDF, support e-mail" },
                  { plan: "Pro", prix: "149 € HT/mois", desc: "Portail illimité, dashboard complet, auto-RDV, CRM, stock, reporting, support 7j/7" },
                  { plan: "Entreprise", prix: "Sur devis", desc: "Multi-établissements, API, marque blanche, account manager, SLA 99,9%" },
                ].map(({ plan, prix, desc }) => (
                  <div key={plan} className="border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-slate-900">{plan}</h3>
                      <span className="text-orange-500 font-bold text-sm">{prix}</span>
                    </div>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm">Les prix sont indiqués en euros hors taxes. La TVA applicable est de 20%. En cas d'engagement annuel, une remise de 20% est appliquée sur le tarif mensuel.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Commande et acceptation</h2>
              <p>La souscription à un abonnement GarageOS vaut acceptation sans réserve des présentes CGV. La commande est confirmée par l'envoi d'un e-mail de confirmation et de l'accès aux identifiants de connexion.</p>
              <p className="mt-3">L'abonnement prend effet à la date de validation du paiement. Une période d'essai gratuit de 30 jours est offerte sur le plan Pro, sans engagement ni carte bancaire requise pour démarrer.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Facturation et paiement</h2>
              <p>La facturation est mensuelle ou annuelle selon le choix du Client au moment de la souscription. Le paiement est effectué par prélèvement automatique via Stripe (carte bancaire ou SEPA).</p>
              <p className="mt-3">En cas de non-paiement à l'échéance, GarageOS se réserve le droit de suspendre l'accès au service après envoi d'une mise en demeure restée sans effet pendant 8 jours.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Durée et résiliation</h2>
              <p>L'abonnement mensuel est sans engagement. Il peut être résilié à tout moment, avec prise d'effet à la fin de la période en cours.</p>
              <p className="mt-3">L'abonnement annuel est souscrit pour une période de 12 mois et se renouvelle tacitement. La résiliation doit être notifiée au moins 30 jours avant la date de renouvellement.</p>
              <p className="mt-3">En cas de résiliation, le Client dispose de 30 jours pour exporter ses données. Passé ce délai, les données sont supprimées définitivement.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Disponibilité du service</h2>
              <p>GarageOS s'engage à maintenir une disponibilité de <strong className="text-slate-900">99,5%</strong> sur les plans Starter et Pro (hors maintenances planifiées). Le plan Entreprise bénéficie d'un SLA de 99,9% garanti contractuellement.</p>
              <p className="mt-3">Les maintenances planifiées sont communiquées au Client avec un préavis minimum de 48 heures et réalisées preferentiellement la nuit (00h00-06h00 CET).</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Données et confidentialité</h2>
              <p>GarageOS agit en qualité de <strong className="text-slate-900">sous-traitant</strong> au sens du RGPD pour les données des clients finaux (conducteurs de motos). Le Client reste responsable de traitement pour ces données.</p>
              <p className="mt-3">Un Accord de Traitement des Données (DPA) est disponible sur demande à <a href="mailto:dpo@garageos.fr" className="text-orange-500 hover:underline">dpo@garageos.fr</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Limitation de responsabilité</h2>
              <p>La responsabilité de GarageOS est limitée au montant des sommes effectivement payées par le Client au cours des 12 derniers mois précédant le sinistre. GarageOS ne saurait être tenu responsable des pertes de données résultant d'une faute du Client.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Propriété intellectuelle</h2>
              <p>GarageOS accorde au Client une licence d'utilisation non exclusive, non transférable et révocable du logiciel pendant la durée de l'abonnement. Le Client ne peut ni copier, ni modifier, ni distribuer le logiciel.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Droit applicable et litiges</h2>
              <p>Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable dans un délai de 30 jours. À défaut, le tribunal compétent sera le Tribunal de Commerce de Lyon.</p>
              <p className="mt-3">Contact : <a href="mailto:legal@garageos.fr" className="text-orange-500 hover:underline">legal@garageos.fr</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
