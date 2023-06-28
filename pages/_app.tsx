import { Comfortaa } from '@next/font/google';
// import { Provider } from 'react-redux';
import PageContainer from '../components/shared/PageContainer';
import Background from '../components/shared/background/background';
import SessionContext from '../context/auth/SessionContext';
import '../styles/globals.css';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <main className={comfortaa.className}>
      <SessionContext>
        <Background>
          <PageContainer>
            <Component {...pageProps} />
          </PageContainer>
        </Background>
      </SessionContext>
    </main>
  );
}
