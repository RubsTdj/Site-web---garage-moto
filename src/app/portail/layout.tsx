"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Wrench,
  LayoutDashboard,
  CalendarCheck,
  History,
  Receipt,
  LogOut,
  Menu,
  X,
  Bell,
} from "lucide-react";

const navItems = [
  { href: "/portail", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/portail/rdv", label: "Mes rendez-vous", icon: CalendarCheck },
  { href: "/portail/historique", label: "Historique", icon: History },
  { href: "/portail/factures", label: "Mes factures", icon: Receipt },
];

export default function PortailLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-white border-b border-slate-100 h-14 flex items-center px-4 lg:px-6 gap-4 sticky top-0 z-40">
        <button
          className="lg:hidden p-1.5 text-slate-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <Link href="/portail" className="flex items-center gap-2 mr-auto">
          <div className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center">
            <Wrench className="w-3.5 h-3.5 text-orange-400" />
          </div>
          <span className="font-bold text-slate-900 text-sm">
            Garage<span className="text-orange-500">OS</span>
          </span>
          <span className="hidden sm:block text-slate-300 text-sm ml-1">·</span>
          <span className="hidden sm:block text-xs text-slate-500 font-medium">Portail client</span>
        </Link>

        {/* Notification bell */}
        <button className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full" />
        </button>

        {/* User avatar */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            JD
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-semibold text-slate-900">Jean Dupont</div>
            <div className="text-xs text-slate-400">jean@email.fr</div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar desktop */}
        <aside className="hidden lg:flex flex-col w-56 bg-white border-r border-slate-100 py-4 sticky top-14 h-[calc(100vh-3.5rem)]">
          <nav className="flex-1 px-3 space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? "bg-orange-50 text-orange-600 border border-orange-100"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${active ? "text-orange-500" : "text-slate-400"}`} />
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="px-3 pt-4 border-t border-slate-100 mx-3">
            <Link
              href="/login"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4 flex-shrink-0" />
              Se déconnecter
            </Link>
          </div>
        </aside>

        {/* Mobile sidebar */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-30 top-14">
            <div className="absolute inset-0 bg-black/20" onClick={() => setMobileOpen(false)} />
            <aside className="relative w-64 h-full bg-white border-r border-slate-100 py-4 flex flex-col">
              <nav className="flex-1 px-3 space-y-1">
                {navItems.map(({ href, label, icon: Icon }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        active
                          ? "bg-orange-50 text-orange-600 border border-orange-100"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${active ? "text-orange-500" : "text-slate-400"}`} />
                      {label}
                    </Link>
                  );
                })}
              </nav>
              <div className="px-3 pt-4 border-t border-slate-100 mx-3">
                <Link
                  href="/login"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Se déconnecter
                </Link>
              </div>
            </aside>
          </div>
        )}

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
