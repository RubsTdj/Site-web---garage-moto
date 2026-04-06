"use client";

import { useState } from "react";
import Link from "next/link";
import { Wrench, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [tab, setTab] = useState<"client" | "garage">("client");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <Wrench className="w-4 h-4 text-orange-400" />
          </div>
          <span className="font-bold text-xl text-slate-900">
            Garage<span className="text-orange-500">OS</span>
          </span>
        </Link>
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
          Retour au site
        </Link>
      </header>

      {/* Main */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="grid grid-cols-2 border-b border-slate-100">
              <button
                onClick={() => setTab("client")}
                className={`py-4 text-sm font-semibold transition-colors ${
                  tab === "client"
                    ? "text-slate-900 border-b-2 border-orange-500 bg-orange-50/50"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Espace client
              </button>
              <button
                onClick={() => setTab("garage")}
                className={`py-4 text-sm font-semibold transition-colors ${
                  tab === "garage"
                    ? "text-slate-900 border-b-2 border-orange-500 bg-orange-50/50"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Espace garage
              </button>
            </div>

            <div className="p-8">
              {tab === "client" ? (
                <>
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900">
                      Connectez-vous à votre portail
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                      Accédez à vos rendez-vous, factures et historique moto.
                    </p>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Adresse e-mail
                      </label>
                      <input
                        type="email"
                        placeholder="jean@email.fr"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-semibold text-slate-700">
                          Mot de passe
                        </label>
                        <a href="#" className="text-xs text-orange-500 hover:text-orange-600">
                          Mot de passe oublié ?
                        </a>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <Link
                      href="/portail"
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
                    >
                      Se connecter
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </form>

                  <p className="text-center text-xs text-slate-400 mt-6">
                    Vous n'avez pas encore de compte ?{" "}
                    <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                      Demandez l'accès à votre garage
                    </a>
                  </p>
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900">
                      Accès garage
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                      Connectez-vous à votre dashboard de gestion.
                    </p>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        E-mail professionnel
                      </label>
                      <input
                        type="email"
                        placeholder="contact@mongarage.fr"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-semibold text-slate-700">
                          Mot de passe
                        </label>
                        <a href="#" className="text-xs text-orange-500 hover:text-orange-600">
                          Mot de passe oublié ?
                        </a>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
                    >
                      Accéder au dashboard
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </form>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <p className="text-center text-xs text-slate-400 mb-3">
                      Pas encore client GarageOS ?
                    </p>
                    <Link
                      href="/#contact"
                      className="w-full border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold py-2.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
                    >
                      Demander une démo gratuite
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Trust */}
          <p className="text-center text-xs text-slate-400 mt-5">
            Connexion sécurisée · Données hébergées en France 🇫🇷
          </p>
        </div>
      </div>
    </div>
  );
}
