# 📦 flipcards – Workflow de gestion de projet

## 🗂️ Objectif général

Mettre en place un système de gestion de projet fluide, automatisé et traçable dans GitHub Projects, en s’appuyant sur GitHub Actions pour automatiser les tâches de développement autour des User Stories (US), sprints, et branches de travail.

---

## 🧩 Champs personnalisés pour les issues (User Stories)

| Champ      | Type            | Valeurs possibles                                |
| ---------- | --------------- | ------------------------------------------------ |
| Status     | Single Select   | `todo`, `in progress`, `in review`, `done`       |
| Priority   | Single Select   | `low`, `medium`, `high`, `critical`              |
| Sprint     | Iteration       | Définie par itérations de temps (ex. 2 semaines) |
| Estimation | Number (heures) | Temps estimé pour réaliser l’US                  |
| Time Spent | Number (heures) | Temps passé (renseigné manuellement)             |

---

## 🧱 Structure du backlog

- **Epics** : GitHub Issues taggées comme "epic" via un label ou un champ dédié.
- **User Stories (US)** :
  - Peuvent être rattachées à un epic (ou non).
  - Peuvent être techniques ou fonctionnelles.

---

## 🔁 Workflow des US

1. **Création** : L’US est ajoutée avec un titre, description, estimation et sprint éventuel.
2. **Début de travail** :
   - Passage de `todo` à `in progress`
   - Branche automatiquement créée : `feat/#48/add-authentication-forms`
3. **Travail sur la branche** :
   - Développeur la récupère en local : `git pull origin feat/#48/...`
   - À la première contribution (`push`), une Pull Request (PR) est automatiquement ouverte
4. **Review** :
   - L’US passe à `in review`
   - Le temps passé peut être renseigné
5. **Validation** :
   - Merge de la PR
   - Passage de l’US à `done`
   - Suppression optionnelle de la branche

---

## 🧠 Règles & automatisations spécifiques

- **Nom de branche conventionnel** : `feat/#<id>/<slug-titre>`
- **Overtime** : Si `Time Spent > Estimation`, un label `overtime` est ajouté automatiquement.
- **Labels possibles** : `UI design`, `frontend`, `backend`, `db`, `conf`, `ci/cd`, `blocked`
- **Sprints filtrables** : Visualisation des issues par sprint via le champ `Sprint`
- **Pas de blocage** si estimation absente, mais une alerte visuelle possible.

---

## 🔁 Automatisations GitHub (Workflows)

Le projet utilise plusieurs workflows GitHub Actions pour automatiser la gestion des User Stories (US) : création de branches, ouverture de Pull Requests, mise à jour automatique des statuts, etc.
Ces automatisations facilitent le suivi des tâches et réduisent les actions manuelles pendant le cycle de développement.

👉 Pour un aperçu détaillé du fonctionnement et de chaque étape, consulte le fichier [`workflows-guide.md`](.github/workflows/workflows-guide.md).

---

## 🏷️ Labels de type / scope

| Label       | Description                            |
| ----------- | -------------------------------------- |
| `frontend`  | Travail côté interface utilisateur     |
| `UI design` | Conception UI (maquettes, prototypage) |
| `backend`   | Logique serveur, APIs, traitement      |
| `database`  | Modifications sur la base de données   |
| `conf`      | Configuration (outils, env, etc.)      |
| `ci/cd`     | Intégration continue, déploiement      |
| `blocked`   | En attente de dépendance ou bloquant   |

---

## 📝 Compléments à implémenter plus tard

- Pull request template (`.github/pull_request_template.md`)
- GitHub Project custom views (sprint actif, backlog, done...)
- Système de rétrospective (facultatif si équipe solo)
