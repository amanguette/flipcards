# 🧭 Frontend – Supabase & Env Setup

Ce document explique la gestion de la configuration côté client.

## 📌 Contenu

- [Variables d’environnement dans Vite](#variables-denvironnement-dans-vite)
- [Configuration du client Supabase](#configuration-du-client-supabase)
- [Référence](#référence)

## Variables d’environnement dans Vite

Les variables sont injectées au moment du build. Celles utilisées doivent être préfixées par `VITE_`.

**Exemples :**

```env
VITE_SUPABASE_URL=https://xyzcompany.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
VITE_API_URL=http://localhost:3000
```

## Configuration du client Supabase

Le client est configuré dans `lib/supabaseClient.ts`. Pour garantir la sûreté des accès aux variables d’env, un utilitaire est défini dans `lib/getEnvVar.ts`.

Ces deux fichiers sont typés avec TypeScript pour limiter les erreurs.

## Référence

📄 [`lib/env-and-supabase-setup.md`](./lib/env-and-supabase-setup.md)
