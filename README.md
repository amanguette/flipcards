# FlipCards

**FlipCards** est une application web permettant de créer, organiser et réviser des cartes questions/réponses _flashcards_, de manière interactive.

Ce projet fullstack est conçu dans un objectif d’apprentissage.

## 🚀 Objectifs

- Publier un projet personnel structuré, maintenable et facilement déployable
- Exploiter un stack complet (Frontend, Backend, Base de données)
- Mettre en œuvre de bonnes pratiques de développement

## 🧩 Structure du projet

Le projet est divisé en deux parties :

- `frontend/` : application client
- `backend/` : API NestJS avec base de données PostgreSQL (via Supabase)

---

## ⚙️ Stack technique

### Frontend

- **React** (avec hooks)
- **Vite** : bundler rapide pour React
- **TypeScript** : typage statique
- **Sass** : feuilles de style optimisées
- **Zustand** : gestion d’état légère
- **React Router** : navigation
- **React Hook Form** : gestion des formulaires

### Backend

- **[NestJS](https://nestjs.com/)** (architecture modulaire, support TypeScript natif)
- **TypeScript**
- **Prisma** : ORM type-safe
- **Supabase** :
  - Base de données PostgreSQL hébergée
  - Connexion via _Session Pooler_ pour compatibilité IPv4

### Autres

- [PNPM](https://pnpm.io/) (gestionnaire de paquets rapide et efficace)
- Git + GitHub (gestion de version et publication)
- VS Code (fichiers de configuration partagés dans `.vscode/`)

---

## 📁 Arborescence

```
/flipcards
├── frontend/         # Application React (Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/   # Composants réutilisables avec styles sass
│   │   ├── pages/
│   │   ├── styles/       # Fichiers globaux Sass, variables, mixins
│   │   └── main.tsx
│   ├── vite.config.ts
│   └── index.html
│
├── backend/          # API NestJS
│   ├── src/
│   │   ├── modules/      # Modules dédiés (user, quiz, auth, etc.)
│   │   ├── main.ts
│   │   └── app.module.ts
│   ├── prisma/          # Schema, seed, migrations
│   │   └── schema.prisma
│   └── test/
│
├── .github/workflows/   # CI/CD GitHub Actions
├── .gitignore
├── .eslintrc, .prettierrc, .husky/
├── package.json (global)
└── README.md

```

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js ≥ 18
- pnpm
- Git

### Installation

```bash
pnpm install
```

### Lancer le projet

#### Backend

```bash
cd backend
pnpm start:dev
```

#### Frontend

```bash
cd frontend
pnpm dev
```
