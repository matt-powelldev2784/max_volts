import NextAuth from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../../../../prisma/db/client'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/pages/auth/signin',
    signOut: '/pages/auth/signout',
    error: '/pages/auth/error',
    verifyRequest: '/pages/auth/verify',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      maxAge: 1 * 60 * 60, // 1 hour
    }),
  ],
  callbacks: {
    async redirect() {
      return '/'
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
