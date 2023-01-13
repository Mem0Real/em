import Head from "next/head";
import Navbar from "../navigation/navbar";
import Footer from "../navigation/footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ethio-machineries</title>
        <meta name="description" content="Supplying Machineries of All Kinds." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
