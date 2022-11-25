import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebade/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loder, setLoder] = useState(true);
  //regestation email and password
  const regester = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithEmail = (email, password) => {
    setLoder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    setLoder(true);
    return signInWithPopup(auth, provider);
  };
  const updateregesterUser = (userInfo) => {
    setLoder(true);
    return updateProfile(auth.currentUser, userInfo);
  };
  const logout = () => {
    localStorage.removeItem("token");
    return signOut(auth);
  };
  useEffect(() => {
    const unsuscriber = onAuthStateChanged(auth, (currentUser) => {
      setLoder(false);
      setUser(currentUser);
    });
    return () => unsuscriber();
  }, []);
  const allInfo = {
    user,
    loder,
    logout,
    setLoder,
    regester,
    loginWithEmail,
    loginWithGoogle,
    updateregesterUser,
  };
  return (
    <div>
      <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvaider;
