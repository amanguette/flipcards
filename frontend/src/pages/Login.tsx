import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';

export const Login = () => {
  const { signIn, error, loading, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    void (async () => {
      try {
        await signIn(email, password);
        if (!error) {
          await navigate('/dashboard');
        }
      } catch (err) {
        console.error(err);
      }
    })();
  };

  if (user) {
    return <p>Déjà connecté(e)</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Connexion</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Connexion...' : 'Se connecter'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};
