"use client"

import { useAuth } from "@/lib/auth-listener";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <p className="text-xl">Welcome to your Paisa Controller dashboard!</p>
      <p className="mt-4">Logged in as: {user.email}</p>
    </div>
  );
}