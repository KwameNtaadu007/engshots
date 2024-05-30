"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase/config';

const AuthContext = createContext({ user: null, setUser: () => {} });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup function to prevent memory leaks
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
