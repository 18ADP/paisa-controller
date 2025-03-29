"use client";
import { signInWithGoogle, signInWithGitHub, logout } from "@/lib/auth";

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signInWithGitHub}>Sign in with GitHub</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
