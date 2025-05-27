import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { LoginDrawer } from './components/LoginDrawer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './contexts/useAuth';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';

const App: React.FC = () => {
  const [loginOpen, setLoginOpen] = React.useState(false);
  const { user, signOut } = useAuth();

  const handleLoginSuccess = () => {
    // Ici on peut recharger les données utilisateur si nécessaire
  };

  return (
    <BrowserRouter>
      <Header
        onOpenLogin={() => setLoginOpen(true)}
        user={user}
        onLogout={() => {
          void signOut();
        }}
      />
      <LoginDrawer
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={() => {
          handleLoginSuccess();
          setLoginOpen(false);
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
