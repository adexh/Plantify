import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "username", placeholder: "Username", type: "text" },
        password: {
          label: "password",
          placeholder: "password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        return {
          id: "adfasd",
          username: "Piyush",
          password: "asdfas",
        };
      },
    }),
    Google({
      clientId: "asdf",
      clientSecret: "adfadf",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export const GET = handler;
export const POST = handler;
