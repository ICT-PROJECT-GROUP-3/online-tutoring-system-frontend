import { Comfortaa } from '@next/font/google';
import Background from '../components/shared/background/background';
import Footer from '../components/shared/footer/Footer';
import Navbar from '../components/shared/navbar/Navbar';
import '../styles/globals.css';

const poppins = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Background>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Background>
    </main>
  );
}
