# 🌐 Frontend – Env & Supabase Setup

Ce fichier documente la configuration des **variables d’environnement frontend** et l’initialisation du **client Supabase**, tels qu’utilisés dans les fichiers `getEnvVar.ts` et `supabaseClient.ts`.

---

## 📁 Fichiers concernés

### `getEnvVar.ts`

> Utilitaire qui sécurise l’accès aux variables d’environnement exposées à Vite (`import.meta.env`). Il **limite** cet accès aux seules variables autorisées, définies explicitement.

#### 🔒 Variables autorisées

```ts
const allowedKeys = ['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY', 'VITE_API_URL'] as const;
```

- Empêche l'accès à toute autre variable non déclarée
- Provoque une erreur si une variable attendue est manquante ou vide

---

### `supabaseClient.ts`

> Initialise un client Supabase configuré avec les variables chargées via `getEnvVar`.

Ce fichier :

- garantit que les variables nécessaires sont bien présentes,
- crée un client typé prêt à l’emploi dans le reste de l’application.

---

## 🔐 Variables d’environnement Vite

Les variables nécessaires au frontend sont stockées dans un fichier `.env` à la racine du projet. **Elles doivent toutes commencer par `VITE_`** pour être injectées dans le code via Vite.

### Exemple `.env`

```env
VITE_SUPABASE_URL=https://xyzcompany.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
VITE_API_URL=http://localhost:3000
```

---

## ⚠️ Bonnes pratiques

- ✅ Ne jamais exposer de secrets sensibles (ex: clés `service_role`)
- ✅ Ne jamais ajouter une variable `.env` côté frontend sans la déclarer dans `getEnvVar.ts`
- ✅ Utiliser `getEnvVar()` pour tous les accès à `import.meta.env`
- ✅ Configurer les règles RLS dans Supabase pour restreindre les données
- ✅ Tester les règles RLS en utilisant différentes sessions utilisateur

---

## 📎 Ressources complémentaires

- Supabase RLS Guide: https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security
- Vite Env Reference: https://vitejs.dev/guide/env-and-mode.html
