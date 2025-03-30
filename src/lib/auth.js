import { auth } from "./firebase";
import { 
  signInWithPopup, 
  GithubAuthProvider, 
  GoogleAuthProvider, 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";

// Email/Password Sign Up
export const signUpWithEmail = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Email/Password Login
export const signInWithEmail = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Password Reset
export const resetPassword = async (email) => {
  return sendPasswordResetEmail(auth, email);
};

// Sign in with GitHub
export const signInWithGitHub = async () => {
  const provider = new GithubAuthProvider();
  return signInWithPopup(auth, provider);
};

// Sign in with Google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// Logout
export const logout = async () => {
  return signOut(auth);
};