import { Star, Quote } from "lucide-react";
import AnimateIn from "./AnimateIn";

const testimonials = [
  {
    name: "Thierry Manceau",
    role: "Gérant, Moto Service 44 – Nantes",
    avatar: "TM",
    rating: 5,
    text: "Avant GarageOS, je répondais à 10-15 appels par jour pour des infos sur l'avancement des motos. Maintenant mes clients suivent tout en direct. Je gagne au moins 2h par jour.",
  },
  {
    name: "Sandrine Leblanc",
    role: "Propriétaire, Leblanc Moto – Lyon",
    avatar: "SL",
    rating: 5,
    text: "La prise de RDV en ligne a transformé mon agenda. Plus de double réservations, les clients arrivent à l'heure, et j'ai 40% de rappels manqués en moins. Indispensable.",
  },
  {
    name: "Marc Girard",
    role: "Dirigeant, Girard Racing – Bordeaux",
    avatar: "MG",
    rating: 5,
    text: "Le dashboard de commandes est une révolution pour nous. On gère 3 techniciens et les commandes de pièces sont enfin centralisées. On ne perd plus rien dans les e-mails.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Ils nous font confiance
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Ce que disent les garages
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
            ))}
            <span className="ml-2 text-slate-600 font-semibold">4.9/5</span>
            <span className="text-slate-400 ml-1">sur 150+ avis</span>
          </div>
        </AnimateIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, avatar, rating, text }, idx) => (
            <AnimateIn key={name} delay={idx * 120} animation="scale-in">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative h-full">
                <Quote className="absolute top-5 right-5 w-8 h-8 text-orange-100 fill-orange-100" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-6 text-sm">
                  &ldquo;{text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{name}</div>
                    <div className="text-xs text-slate-500">{role}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
