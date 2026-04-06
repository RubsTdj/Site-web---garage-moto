import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales – GarageOS",
  description: "Mentions légales du site GarageOS, éditeur du logiciel de gestion de garage moto.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Mentions légales</h1>
          <p className="text-slate-400 text-sm mb-10">Dernière mise à jour : avril 2025</p>

          <div className="space-y-10 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Éditeur du site</h2>
              <p>Le site <strong className="text-slate-900">garageos.fr</strong> est édité par :</p>
              <div className="mt-3 bg-slate-50 rounded-xl p-5 text-sm space-y-1">
                <p><strong>GarageOS SAS</strong></p>
                <p>Capital social : 10 000 €</p>
                <p>Siège social : 12 rue de la République, 69001 Lyon, France</p>
                <p>SIRET : 123 456 789 00012</p>
                <p>RCS Lyon B 123 456 789</p>
                <p>TVA intracommunautaire : FR 12 123456789</p>
                <p>Directeur de publication : Antoine Rousseau</p>
                <p>Contact : <a href="mailto:contact@garageos.fr" className="text-orange-500 hover:underline">contact@garageos.fr</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Hébergement</h2>
              <div className="bg-slate-50 rounded-xl p-5 text-sm space-y-1">
                <p><strong>GitHub, Inc.</strong></p>
                <p>88 Colin P Kelly Jr Street, San Francisco, CA 94107, États-Unis</p>
                <p>Site : <span className="text-slate-500">github.com</span></p>
              </div>
              <p className="mt-3 text-sm">Les données clients sont hébergées séparément sur des serveurs <strong className="text-slate-900">OVHcloud</strong>, situés en France (Roubaix).</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Propriété intellectuelle</h2>
              <p>L'ensemble du contenu de ce site (textes, images, logos, icônes, graphiques, code source) est la propriété exclusive de GarageOS SAS ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.</p>
              <p className="mt-3">Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de GarageOS SAS.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Limitation de responsabilité</h2>
              <p>GarageOS SAS ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur lors de l'accès au site, résultant de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises.</p>
              <p className="mt-3">GarageOS SAS se réserve le droit de modifier ou d'interrompre, à titre temporaire ou permanent, tout ou partie du site sans préavis.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Données personnelles</h2>
              <p>La collecte et le traitement des données personnelles effectués via ce site sont soumis à notre <a href="/confidentialite" className="text-orange-500 hover:underline">Politique de confidentialité</a>, conforme au Règlement Général sur la Protection des Données (RGPD) n°2016/679 du 27 avril 2016.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Droit applicable</h2>
              <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Contact</h2>
              <p>Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à :</p>
              <p className="mt-2"><a href="mailto:legal@garageos.fr" className="text-orange-500 hover:underline">legal@garageos.fr</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
