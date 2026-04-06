import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Heart, Target, Users, Zap, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos – GarageOS",
  description: "L'histoire de GarageOS, notre mission et l'équipe derrière le logiciel qui digitalise les garages moto en France.",
};

const values = [
  {
    icon: Heart,
    title: "Passion moto avant tout",
    description: "On est des motards. On connaît la culture des garages moto de l'intérieur. Pas de solution générique — on construit pour vous.",
  },
  {
    icon: Target,
    title: "Simplicité non négociable",
    description: "Chaque fonctionnalité doit être utilisable sans formation. Si c'est compliqué, on le simplifie. Toujours.",
  },
  {
    icon: Zap,
    title: "L'automatisation au service de l'humain",
    description: "On automatise le répétitif pour que vous vous concentriez sur ce qui compte : réparer des motos et satisfaire vos clients.",
  },
  {
    icon: Users,
    title: "Les garages, nos partenaires",
    description: "Chaque nouvelle fonctionnalité est co-construite avec des gérants de garage. Vous ne testez pas un produit fini — vous le façonnez.",
  },
];

const team = [
  {
    initials: "AR",
    name: "Antoine Rousseau",
    role: "Co-fondateur & CEO",
    bio: "Ancien gérant d'un garage moto à Lyon pendant 8 ans. A vécu toutes les galères que GarageOS résout.",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    initials: "CM",
    name: "Clara Morin",
    role: "Co-fondatrice & CTO",
    bio: "Ingénieure logiciel passionnée de deux-roues. A construit les premières lignes de code de GarageOS en 2021.",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    initials: "RL",
    name: "Raphaël Leclercq",
    role: "Head of Customer Success",
    bio: "Ex-mécanicien devenu expert du onboarding. Forme chaque nouveau garage avec patience et humour.",
    gradient: "from-green-400 to-green-600",
  },
  {
    initials: "SB",
    name: "Sophie Bernard",
    role: "Head of Product",
    bio: "Obsédée par l'expérience utilisateur. Chaque bouton, chaque écran passe par elle avant de vous arriver.",
    gradient: "from-purple-400 to-purple-600",
  },
];

const milestones = [
  { year: "2021", event: "Fondation de GarageOS à Lyon par Antoine et Clara" },
  { year: "2022", event: "Lancement du portail client — 15 garages pilotes" },
  { year: "2023", event: "Intégration Allopneus & 1001Pneus. Cap des 80 garages" },
  { year: "2024", event: "Dashboard interne complet. 150+ garages en France" },
  { year: "2025", event: "Expansion Europe — Belgique & Suisse. 25 000 clients portail" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
              Notre histoire
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Nés dans un garage.{" "}
              <span className="text-orange-500">Construits pour les garages.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              GarageOS est né d'une frustration simple : pourquoi les gérants de garages moto passent-ils
              autant de temps sur de la paperasse alors qu'ils pourraient réparer des motos ?
            </p>
          </div>
        </section>

        {/* Origin story */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  L'idée est née derrière un comptoir
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    En 2021, Antoine Rousseau gérait son garage moto à Lyon depuis 8 ans. Chaque matin,
                    avant même d'ouvrir l'atelier, il passait 45 minutes à répondre aux e-mails,
                    noter des RDV sur un agenda papier et chercher les factures des clients.
                  </p>
                  <p>
                    Un jour, il reçoit un e-mail d'Allopneus confirmant la livraison de pneus pour
                    un client. Il passe 40 minutes à rappeler le client, négocier un créneau, le noter,
                    l'envoyer par SMS. Pour des pneus.
                  </p>
                  <p>
                    C'est à ce moment qu'il appelle Clara, une amie ingénieure et motarde, avec une
                    seule question : <strong className="text-slate-900">"Est-ce qu'on peut automatiser ça ?"</strong>
                  </p>
                  <p>
                    Trois ans plus tard, 150+ garages moto en France utilisent GarageOS tous les jours.
                  </p>
                </div>
              </div>
              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-6">
                  Notre trajectoire
                </h3>
                <div className="space-y-5">
                  {milestones.map(({ year, event }, i) => (
                    <div key={year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-400 text-xs font-bold">{year}</span>
                        </div>
                        {i < milestones.length - 1 && (
                          <div className="w-px flex-1 bg-white/10 my-1" />
                        )}
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed pt-2.5">{event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                Ce qui nous guide
              </p>
              <h2 className="text-4xl font-bold text-slate-900">Nos valeurs</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                L'équipe
              </p>
              <h2 className="text-4xl font-bold text-slate-900">Les gens derrière GarageOS</h2>
              <p className="text-lg text-slate-500 mt-4 max-w-xl mx-auto">
                Une petite équipe soudée, tous passionnés de moto.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map(({ initials, name, role, bio, gradient }) => (
                <div key={name} className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-white text-xl font-black mx-auto mb-4`}>
                    {initials}
                  </div>
                  <h3 className="font-bold text-slate-900">{name}</h3>
                  <p className="text-xs text-orange-500 font-semibold mt-1 mb-3">{role}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "2021", label: "Année de création", sub: "Lyon, France" },
                { value: "150+", label: "Garages équipés", sub: "en France" },
                { value: "25 000+", label: "Clients portail", sub: "actifs chaque mois" },
                { value: "12", label: "Membres d'équipe", sub: "et ça grandit" },
              ].map(({ value, label, sub }) => (
                <div key={label}>
                  <div className="text-4xl font-black text-orange-400 mb-1">{value}</div>
                  <div className="font-semibold text-white">{label}</div>
                  <div className="text-slate-500 text-sm mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office / location */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-slate-500 text-sm mb-6">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Lyon, France — et remote-first</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-5">
              On est là pour durer
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              GarageOS est une startup indépendante, sans investisseur extérieur à date.
              On croit en la croissance durable construite avec nos clients, pas contre eux.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Lire notre blog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
