import React, { useState, useEffect, createContext, useContext } from "react";
import {
  getAuth,
  onIdTokenChanged,
  signInAnonymously,
  User as FirebaseUser,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase";
import { Text } from "@ui-kitten/components";

const AuthContext = createContext({ user: undefined });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    console.log("auth AuthProvider!", auth);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
