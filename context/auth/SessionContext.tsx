import { createContext, useEffect, useState } from 'react';

interface ContextUser {
  accessToken: string;
  user: {
    name: string;
    role: string;
    password: string;
    email: string;
    refreshToken: string;
  };
}

interface AuthContextProps {
  user: ContextUser | null;
  login: (userData: ContextUser) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

const SessionContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<ContextUser | null>(null);

  useEffect(() => {
    // Check if user session exists on page load
    const sessionData = localStorage.getItem('userSession');
    if (sessionData) {
      const userData = JSON.parse(sessionData);
      const expiration = userData.expiration;

      // Check if session has expired
      if (expiration && expiration < Date.now()) {
        // Session has expired, clear user data and session
        localStorage.removeItem('userSession');
        setUser(null);
      } else {
        // Session is valid, set user data
        setUser(userData);
      }
    }
  }, []);

  const login = (userData: ContextUser) => {
    const expiration = Date.now() + 2 * 60 * 60 * 1000; // 2 hours in milliseconds

    const sessionData = { ...userData, expiration };
    localStorage.setItem('userSession', JSON.stringify(sessionData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('userSession');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default SessionContext;
