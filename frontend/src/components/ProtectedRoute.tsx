import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // Affiche un loader simple ou null pendant la vérification
    return <div>Chargement...</div>;
  }

  if (!user) {
    // Non connecté : redirige vers la home (login)
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
