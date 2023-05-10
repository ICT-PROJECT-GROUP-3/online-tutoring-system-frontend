import { Provider } from 'react-redux';
import { store } from '../lib/helpers/store';
import { AuthUserProvider } from '../lib/services/firebase/auth';
import '../styles/globals.css';

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <main>
      <AuthUserProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthUserProvider>
    </main>
  );
}
