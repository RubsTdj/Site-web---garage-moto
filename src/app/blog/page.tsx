import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogClient from "./BlogClient";
import NewsletterForm from "./NewsletterForm";

export const metadata: Metadata = {
  title: "Blog – GarageOS | Conseils pour garages moto",
  description: "Conseils, guides et actualités pour les gérants de garages moto. Fidélisation client, automatisation, intégrations pneus, RGPD et plus.",
  openGraph: {
    title: "Blog GarageOS — Conseils pour votre garage moto",
    description: "Guides pratiques et retours d'expérience pour digitaliser et optimiser votre garage moto.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                Le blog GarageOS
              </p>
              <h1 className="text-5xl font-bold text-slate-900 mb-4">
                Conseils pour votre garage moto
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Fidélisation, automatisation, gestion — tout ce qu&apos;il faut savoir pour faire tourner un garage moderne.
              </p>
            </div>
            <BlogClient />
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Restez informé</h2>
            <p className="text-slate-500 mb-6">Un article par mois, directement dans votre boîte. Pas de spam.</p>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
