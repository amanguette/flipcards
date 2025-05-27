import React from 'react';
import { useAuth } from '../contexts/useAuth';

export const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Bienvenue, {user?.email}</p>
      <button
        onClick={() => {
          void signOut();
        }}
      >
        Se déconnecter
      </button>
    </div>
  );
};
