type EnvKey = 'VITE_SUPABASE_URL' | 'VITE_SUPABASE_ANON_KEY' | 'VITE_API_URL';

export function getEnvVar(key: EnvKey): string {
  const value = import.meta.env[key] as string | undefined;

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}
