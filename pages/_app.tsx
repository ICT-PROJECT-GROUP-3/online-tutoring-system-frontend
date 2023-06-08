import { Comfortaa } from '@next/font/google';
// import { Provider } from 'react-redux';
import PageContainer from '../components/shared/PageContainer';
import Background from '../components/shared/background/background';
import Footer from '../components/shared/footer/Footer';
import Navbar from '../components/shared/navbar/Navbar';
import SessionContext from '../context/auth/SessionContext';
import '../styles/globals.css';
import PageContainer from '../components/shared/PageContainer';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <main className={comfortaa.className}>
      <SessionContext>
        <Background>
          <Navbar />
          <PageContainer>
            <Component {...pageProps} />
          </PageContainer>
          <Footer />
        </Background>
      </SessionContext>
    </main>
  );
}
