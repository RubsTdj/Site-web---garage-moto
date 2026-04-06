"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    // Activer Plausible si disponible
    if (typeof window !== "undefined" && (window as any).plausible) {
      (window as any).plausible("consent-given");
    }
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <Cookie className="w-5 h-5 text-orange-500" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-900 mb-0.5">
            Nous utilisons des cookies
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Des cookies analytiques anonymisés (Plausible) nous aident à améliorer le site. Pas de tracking publicitaire, pas de partage avec des tiers.{" "}
            <Link href="/confidentialite" className="text-orange-500 hover:underline">
              En savoir plus
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors"
          >
            Accepter
          </button>
          <button
            onClick={decline}
            className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors ml-1"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
