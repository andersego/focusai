import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  debug: true, // Enable debug logs
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('Sign In Callback:', { user, account, profile }) // Debug log
      return true
    },
    async session({ session, token, user }) {
      console.log('Session Callback:', { session, token, user }) // Debug log
      if (session?.user) {
        session.user.id = token.sub!
      }
      return session
    },
    async jwt({ token, user, account, profile }) {
      console.log('JWT Callback:', { token, user, account, profile }) // Debug log
      if (user) {
        token.id = user.id
      }
      return token
    }
  },
  pages: {
    signIn: '/auth/signin',
  },
  events: {
    async signIn(message) { console.log('Sign In Event:', message) },
    async signOut(message) { console.log('Sign Out Event:', message) },
    async createUser(message) { console.log('Create User Event:', message) },
    async linkAccount(message) { console.log('Link Account Event:', message) },
    async session(message) { console.log('Session Event:', message) }
  }
} 