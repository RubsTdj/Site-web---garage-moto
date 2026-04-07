"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Wrench } from "lucide-react";

const links = [
  { href: "/#portail-client", label: "Portail client" },
  { href: "/#dashboard", label: "Dashboard" },
  { href: "/#fonctionnalites", label: "Comment ça marche" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <Wrench className="w-4 h-4 text-orange-400" />
          </div>
          <span className="font-bold text-xl text-slate-900">
            Garage<span className="text-orange-500">OS</span>
          </span>
        </Link>

        {/* Desktop links — only on large screens */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((l) => {
            const isActive = l.href === "/blog" && pathname.startsWith("/blog");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-orange-500"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* CTA — only on large screens */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
          >
            Connexion
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            Démo gratuite
          </Link>
        </div>

        {/* Hamburger — tablets & mobile (below lg) */}
        <button
          className="lg:hidden p-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile / Tablet menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-orange-500 py-2.5 border-b border-slate-50 last:border-0 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-slate-600 py-2.5 border-b border-slate-50 transition-colors"
          >
            Connexion
          </Link>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold bg-slate-900 text-white text-center py-3 rounded-xl mt-3 hover:bg-slate-800 transition-colors"
          >
            Demander une démo gratuite
          </Link>
        </div>
      )}
    </header>
  );
}
