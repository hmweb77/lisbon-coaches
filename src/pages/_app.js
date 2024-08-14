
import Navbar from '@/components/NavBar';
import { AuthProvider } from '../contexts/AuthContext';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
     <Navbar/>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
