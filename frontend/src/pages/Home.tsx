import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { LoginDrawer } from '../components/LoginDrawer';
import { useAuth } from '../contexts/useAuth';

export const Home: React.FC = () => {
  const { user } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  if (user) {
    // Si connecté, redirige vers dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <main style={{ padding: '2rem' }}>
        <h1>Bienvenue sur FlipCards</h1>
        <p>Présente ici ton application, ses fonctionnalités, etc.</p>
      </main>
      <LoginDrawer
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={() => setIsLoginOpen(false)}
      />
    </>
  );
};
