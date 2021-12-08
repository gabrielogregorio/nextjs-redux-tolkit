import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../core/store';
import { ThemeContextProvider } from '../core/contexts/theme';
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </Provider>
  );
}

export default MyApp;