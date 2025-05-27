import { createClient } from '@supabase/supabase-js';
import { getEnvVar } from './getEnvVar';

export const supabase = createClient(
  getEnvVar('VITE_SUPABASE_URL'),
  getEnvVar('VITE_SUPABASE_ANON_KEY'),
);
