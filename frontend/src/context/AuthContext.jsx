import { createContext, useContext, useState, useEffect } from 'react';

const AUTH_STORAGE_KEY = 'ximi-admin-authenticated';

const AuthContext = createContext(null);

// Mock credentials (replace with backend auth later)
const MOCK_USERNAME = 'admin';
const MOCK_PASSWORD = 'admin123';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(stored === 'true');
    setIsChecking(false);
  }, []);

  const login = (username, password) => {
    if (username === MOCK_USERNAME && password === MOCK_PASSWORD) {
      localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      return { success: true };
    }
    return { success: false, error: 'Invalid username or password.' };
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
  };

  const value = { isAuthenticated, isChecking, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
