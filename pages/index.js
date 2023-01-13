import Link from "next/link";

export default function Home() {
  return (
    <div style={{ boxSizing: "border-box", textAlign: "center" }}>
      <h1>Welcome to Ethio Machineries</h1>
      <Link href="/categories">Categories</Link>
    </div>
  );
}
