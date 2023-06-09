import { Comfortaa } from '@next/font/google';
import { Provider } from 'react-redux';
import Background from '../components/shared/background/background';
import Footer from '../components/shared/footer/Footer';
import Navbar from '../components/shared/navbar/Navbar';
import { store } from '../lib/helpers/store';
import { AuthUserProvider } from '../lib/services/firebase/auth';
import '../styles/globals.css';
import PageContainer from '../components/shared/PageContainer';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <main className={comfortaa.className}>
      <AuthUserProvider>
        <Provider store={store}>
          <Background >
            <Navbar />
            <PageContainer>
            <Component {...pageProps} />
            </PageContainer>
            <Footer />
          </Background>
        </Provider>
      </AuthUserProvider>
    </main>
  );
}
