import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import { compare } from "bcryptjs"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.password) {
          return null
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('SignIn Callback:', { 
        user, 
        accountType: account?.type,
        provider: account?.provider,
        hasProfile: !!profile,
        hasCredentials: !!credentials 
      })
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect Callback:', { url, baseUrl })
      return url.startsWith(baseUrl) ? url : baseUrl
    },
    session: ({ session, token }) => {
      console.log('Session Callback:', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      }
    },
    jwt: ({ token, user }) => {
      console.log('JWT Callback:', { token, hasUser: !!user })
      if (user) {
        return {
          ...token,
          id: user.id,
        }
      }
      return token
    },
  },
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      console.log('SignIn Event:', { user, account, hasProfile: !!profile, isNewUser })
    },
    async signOut({ session, token }) {
      console.log('SignOut Event:', { session, token })
    }
  },
  debug: true,
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  }
} 