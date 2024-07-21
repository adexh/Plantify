import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

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
          id: String(Math.floor(Math.random() * 100)),
          username: credentials?.username,
          password: credentials?.password,
        };
      },
    }),
    Google({
      clientId: "asdf",
      clientSecret: "adfadf",
    }),
    Github({
      clientId: "",
      clientSecret: "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return baseUrl;
    },
  },
});

export const GET = handler;
export const POST = handler;
