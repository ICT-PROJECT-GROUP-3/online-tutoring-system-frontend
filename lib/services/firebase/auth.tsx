import {
  User,
  signOut as authSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './index';

type AuthUser = {
  uid: string;
  email: string | null;
  name: string | null;
};

type AuthUserContextType = {
  authUser: AuthUser | null;
  isLoading: boolean;
  setAuthUser: (user: AuthUser | null) => void;
  signOut: () => void;
};

const AuthUserContext = createContext<AuthUserContextType>({
  authUser: null,
  isLoading: true,
  setAuthUser: () => {},
  signOut: () => {},
});

export default function useFirebaseAuth(): AuthUserContextType {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const router = useRouter();

  const clear = () => {
    setAuthUser(null);
    setIsLoading(false);
  };

  const authStateChanged = async (user: User | null) => {
    setIsLoading(true);

    if (!user) {
      clear();
      return;
    }

    setAuthUser({
      uid: user.uid,
      email: user.email,
      name: user.displayName,
    });
    setIsLoading(false);
  };

  const signOut = () => {
    authSignOut(auth).then(() => {
      clear();
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  });

  return {
    authUser,
    isLoading,
    setAuthUser,
    signOut,
  };
}

type AuthUserProviderProps = {
  children: React.ReactNode;
};

export const AuthUserProvider: React.FC<AuthUserProviderProps> = ({
  children,
}: AuthUserProviderProps): JSX.Element => {
  const { authUser, isLoading, setAuthUser, signOut } = useFirebaseAuth();
  return (
    <AuthUserContext.Provider
      value={{ authUser, isLoading, setAuthUser, signOut }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuth = (): AuthUserContextType => useContext(AuthUserContext);
