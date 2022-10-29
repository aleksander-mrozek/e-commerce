import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Layout } from "../components/Layout";
import "../styles/globals.css";
import SEO from "../next-seo.config";
import { CartStateContextProvider } from "../components/Cart/CartContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartStateContextProvider>
      <Layout>
        <DefaultSeo {...SEO} />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </CartStateContextProvider>
  );
}

export default MyApp;
