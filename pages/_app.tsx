import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyle>
      <Component {...pageProps} />
    </GlobalStyle>
  );
}
export default MyApp;
