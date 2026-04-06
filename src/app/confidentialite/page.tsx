import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité – GarageOS",
  description: "Comment GarageOS collecte, utilise et protège vos données personnelles. Conforme au RGPD.",
  robots: { index: false, follow: false },
};

export default function ConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Politique de confidentialité</h1>
          <p className="text-slate-400 text-sm mb-10">Dernière mise à jour : avril 2025 — Conforme au RGPD (UE) 2016/679</p>

          <div className="space-y-10 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Responsable du traitement</h2>
              <div className="bg-slate-50 rounded-xl p-5 text-sm space-y-1">
                <p><strong>GarageOS SAS</strong></p>
                <p>12 rue de la République, 69001 Lyon</p>
                <p>DPO : <a href="mailto:dpo@garageos.fr" className="text-orange-500 hover:underline">dpo@garageos.fr</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Données collectées</h2>
              <p className="mb-3">Nous collectons les données suivantes selon votre utilisation :</p>
              <div className="space-y-4">
                {[
                  {
                    title: "Via le formulaire de contact / demande de démo",
                    items: ["Nom et prénom", "Adresse e-mail professionnelle", "Numéro de téléphone", "Nom du garage", "Nombre de clients actifs"],
                    base: "Consentement + intérêt légitime (prospection B2B)",
                  },
                  {
                    title: "Via le portail client (clients de nos garages partenaires)",
                    items: ["Nom, prénom, e-mail, téléphone", "Données de véhicules (marque, modèle, plaque, kilométrage)", "Historique des interventions", "Factures et devis"],
                    base: "Exécution du contrat",
                  },
                  {
                    title: "Via la navigation (cookies analytiques)",
                    items: ["Pages visitées", "Durée de visite", "Source de trafic", "Pays/région (anonymisé)"],
                    base: "Consentement",
                  },
                ].map(({ title, items, base }) => (
                  <div key={title} className="border border-slate-200 rounded-xl p-4">
                    <h3 className="font-semibold text-slate-900 text-sm mb-2">{title}</h3>
                    <ul className="text-sm space-y-1 mb-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-orange-400 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-slate-400">Base légale : {base}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Finalités du traitement</h2>
              <ul className="space-y-2 text-sm">
                {[
                  "Répondre à vos demandes de démo ou d'information",
                  "Fournir et améliorer les services GarageOS",
                  "Envoyer des communications relatives à votre compte ou abonnement",
                  "Analyser l'utilisation du site pour l'améliorer (analytics anonymisés)",
                  "Respecter nos obligations légales (facturation, comptabilité)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Durée de conservation</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left p-3 border border-slate-200 font-semibold text-slate-900">Type de données</th>
                      <th className="text-left p-3 border border-slate-200 font-semibold text-slate-900">Durée</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Prospects (formulaire non converti)", "3 ans"],
                      ["Données clients actifs", "Durée du contrat + 5 ans"],
                      ["Factures et documents comptables", "10 ans (obligation légale)"],
                      ["Données analytics", "13 mois maximum"],
                      ["Cookies de consentement", "6 mois"],
                    ].map(([type, duree]) => (
                      <tr key={type}>
                        <td className="p-3 border border-slate-200 text-slate-600">{type}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 font-medium">{duree}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Partage des données</h2>
              <p className="mb-3">Vos données ne sont jamais vendues. Elles peuvent être partagées avec :</p>
              <ul className="space-y-2 text-sm">
                {[
                  "OVHcloud (hébergement) — France",
                  "Resend (envoi d'e-mails transactionnels) — UE",
                  "Plausible Analytics (statistiques anonymisées) — UE, sans cookies",
                  "Autorités légales si requis par la loi",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Vos droits</h2>
              <p className="mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { droit: "Accès", desc: "Obtenir une copie de vos données" },
                  { droit: "Rectification", desc: "Corriger des données inexactes" },
                  { droit: "Suppression", desc: "Demander l'effacement de vos données" },
                  { droit: "Portabilité", desc: "Recevoir vos données dans un format structuré" },
                  { droit: "Opposition", desc: "Vous opposer à certains traitements" },
                  { droit: "Limitation", desc: "Limiter temporairement le traitement" },
                ].map(({ droit, desc }) => (
                  <div key={droit} className="border border-slate-200 rounded-xl p-3">
                    <p className="font-semibold text-slate-900 text-sm">{droit}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm">Pour exercer ces droits : <a href="mailto:dpo@garageos.fr" className="text-orange-500 hover:underline">dpo@garageos.fr</a> — Réponse sous 30 jours.</p>
              <p className="mt-2 text-sm">Vous pouvez également saisir la <strong>CNIL</strong> : <span className="text-slate-500">cnil.fr</span></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Sécurité</h2>
              <p>GarageOS met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement TLS en transit, chiffrement AES-256 au repos, accès restreint par rôle, journalisation des accès, sauvegardes quotidiennes chiffrées.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Cookies</h2>
              <p>Nous utilisons uniquement des cookies strictement nécessaires au fonctionnement du service, et des cookies analytiques anonymisés via Plausible Analytics (sans tracking cross-site, sans empreinte digitale). Vous pouvez refuser ces derniers via notre bandeau de consentement.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
