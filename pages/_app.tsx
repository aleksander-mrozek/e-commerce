import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { Layout } from "../components/Layout";
import "../styles/globals.css";
import SEO from "../next-seo.config";
import { CartStateContextProvider } from "../components/Cart/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartStateContextProvider>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </CartStateContextProvider>
  );
}

export default MyApp;
