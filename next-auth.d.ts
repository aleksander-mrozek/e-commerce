import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    address?: string;
    sex?: "M" | "F";
  }
  interface Session {
    user: User;
  }
}
