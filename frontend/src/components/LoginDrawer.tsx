import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface LoginDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const LoginDrawer: React.FC<LoginDrawerProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      onLoginSuccess();
      onClose();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Erreur de connexion inconnue');
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 999,
        }}
      />
      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '200px',
          maxWidth: '100vw',
          height: '100vh',
          background: 'white',
          padding: '1rem',
          boxShadow: '-2px 0 8px rgba(0,0,0,0.15)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{
            alignSelf: 'flex-end',
            fontSize: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>
        <h2>Connexion</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          style={{ marginBottom: '1rem', width: '100%' }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          style={{ marginBottom: '1rem', width: '100%' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !loading && email && password) {
              void handleLogin();
            }
          }}
        />
        <button onClick={() => void handleLogin()} disabled={loading || !email || !password}>
          {loading ? 'Connexion...' : 'Se connecter'}
        </button>
      </aside>
    </>
  );
};
