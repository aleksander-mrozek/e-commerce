import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Layout } from "../components/Layout";
import "../styles/globals.css";
import SEO from "../next-seo.config";
import { CartStateContextProvider } from "../components/Cart/CartContext";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../GraphQL/apolloClient";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CartStateContextProvider>
        <Layout>
          <DefaultSeo {...SEO} />
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Layout>
      </CartStateContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
