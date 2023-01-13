import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div
        style={{ boxSizing: "border-box", textAlign: "center", height: "100vh" }}
      >
        <h1>Welcome to Ethio Machineries</h1>
        <Link href="/categories">Categories</Link>
      </div>
    </Layout>
  );
}
