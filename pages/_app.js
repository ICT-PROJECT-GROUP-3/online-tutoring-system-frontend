import Footer from '@/components/shared/footer/Footer';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
