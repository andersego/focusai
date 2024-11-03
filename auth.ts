import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          access_type: "offline",
          prompt: "select_account",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log('Authorizing credentials...')
        if (!credentials?.email || !credentials?.password) {
          console.log('Missing credentials')
          throw new Error("Invalid credentials");
        }

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          });

          console.log('Found user:', user ? 'yes' : 'no')

          if (!user || !user.password) {
            console.log('User not found or no password')
            throw new Error("Invalid credentials");
          }

          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          console.log('Password correct:', isCorrectPassword)

          if (!isCorrectPassword) {
            console.log('Incorrect password')
            throw new Error("Invalid credentials");
          }

          console.log('Authentication successful')
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image
          };
        } catch (error) {
          console.error('Auth error:', error)
          throw error;
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('Sign In Callback:', { user, account, profile })
      return true
    },
    async jwt({ token, user, account }) {
      console.log('JWT Callback:', { token, user, account })
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      console.log('Session Callback:', { session, token })
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    }
  },
  events: {
    async signIn(message) { console.log('Sign In Event:', message) },
    async signOut(message) { console.log('Sign Out Event:', message) },
    async createUser(message) { console.log('Create User Event:', message) },
    async linkAccount(message) { console.log('Link Account Event:', message) },
    async session(message) { console.log('Session Event:', message) }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  debug: true,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET
} 