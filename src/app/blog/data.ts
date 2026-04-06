export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: { name: string; initials: string; role: string };
  content: string;
};

export const articles: Article[] = [
  {
    slug: "fidelisation-clients-moto",
    title: "5 façons de fidéliser vos clients moto sans effort",
    excerpt:
      "La fidélisation client est le nerf de la guerre pour un garage moto. Voici 5 techniques concrètes, applicables immédiatement, qui transforment un client occasionnel en ambassadeur.",
    category: "Fidélisation",
    readTime: "6 min",
    date: "12 mars 2025",
    author: { name: "Antoine Rousseau", initials: "AR", role: "CEO, GarageOS" },
    content: `
## Pourquoi la fidélisation est cruciale pour un garage moto

Un client fidèle dépense en moyenne **3x plus** qu'un nouveau client sur 3 ans. Pourtant, la plupart des garages moto investissent tout leur énergie à en acquérir de nouveaux — souvent au détriment de ceux déjà en portefeuille.

Voici 5 leviers concrets pour changer ça.

## 1. Le portail client : donnez-leur le contrôle

La première source de frustration des motards ? Ne pas savoir où en est leur moto. Proposez un espace en ligne où ils peuvent :
- Suivre l'avancement de l'intervention en temps réel
- Consulter l'historique complet (depuis quand vous les connaissez)
- Télécharger leurs factures sans vous appeler

**Résultat :** moins d'appels entrants, clients rassurés, sentiment de transparence.

## 2. Les rappels automatiques de révision

Votre client ne sait jamais quand faire réviser sa moto. Lui envoyer un SMS automatique au bon moment (avant la date de révision, avant un contrôle technique) vous positionne comme un partenaire de confiance, pas juste un prestataire.

> "J'ai récupéré 30% de mes anciens clients inactifs en 6 mois grâce aux rappels automatiques." — Marc G., Girard Racing Bordeaux

## 3. La photo à la livraison

Prenez une photo de la moto au moment de la restitution. Envoyez-la au client avec un résumé des travaux effectués. C'est simple, ça prend 30 secondes, et ça crée un souvenir positif associé à votre garage.

## 4. Le suivi des pneus usés

Lors de chaque révision, notez l'état des pneus dans le dossier client. Quand ils approchent de l'usure, envoyez un message proactif. Le client commande chez vous avant même d'y penser.

## 5. L'anniversaire de la moto

Envoyez un message le jour de la date d'achat de la moto (ou de la première visite). Simple, humain, inattendu. Ça marque.

---

Ces 5 actions se font toutes automatiquement avec GarageOS. Pas de saisie manuelle, pas de tableur. Juste du temps récupéré et des clients qui reviennent.
    `,
  },
  {
    slug: "automatiser-prise-rdv",
    title: "Comment automatiser la prise de RDV dans votre garage moto",
    excerpt:
      "La prise de RDV par téléphone est chronophage et source d'erreurs. Voici comment passer à un système 100% automatique qui fonctionne même quand vous dormez.",
    category: "Automatisation",
    readTime: "5 min",
    date: "28 février 2025",
    author: { name: "Clara Morin", initials: "CM", role: "CTO, GarageOS" },
    content: `
## Le problème de l'agenda papier

Combien de fois avez-vous eu une double réservation ? Combien de clients n'ont pas rappelé après un message laissé ? Combien de créneaux vides car le client a oublié ?

L'agenda papier (ou l'agenda Google non connecté à votre flux client) crée des frictions inutiles.

## La prise de RDV en ligne : comment ça marche

Un système de réservation en ligne bien configuré permet à votre client de :
1. Choisir le type d'intervention (révision, pneus, diagnostic...)
2. Voir vos créneaux disponibles en temps réel
3. Confirmer son RDV depuis son smartphone en 2 minutes

**Vous recevez** une notification et le RDV s'ajoute à votre agenda automatiquement.

## Les règles à configurer

Pour que ça fonctionne sans friction :
- **Délai minimum** : empêchez les réservations moins de 24h avant
- **Durée par type** : révision = 2h, pose pneus = 45min, diagnostic = 1h
- **Capacité simultanée** : si vous avez 2 techniciens, 2 motos max en même temps
- **Rappels automatiques** : SMS à J-2 et J-1

## Le cas Allopneus / 1001Pneus

C'est là que l'automatisation devient vraiment puissante. Quand un client commande ses pneus en ligne et les fait livrer chez vous :

1. Vous recevez un e-mail de confirmation de livraison
2. GarageOS le détecte et envoie automatiquement un SMS au client
3. Le client clique sur le lien et choisit son créneau
4. L'agenda se met à jour

**Temps passé par vous : 0 seconde.**

## Résultat mesurable

Les garages qui utilisent la prise de RDV automatisée constatent :
- **-70%** d'appels entrants pour les réservations
- **+20%** de taux de présence (moins de no-show grâce aux rappels)
- **+40min/jour** récupérées en moyenne
    `,
  },
  {
    slug: "integration-allopneus-garage",
    title: "Allopneus & 1001Pneus : intégrez vos commandes à votre garage",
    excerpt:
      "Vous recevez des livraisons Allopneus tous les jours mais gérez encore tout manuellement ? Voici comment connecter ces flux à votre gestion de garage.",
    category: "Intégrations",
    readTime: "7 min",
    date: "14 février 2025",
    author: { name: "Raphaël Leclercq", initials: "RL", role: "Customer Success, GarageOS" },
    content: `
## Le contexte : la montée des commandes pneus en ligne

En 2024, plus de 45% des pneus moto en France sont achetés en ligne. La majorité des clients font livrer chez leur garage de confiance pour la pose. C'est une opportunité — mais aussi un défi logistique.

Chaque commande génère :
- Un e-mail de confirmation de livraison
- Un appel ou SMS à passer au client
- Un RDV à créer dans l'agenda
- Un stock temporaire à gérer
- Une facture de pose à émettre

Multiplié par 3 à 10 commandes par semaine, ça représente **2 à 4 heures de travail administratif** que vous pourriez éliminer.

## Comment fonctionne l'intégration

GarageOS connecte votre boîte e-mail (ou une adresse dédiée) aux flux des revendeurs partenaires. Le système :

1. **Détecte** l'e-mail de confirmation de livraison
2. **Identifie** le client dans votre base (par nom ou numéro de commande)
3. **Envoie** un SMS automatique avec un lien de réservation
4. **Crée** le RDV dans votre agenda dès que le client confirme
5. **Pré-remplit** la fiche intervention avec les références des pneus

## Revendeurs supportés

- ✅ Allopneus.com
- ✅ 1001Pneus.fr
- ✅ Moto-Net.Com
- ✅ Motoblouz
- 🔜 Dafy Moto (Q2 2025)
- 🔜 Connexion directe API (plan Entreprise)

## Configuration en 10 minutes

La mise en place se fait en trois étapes :
1. Connectez votre adresse e-mail fournisseur dans les paramètres GarageOS
2. Définissez le template de SMS envoyé au client
3. Activez la règle d'automatisation

Aucune compétence technique requise. Notre équipe support vous accompagne si besoin.

## Ce que ça change concrètement

> "Avant je passais 45 minutes par commande pneu. Maintenant c'est zéro. Le client reçoit son SMS, il réserve, et je vois le RDV dans mon agenda le matin. Je ne fais plus rien." — Sandrine L., Leblanc Moto Lyon
    `,
  },
  {
    slug: "rgpd-garage-moto-2025",
    title: "RGPD et garage moto : ce qu'il faut savoir en 2025",
    excerpt:
      "Vous collectez des données clients (e-mails, téléphones, historique moto). Le RGPD s'applique à vous. Voici ce que vous devez faire concrètement.",
    category: "Réglementation",
    readTime: "8 min",
    date: "3 janvier 2025",
    author: { name: "Sophie Bernard", initials: "SB", role: "Head of Product, GarageOS" },
    content: `
## RGPD : êtes-vous concerné ?

Oui. Dès que vous stockez des données personnelles de clients (nom, prénom, téléphone, e-mail, plaque d'immatriculation), vous êtes soumis au RGPD. Peu importe la taille de votre garage.

## Ce que le RGPD exige concrètement

### 1. Une base légale pour chaque traitement

Vous devez avoir une raison légale pour chaque usage des données :
- **Contrat** : vous utilisez les données pour exécuter la prestation (facturation, RDV)
- **Consentement** : pour l'envoi de newsletters ou SMS marketing

### 2. L'information des clients

Vos clients doivent savoir :
- Quelles données vous collectez
- Pourquoi vous les collectez
- Combien de temps vous les conservez
- Leurs droits (accès, rectification, suppression)

Une mention dans vos CGV ou sur votre site web suffit.

### 3. La durée de conservation

Les données clients doivent être supprimées après une certaine période d'inactivité. La CNIL recommande 3 ans pour les données clients inactifs.

### 4. La sécurité des données

Vos données clients ne doivent pas être stockées dans un fichier Excel non protégé envoyé par e-mail. C'est une violation potentielle.

## Ce que GarageOS fait pour vous

GarageOS est conçu avec le RGPD en tête :
- Données hébergées en France (OVH Cloud)
- Chiffrement en transit et au repos
- Mentions légales et politique de confidentialité fournies
- Gestion des droits d'accès (qui voit quoi dans votre équipe)
- Export et suppression des données à la demande

## La liste de contrôle rapide

- [ ] Politique de confidentialité sur votre site web ou dans vos documents
- [ ] Consentement avant envoi de SMS/e-mail marketing
- [ ] Données stockées dans un outil sécurisé (pas un Excel partagé)
- [ ] Procédure pour répondre aux demandes de suppression client

En cas de doute, la CNIL propose un guide gratuit pour les TPE/PME sur son site.
    `,
  },
];
