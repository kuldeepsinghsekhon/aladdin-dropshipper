import App from 'next/app';
import Head from 'next/head';
import { AppProvider,Frame} from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/styles.css';
import { Provider } from '@shopify/app-bridge-react';
import Cookies from 'js-cookie';
class MyApp extends App {  
  render() {
    const { Component, pageProps } = this.props;
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head> 
        <Provider config={config}>     
        <AppProvider  i18n={translations}>
        <Frame>
          <Component {...pageProps} />
         </Frame>
          </AppProvider> 
          </Provider>       
      </React.Fragment>
    );
  }
}
export default MyApp;