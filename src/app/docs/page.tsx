import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, CalendarCheck, Users, Package, FileText, BarChart3, Settings, ChevronRight, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation – GarageOS",
  description: "Guide complet pour utiliser GarageOS : portail client, dashboard, automatisations, facturation et plus.",
};

const sections = [
  {
    icon: BookOpen,
    color: "orange",
    title: "Démarrage rapide",
    description: "Configurez GarageOS en moins d'une heure.",
    articles: [
      "Créer votre compte garage",
      "Importer vos clients existants",
      "Configurer votre agenda",
      "Envoyer vos premières invitations clients",
      "Personnaliser votre portail",
    ],
  },
  {
    icon: CalendarCheck,
    color: "blue",
    title: "Prise de rendez-vous",
    description: "Configurez la réservation en ligne.",
    articles: [
      "Créer vos types d'interventions",
      "Définir vos créneaux disponibles",
      "Gérer les confirmations automatiques",
      "Configurer les rappels SMS",
      "Gérer les annulations",
    ],
  },
  {
    icon: Users,
    color: "green",
    title: "Portail client",
    description: "Gérez l'espace client et les accès.",
    articles: [
      "Inviter un client sur le portail",
      "Gérer les fiches motos",
      "Partager l'historique d'intervention",
      "Activer les notifications clients",
      "Configurer les droits d'accès",
    ],
  },
  {
    icon: Package,
    color: "purple",
    title: "Commandes & stock",
    description: "Intégrations pneus et gestion du stock.",
    articles: [
      "Connecter Allopneus.com",
      "Connecter 1001Pneus.fr",
      "Automatiser les RDV de pose",
      "Gérer votre stock interne",
      "Alertes de stock bas",
    ],
  },
  {
    icon: FileText,
    color: "rose",
    title: "Facturation",
    description: "Devis, ordres de réparation et factures.",
    articles: [
      "Créer un devis",
      "Transformer un devis en OR",
      "Générer une facture PDF",
      "Envoyer par e-mail au client",
      "Suivre les paiements",
    ],
  },
  {
    icon: BarChart3,
    color: "amber",
    title: "Reporting",
    description: "Tableaux de bord et analytiques.",
    articles: [
      "Tableau de bord principal",
      "Rapport CA mensuel",
      "Performance par technicien",
      "Taux de retour client",
      "Export des données",
    ],
  },
  {
    icon: Settings,
    color: "slate",
    title: "Paramètres & compte",
    description: "Configuration avancée de votre espace.",
    articles: [
      "Gérer votre abonnement",
      "Ajouter des membres d'équipe",
      "Configurer les templates SMS",
      "Personnaliser les documents PDF",
      "API & intégrations",
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  orange: { bg: "bg-orange-50", text: "text-orange-600", badge: "bg-orange-100 text-orange-700" },
  blue: { bg: "bg-blue-50", text: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
  green: { bg: "bg-green-50", text: "text-green-600", badge: "bg-green-100 text-green-700" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", badge: "bg-purple-100 text-purple-700" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", badge: "bg-rose-100 text-rose-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", badge: "bg-amber-100 text-amber-700" },
  slate: { bg: "bg-slate-100", text: "text-slate-600", badge: "bg-slate-200 text-slate-700" },
};

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Documentation
            </p>
            <h1 className="text-5xl font-bold text-white mb-4">
              Comment utiliser GarageOS
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              Guides complets, tutoriels pas à pas et références techniques.
            </p>
            {/* Search bar (visual) */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher dans la documentation..."
                className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-400 text-sm"
              />
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="py-10 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {["Démarrage rapide", "Portail client", "Automatisations", "Facturation", "API"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-slate-100 hover:bg-orange-50 hover:text-orange-600 text-slate-700 text-sm font-medium rounded-xl cursor-pointer transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Sections grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map(({ icon: Icon, color, title, description, articles }) => {
                const styles = colorMap[color];
                return (
                  <div key={title} className="border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-10 h-10 ${styles.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${styles.text}`} />
                      </div>
                      <div>
                        <h2 className="font-bold text-slate-900">{title}</h2>
                        <p className="text-sm text-slate-500 mt-0.5">{description}</p>
                      </div>
                    </div>

                    {/* Articles list */}
                    <ul className="space-y-1">
                      {articles.map((article) => (
                        <li key={article}>
                          <a
                            href="#"
                            className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-orange-500 transition-colors group"
                          >
                            <span>{article}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-orange-400 transition-colors" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                {
                  title: "Support par chat",
                  description: "Réponse en moins de 2h en jours ouvrés. Accès direct à notre équipe.",
                  cta: "Ouvrir le chat",
                  variant: "primary",
                },
                {
                  title: "Support par e-mail",
                  description: "Décrivez votre problème en détail. Réponse garantie sous 24h.",
                  cta: "Envoyer un e-mail",
                  variant: "secondary",
                },
                {
                  title: "Appel de support",
                  description: "Pour les configurations complexes ou les migrations de données.",
                  cta: "Réserver un créneau",
                  variant: "secondary",
                },
              ].map(({ title, description, cta, variant }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-2xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{description}</p>
                  <a
                    href="#"
                    className={`inline-flex items-center gap-2 font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors ${
                      variant === "primary"
                        ? "bg-slate-900 hover:bg-slate-800 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {cta}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
