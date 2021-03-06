import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'site-settings/site-theme/default';
import { AppProvider } from 'contexts/app/app.provider';
import { AuthProvider } from 'contexts/auth/auth.provider';
import { LanguageProvider } from 'contexts/language/language.provider';
import { useApollo } from 'utils/apollo';
// Language translation messages
import { GlobalStyle } from 'assets/styles/global.style';
import { messages } from 'site-settings/site-translation/messages';
import 'rc-drawer/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-spring-modal/dist/index.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'components/scrollbar/scrollbar.css';
import '@redq/reuse-modal/lib/index.css';
import 'react-awesome-slider/dist/styles.css';
import 'typeface-lato';
import 'typeface-poppins';
import {useState} from "react";
const AppLayout = dynamic(() => import('layouts/app-layout'));

export default function CustomApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const [theme, setTheme] = useState(defaultTheme)
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AppProvider>
          <LanguageProvider messages={messages}>
            <AuthProvider>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </AuthProvider>
          </LanguageProvider>
        </AppProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
