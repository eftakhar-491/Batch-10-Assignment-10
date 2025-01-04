import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "./Firebase.init";

export const useGoogleAuth = () => {
  return signInWithPopup(auth, googleProvider);
};

export const createUser = (email, pass) => {
  return createUserWithEmailAndPassword(auth, email, pass);
};
export const userSignIn = (email, pass) => {
  return signInWithEmailAndPassword(auth, email, pass);
};
export const updateUserData = (value) => {
  return updateProfile(auth.currentUser, value);
};
export const resetUserPass = (email) => {
  return sendPasswordResetEmail(auth, email);
};
export const userSignOut = () => {
  return signOut(auth);
};
