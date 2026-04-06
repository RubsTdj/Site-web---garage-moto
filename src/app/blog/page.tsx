"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock } from "lucide-react";
import { articles } from "./data";

const categories = ["Tous", "Fidélisation", "Automatisation", "Intégrations", "Réglementation"];

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                Le blog GarageOS
              </p>
              <h1 className="text-5xl font-bold text-slate-900 mb-4">
                Conseils pour votre garage moto
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Fidélisation, automatisation, gestion — tout ce qu'il faut savoir pour faire tourner un garage moderne.
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                    cat === "Tous"
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured article */}
        <section className="pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="bg-slate-900 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center hover:bg-slate-800 transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full">
                      {featured.category}
                    </span>
                    <span className="text-slate-500 text-xs flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime} de lecture
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 leading-snug group-hover:text-orange-400 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {featured.author.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{featured.author.name}</div>
                      <div className="text-xs text-slate-500">{featured.date}</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl group-hover:bg-orange-600 transition-colors">
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Articles grid */}
        <section className="pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Tous les articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rest.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                  <div className="border border-slate-200 rounded-2xl p-6 hover:border-orange-200 hover:shadow-md transition-all h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-slate-400 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-3 leading-snug group-hover:text-orange-500 transition-colors flex-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {article.author.initials}
                        </div>
                        <div>
                          <div className="text-xs font-medium text-slate-700">{article.author.name}</div>
                          <div className="text-xs text-slate-400">{article.date}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Restez informé
            </h2>
            <p className="text-slate-500 mb-6">
              Un article par mois, directement dans votre boîte. Pas de spam.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
              <input
                type="email"
                placeholder="votre@garage.fr"
                className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <button
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
