import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9yhsiwe1w5201uo53yz5sce/master",
  cache: new InMemoryCache(),
});
