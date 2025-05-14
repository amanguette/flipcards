# README_dev.md

## 📁 Structure du projet

```
flipcards/
├── backend/        # Application NestJS
├── frontend/       # Application React (Vite)
```

---

## 🚀 Démarrage rapide

### Frontend (React + Vite)

```bash
cd frontend
pnpm install
pnpm dev         # Démarre le serveur Vite
```

### Backend (NestJS)

```bash
cd backend
pnpm install
pnpm start:dev   # Démarre le serveur Nest en mode watch
```

---

## 📆 Scripts disponibles

### Frontend

| Script       | Description                             |
| ------------ | --------------------------------------- |
| `dev`        | Lance le serveur de développement Vite  |
| `build`      | Compile TypeScript + build Vite         |
| `preview`    | Sert l'app compilée localement          |
| `lint`       | Lint avec ESLint                        |
| `lint:fix`   | Lint et corrige automatiquement         |
| `format`     | Vérifie le format avec Prettier         |
| `format:fix` | Formate tous les fichiers avec Prettier |
| `typecheck`  | Vérifie les types sans générer d'output |

### Backend

| Script       | Description                              |
| ------------ | ---------------------------------------- |
| `start`      | Lance l'application Nest en production   |
| `start:dev`  | Lance le serveur Nest en mode watch      |
| `start:prod` | Lance le build compilé (dist)            |
| `build`      | Compile le projet Nest                   |
| `lint`       | Lint avec ESLint                         |
| `lint:fix`   | Lint et corrige automatiquement          |
| `format`     | Vérifie le format avec Prettier          |
| `format:fix` | Formate tous les fichiers avec Prettier  |
| `test`       | Lance tous les tests unitaires avec Jest |
| `test:watch` | Mode watch pour Jest                     |
| `test:cov`   | Génère un rapport de couverture          |
| `test:e2e`   | Lance les tests end-to-end               |

---

## 🌍 Variables d'environnement

Assure-toi d'avoir un fichier `.env` dans le répertoire `backend/` si nécessaire.

**Exemple — backend :**

```env
DATABASE_URL="postgresql://postgres.iuqpojliwhzzwrdknwpo:[password]@aws-0-eu-west-3.pooler.supabase.com:5432/postgres?pgbouncer=true&connection_limit=1"
PORT=3000
```

> Cette URL est configurée pour utiliser PgBouncer (pool de connexions) fourni par Supabase.
>
> - `pgbouncer=true` : indique une compatibilité avec le pooler
> - `connection_limit=1` : chaque client est limité à une seule connexion simultanée, ce qui est adapté au mode transaction de PgBouncer

**Info — frontend :**

Actuellement, aucune variable d'environnement n'est nécessaire côté frontend.
Si des erreurs de type apparaissent dans `vite.config.ts`, il est possible de les corriger en installant les types Node.js :

```bash
pnpm add -D @types/node
```

---

## ✅ Bonnes pratiques

- Utiliser `pnpm` pour une installation plus rapide et cohérente
- Lancer `pnpm format:fix && pnpm lint:fix` avant chaque commit
- Penser à `pnpm typecheck` pour prévenir les erreurs TS
- Utiliser des messages de commit standardisés avec `pnpm commit` (voir ci-dessous)

---

## 🧲 Convention de commits

Le projet suit la convention [Conventional Commits](https://www.conventionalcommits.org/fr/v1.0.0/), facilitant les changelogs automatisés et une meilleure lisibilité de l'historique Git.

Commitizen est déjà installé comme dépendance du projet. Pour l'utiliser :

```bash
pnpm commit
```

Cela ouvre un assistant interactif pour rédiger un message de commit conforme.

### 📝 Exemples de messages

- `feat(backend): ajout de l’authentification`
- `fix(frontend): correction du bug sur la pagination`
- `chore: mise à jour des dépendances`
  > Le scope (backend, frontend, etc.) est optionnel mais recommandé pour plus de clarté dans les mono-repos.

---

## 🛡️ Husky – Prévention avant commit

Le projet utilise **Husky** pour exécuter automatiquement des vérifications avant chaque commit Git. Cela garantit que le code est bien formaté, linté et typé avant d’être versionné.

### 🔧 Installation locale

Husky est déjà configuré dans le projet. Si jamais tu clones le dépôt ou que Husky ne semble pas actif, exécute simplement :

```bash
pnpm dlx husky-init && pnpm install
```

Cela initialise Husky dans le dossier `.husky/`.

### 🔗 Hook `pre-commit`

Le hook `pre-commit` est configuré pour exécuter les commandes suivantes avant chaque commit :

```bash
pnpm lint
pnpm format
pnpm typecheck
```

Voici le contenu attendu du fichier `.husky/pre-commit` :

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm lint
pnpm format
pnpm typecheck
```

Assure-toi que ce fichier est bien exécutable :

```bash
chmod +x .husky/pre-commit
```

> 💡 Tu peux vérifier que Husky est bien actif en lançant `git commit` : il doit lancer automatiquement les vérifications ci-dessus.

---

## 🧪 Organisation des tests

### Structure du répertoire de tests

Voici une structure recommandée pour organiser proprement les tests dans un projet NestJS :

```
/backend
  /src
    /users
      users.controller.ts
      users.service.ts
      users.module.ts
  /test
    /users
      users.controller.spec.ts      // Tests unitaires pour UsersController
      users.service.spec.ts         // Tests unitaires pour UsersService
    app.e2e-spec.ts                 // Test d'intégration ou E2E pour l'ensemble de l'application
```

- **/src/users/** : Contient la logique métier de ton application (contrôleur, service, module).
- **/test/users/** : Contient les tests unitaires ou d'intégration relatifs au module `users`.
- **app.e2e-spec.ts** : Ce fichier contient les tests end-to-end (E2E) qui testent l'application entière, y compris les routes HTTP et leurs interactions.

---

## 🔍 Vérifications globales

```bash
pnpm lint        # ESLint (linting)
pnpm format      # Prettier (vérif. de style)
pnpm typecheck   # TypeScript (types)
pnpm test        # Tests unitaires
```

---

## 🔁 Automatisations GitHub (Workflows)

Le projet utilise plusieurs workflows GitHub Actions pour automatiser la gestion des User Stories (US) : création de branches, ouverture de Pull Requests, mise à jour automatique des statuts, etc.
Ces automatisations facilitent le suivi des tâches et réduisent les actions manuelles pendant le cycle de développement.

👉 Pour un aperçu détaillé du fonctionnement et de chaque étape, consulte le fichier .github/workflows/workflows-guide.md

---

## 🤝 Contributions

Avant de pousser, merci de :

1. Formater et lint le code
2. Vérifier les types
3. Lancer les tests
