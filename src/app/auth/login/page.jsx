"use client";
import { signInWithGoogle, signInWithGitHub, logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push("/dashboard");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      await signInWithGitHub();
      router.push("/dashboard");
    } catch (error) {
      console.error("GitHub login failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <div className="space-y-2">
          <button 
            onClick={handleGoogleLogin}
            className="w-full p-2 bg-white border rounded-md flex items-center justify-center gap-2"
          >
            Sign in with Google
          </button>
          <button 
            onClick={handleGitHubLogin}
            className="w-full p-2 bg-white border rounded-md flex items-center justify-center gap-2"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}