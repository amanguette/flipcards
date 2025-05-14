# 🧩 Guide des Workflows GitHub – Flipcards

Ce document décrit les automatisations en place dans `.github/workflows/` pour synchroniser les issues du projet Flipcards avec leur cycle de vie dans le GitHub Project.

---

## 🔁 Cycle de vie d'une User Story (US)

### 1. 🆕 Création de l'US

- L’issue est ajoutée manuellement ou via l’interface du projet.
- Elle est automatiquement intégrée au **GitHub Project** grâce à un filtre `is:issue`.

_(→ Cette automatisation est configurée dans le **Project**, pas dans ce dossier)_

---

### 2. 🚀 Passage à "in progress" → création de la branche

📄 **Fichier :** `create-branch-on-in-progress.yml`  
🎯 **Déclencheur :** changement d’état dans le GitHub Project vers `in progress`

- Une branche est automatiquement créée au format :
  ```
  feat/#<issue_number>/<slug-titre-us>
  ```
  Exemple : `feat/#42/implement-user-login`

---

### 3. 💻 Premier push → création automatique d’une PR

📄 **Fichier :** `auto-create-pr.yml`  
🎯 **Déclencheur :** `push` sur une branche `feat/#...`

- Une Pull Request est automatiquement ouverte vers la branche principale (ex: `main`).

---

### 4. 🕵️ Passage en "in review"

📄 **Fichier :** `mark-issue-in-review-on-pr-open.yml`  
🎯 **Déclencheur :** ouverture d’une Pull Request

- L’issue liée passe automatiquement au statut `in review`.

---

### 5. ✅ PR mergée → l’issue passe à "done"

📄 **Fichier :** `mark-issue-done-on-merge.yml`  
🎯 **Déclencheur :** PR mergée (événement `pull_request.closed` avec `merged == true`)

- Le label `in review` est retiré.
- Le label `done` est appliqué à l’issue liée.

---

## 📦 Publication (Release automatique)

📄 **Fichier :** `release.yml`  
🎯 **Déclencheur :** `push` sur la branche `main`

- Utilise **semantic-release** pour générer automatiquement une release GitHub à partir des commits.
- Requiert un secret `GH_TOKEN` avec les permissions de publication.

---

## 🏷️ Convention de nommage des branches

```
feat/#<issue_number>/<titre-de-l-us>
```

Exemples :

- `feat/#14/add-login-page`
- `fix/#22/handle-null-user`
- `chore/#31/update-deps`

---

## 🧪 À venir / Idées futures

- Ajout automatique du label `overtime` si l’US est mergée sans estimation
- Calculs de vélocité et temps passé
- Génération de changelogs à la fin d’un sprint
- Déclencheur de rétro ou revue après un sprint (via GitHub discussions ?)

---

## 📋 Récapitulatif des workflows GitHub configurés

| Étape                           | Automatisation                           | Fichier/Action                                     |
| ------------------------------- | ---------------------------------------- | -------------------------------------------------- |
| Création d'une issue            | Ajout automatique au GitHub Project      | (géré via l’interface Project + filtre `is:issue`) |
| Passage de l’US à `in progress` | Création de branche `feat/#<id>/slug`    | `auto-create-branch-on-in-progress.yml`            |
| Premier push sur la branche     | Ouverture automatique de PR              | `auto-create-pr.yml`                               |
| Ouverture de la PR              | Ajout du label `in review` à l’issue     | `mark-issue-in-review-on-pr-open.yml`              |
| Merge de la PR                  | Ajout du label `done` à l’issue          | `mark-issue-done-on-merge.yml`                     |
| Merge de la PR                  | Fermeture de l’issue liée                | `auto-close-issue-on-merge.yml` _(à venir)_        |
| Ajout du label `overtime`       | À implémenter                            | _(non encore développé)_                           |
| Push sur `main`                 | Release automatisée (`semantic-release`) | `release.yml`                                      |

---

🧭 Ce document est uniquement informatif et ne déclenche **aucune action** GitHub.  
Il peut être modifié à volonté pour aider à la compréhension du projet.
