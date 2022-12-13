import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
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
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (credentials?.username === user.email) {
          return user;
        }
        return null;
      },
    }),
  ],
});
