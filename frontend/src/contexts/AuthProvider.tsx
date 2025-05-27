import type { AuthChangeEvent, User } from '@supabase/supabase-js';
import { ReactNode, useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          setError(error.message);
          setUser(null);
        } else {
          setUser(data.session?.user ?? null);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    void fetchSession();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: { user: User | null } | null) => {
        setUser(session?.user ?? null);
      },
    );

    return () => {
      subscription?.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const signOut = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
