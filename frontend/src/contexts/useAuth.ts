import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import type { AuthContextType } from './types';

// Type guard : permet à TypeScript de garantir le bon typage pour le retour
function isAuthContext(value: unknown): value is AuthContextType {
  return (
    typeof value === 'object' &&
    value !== null &&
    'signIn' in value &&
    'signOut' in value &&
    'user' in value &&
    'loading' in value &&
    'error' in value
  );
}

export const useAuth = (): AuthContextType => {
  const maybeContext = useContext(AuthContext) as unknown;

  if (!isAuthContext(maybeContext)) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }

  return maybeContext;
};
