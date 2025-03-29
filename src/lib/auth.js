import { auth } from "./firebase";
import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider, signOut } from "firebase/auth";

// 🔹 Sign in with GitHub
export const signInWithGitHub = async () => {
  const provider = new GithubAuthProvider();
  return signInWithPopup(auth, provider);
};

// 🔹 Sign in with Google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// 🔹 Logout
export const logout = async () => {
  return signOut(auth);
};
