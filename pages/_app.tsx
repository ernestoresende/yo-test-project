import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/global';
import { IdProvider } from '@radix-ui/react-id';
import { GlobalStateProvider } from '@store/GlobalStateProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    /* The entire app tree is wrapped by Radix-UI's IDProvider to ensure deterministic id's 
    between server and client when using SSR. 
    See: https://www.radix-ui.com/docs/primitives/overview/server-side-rendering */
    <GlobalStateProvider>
      <IdProvider>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </IdProvider>
    </GlobalStateProvider>
  );
}
export default MyApp;
