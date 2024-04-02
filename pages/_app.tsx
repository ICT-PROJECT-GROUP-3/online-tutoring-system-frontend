import { Comfortaa } from '@next/font/google';
import PageContainer from '../components/shared/PageContainer';
import Background from '../components/shared/background/background';
import SessionContext from '../context/auth/SessionContext';
import { StepperContextProvider } from '../context/auth/StepperContext';
import '../styles/globals.css';

// Define the Comfortaa font with the desired configurations
const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

/**
 * Custom Next.js App component.
 * @param {Object} Component - The component being rendered.
 * @param {Object} pageProps - The props for the component.
 * @returns {JSX.Element} - The rendered JSX element.
 */
export default function App({ Component, pageProps }) {
  return (
    <main className={comfortaa.className}>
      <SessionContext>
        <StepperContextProvider>
          <Background>
            <PageContainer>
              <Component {...pageProps} />
            </PageContainer>
          </Background>
        </StepperContextProvider>
      </SessionContext>
    </main>
  );
}
