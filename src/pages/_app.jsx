import Navbar from "@/components/NavBar";
import Head from 'next/head';
import "../styles/globals.css";
import Footer from "@/app/section/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Lisbon Coaches</title>
        <meta name="description" content="Website for coaches in lisbon " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
