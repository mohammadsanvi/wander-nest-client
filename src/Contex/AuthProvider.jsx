import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import axios from "axios";

// Create the context
export const AuthContext = createContext();

// Google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initially true while checking auth state

  // Register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update Profile (e.g., name, photo)
  const updateUserProfile = (profile) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, profile);
    }
    return Promise.reject(new Error("No user is logged in"));
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser?.email) {
        const userData = { email: currentUser.email };

        axios.post(
          'https://wander-nest-server.vercel.app/jwt',
          userData,
          {
            withCredentials: true,
          }
        )
          .then(res => {
            console.log('JWT response:', res.data);
          })
          .catch(err => {
            console.error("JWT Error:", err);
          });
      }
    });

    return () => unsubscribe();
  }, []);


  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
