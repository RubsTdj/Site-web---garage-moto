import { Wrench } from "lucide-react";

const footerLinks = {
  Produit: [
    { label: "Portail client", href: "#portail-client" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Automatisations", href: "#fonctionnalites" },
    { label: "Tarifs", href: "#tarifs" },
  ],
  Ressources: [
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Statut", href: "#" },
  ],
  Entreprise: [
    { label: "À propos", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Partenaires", href: "#" },
  ],
  Légal: [
    { label: "Mentions légales", href: "#" },
    { label: "Confidentialité", href: "#" },
    { label: "CGV", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-slate-800 border border-white/10 rounded-lg flex items-center justify-center">
                <Wrench className="w-4 h-4 text-orange-400" />
              </div>
              <span className="font-bold text-lg text-white">
                Garage<span className="text-orange-500">OS</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed">
              Le système d&apos;exploitation de votre garage moto.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} GarageOS. Tous droits réservés.
          </p>
          <p className="text-xs text-slate-600">
            Fait avec passion pour les garages moto français 🏍️
          </p>
        </div>
      </div>
    </footer>
  );
}
