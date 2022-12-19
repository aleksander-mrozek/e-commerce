import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";

import { authorizedApolloClient } from "../../../GraphQL/apolloClient";
import {
  GetAccountByEmailQuery,
  GetAccountByEmailQueryVariables,
  GetAccountByEmailDocument,
} from "../../../generated/graphql";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "e-mail",
      credentials: {
        username: {
          label: "E-mail",
          type: "email",
          placeholder: "123@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        const userByEmail = await authorizedApolloClient.query<
          GetAccountByEmailQuery,
          GetAccountByEmailQueryVariables
        >({
          query: GetAccountByEmailDocument,
          variables: {
            email: credentials.username,
          },
        });

        console.log(credentials);

        if (!userByEmail.data.account?.password) {
          return null;
        }

        const arePasswordsEqual = await bcrypt.compare(
          credentials.password,
          userByEmail.data.account.password
        );

        if (!arePasswordsEqual) {
          return null;
        }
        return {
          id: userByEmail.data.account.id,
          email: userByEmail.data.account.email,
        };
      },
    }),
  ],
});
