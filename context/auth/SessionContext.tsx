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
interface ContextTutor {
  [x: string]: any;
  gender: string;
  bio: string[];
  _updatedAt: string;
  location: string;
  phone_number: string;
  date_of_birth: string;
  _createdAt: string;
  tutor_payments: boolean;
  email: string;
  subjects: string[];
  _id: string;
  _rev: string;
  Teaches_at_home: boolean;
  slug: {
    current: string;
    _type: string;
  };
  last_login: string;
  maximum_number_of_sessions: number;
  name: string;
  price: number;
  session_duration: number;
  total_teaching_experience: number;
  registration_date: string;
  can_travel: boolean;
  weekly_availability: number;
  platform: string;
  languages: string[];
  _type: string;
  time_slots: string[];
}

interface AuthContextProps {
  user: ContextUser | null;
  tutor: ContextTutor | null;
  login: (userData: ContextUser) => void;
  logout: () => void;
  setTutorData: (tutorData: ContextTutor) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  tutor: null,
  login: () => {},
  logout: () => {},
  setTutorData: () => {},
});

const SessionContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<ContextUser | null>(null);
  const [tutor, setTutor] = useState<ContextTutor | null>(null);

  useEffect(() => {
    const userSessionData = localStorage.getItem('userSession');
    const tutorSessionData = localStorage.getItem('tutorSession');

    if (userSessionData) {
      const userData = JSON.parse(userSessionData);
      const expiration = userData.expiration;

      if (expiration && expiration < Date.now()) {
        localStorage.removeItem('userSession');
        setUser(null);
      } else {
        setUser(userData);
      }
    }

    if (tutorSessionData) {
      const tutorData = JSON.parse(tutorSessionData);
      const expiration = tutorData.expiration;

      if (expiration && expiration < Date.now()) {
        localStorage.removeItem('tutorSession');
        setTutor(null);
      } else {
        setTutor(tutorData);
      }
    }
  }, []);

  const login = (userData: ContextUser) => {
    const expiration = Date.now() + 2 * 60 * 60 * 1000; // 2 hours in milliseconds

    const sessionData = { ...userData, expiration };
    localStorage.setItem('userSession', JSON.stringify(sessionData));
    setUser(userData);
  };

  const setTutorData = (tutorData: ContextTutor) => {
    const expiration = Date.now() + 2 * 60 * 60 * 1000; // 2 hours in milliseconds
    const tutorSessionData = { ...tutorData, expiration };
    localStorage.setItem('tutorSession', JSON.stringify(tutorSessionData));
    setTutor(tutorData);
  };

  const logout = () => {
    localStorage.removeItem('userSession');
    setUser(null);
    localStorage.removeItem('tutorSession');
    setTutor(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, tutor, setTutorData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default SessionContext;
