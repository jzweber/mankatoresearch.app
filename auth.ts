import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("SIGN IN CALLBACK TRIGGERED");
      console.log("User object:", JSON.stringify(user, null, 2));
      console.log("Account object:", JSON.stringify(account, null, 2));
      console.log("Profile object:", JSON.stringify(profile, null, 2));
      return true; // We are just logging, so we allow the sign-in to proceed
    },
    async session({ session, user }) {
      if (user) {
        session.user.id = user.id
      }
      return session
    },
  },
  session: {
    strategy: "database",
  },
})