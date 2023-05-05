import { Montserrat } from '@next/font/google';
import Navbar from '../components/shared/navbar/Navbar';
import '../styles/globals.css';

const poppins = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
