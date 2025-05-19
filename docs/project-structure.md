# 🧩 Project Structure & Organization

Ce document décrit l'architecture générale, les choix organisationnels, les conventions et les outils utilisés dans ce projet afin d'assurer cohérence, maintenabilité et extensibilité.

---

## 📁 Structure du repository

```
/app
  /frontend       # Application React (Vite)
  /backend        # API NestJS
  /docs           # Spécifications techniques et fonctionnelles
.github
  /workflows      # Pipelines CI/CD GitHub Actions
project-structure.md
README.md
README_dev.md
CHANGELOG.md
```

---

## 🔧 Environnement technique

| Côté            | Stack                   | Description                           |
| --------------- | ----------------------- | ------------------------------------- |
| Frontend        | React + Vite            | SPA, composantiels, tailwind          |
| Backend         | NestJS (Node.js)        | API REST (ou GraphQL), tests intégrés |
| Base de données | PostgreSQL via Supabase | Auth, stockage, API temps réel        |
| CI/CD           | GitHub Actions          | Lint, test, build, déploiement futur  |

---

## 🪜 Git branching & workflow

- Modèle : **GitHub Flow**
- Branche principale : `main`
- Branches typées : `feat/`, `fix/`, `chore/`, `refactor/`, etc.
- Revue via **Pull Request**, même en solo pour garder un historique propre
- Tags : `v0.1.0`, `v1.0.0`, etc. utilisés pour marquer les versions
- **Intégration de l'ID de la User Story** dans les commits, ex :  
  `feat(auth): ajout login avec Supabase (#14)`

---

## 🧪 Tests et qualité

- **Frontend** : Vitest + Testing Library
- **Backend** : Jest + Supertest
- **Linting** : ESLint / Prettier
- **Hooks Git** : Husky + Commitizen
- **Convention de commits** : [Conventional Commits](https://www.conventionalcommits.org/)

---

## 📦 Gestion de versions

- Convention : [SemVer](https://semver.org/) (ex: v1.0.0)
- Génération automatique (à venir) via :
  - `standard-version` ou `semantic-release`
- Historique dans `CHANGELOG.md` généré automatiquement

---

## 🧰 Outils utilisés

| Outil              | Usage                                       |
| ------------------ | ------------------------------------------- |
| GitHub Projects    | Gestion des tâches et user stories (Kanban) |
| Commitizen         | Conventions de commit                       |
| Husky              | Hooks Git pour bloquer commits invalides    |
| Supabase           | Auth, BDD, stockage                         |
| Docker (optionnel) | Conteneurisation locale                     |

---

## 📐 Conventions de développement

- TypeScript strict activé (front & back)
- Dossiers par **feature** côté frontend
- Tests proches du code
- Revue de code via PR, même pour une personne
- Une issue GitHub = 1 tâche ou user story
- Branche = 1 tâche = 1 PR = 1 commit sémantique (avec ID de l’issue GitHub)

---

## 🔄 Évolutivité du projet

- Pensé pour pouvoir accueillir des contributeurs externes
- Organisation simple à comprendre (mono-repo)
- Mise en place de guidelines dès le début
- Documentation intégrée dans `/docs` ou GitHub Wiki

---

## 🔗 Liens utiles

- [README du projet](./README.md)
- [Roadmap fonctionnelle (MVP, features)](./docs/roadmap.md)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
