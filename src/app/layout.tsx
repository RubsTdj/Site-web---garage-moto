import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GarageOS – Le système d'exploitation de votre garage moto",
  description:
    "GarageOS digitalise votre garage moto : portail client, prise de rendez-vous en ligne, gestion des factures, dashboard interne et suivi des commandes. Fidélisez vos clients et gagnez du temps.",
  keywords: [
    "logiciel garage moto",
    "portail client garage",
    "gestion garage moto",
    "prise de rendez-vous moto",
    "dashboard garage",
    "facturation moto",
    "fidélisation client garage",
    "automatisation garage moto",
  ],
  authors: [{ name: "GarageOS" }],
  openGraph: {
    title: "GarageOS – Le système d'exploitation de votre garage moto",
    description:
      "Digitalisez votre garage moto. Portail client, prise de RDV, gestion des commandes pneus, dashboard interne tout-en-un.",
    type: "website",
    locale: "fr_FR",
    siteName: "GarageOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "GarageOS – Digitalisez votre garage moto",
    description:
      "Portail client + dashboard interne pour les garages moto. Automatisez la prise de RDV, fidélisez vos clients.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
