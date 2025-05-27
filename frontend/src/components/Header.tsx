import type { User } from '@supabase/supabase-js';
import React from 'react';

interface HeaderProps {
  onOpenLogin: () => void;
  user: User | null;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLogin, user, onLogout }) => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '1px solid #ddd',
        position: 'sticky',
        top: 0,
        background: 'white',
        zIndex: 1000,
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>FlipCards</div>
      <div>
        {user ? (
          <>
            <span style={{ marginRight: '1rem' }}>Bonjour, {user.email}</span>
            <button
              onClick={() => {
                void onLogout();
              }}
            >
              Se déconnecter
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              void onOpenLogin();
            }}
          >
            Se connecter
          </button>
        )}
      </div>
    </header>
  );
};
