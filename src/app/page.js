import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Paisa Controller</h1>
      <Link href="/auth">
        <button>Go to Login</button>
      </Link>
    </div>
  );
}