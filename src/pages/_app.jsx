import Navbar from "@/components/NavBar";

import "../styles/globals.css";
import Footer from "@/app/section/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
