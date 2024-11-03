import NextAuth from 'next-auth'
import { authOptions } from '@/auth'

console.log('Initializing NextAuth handler')

const handler = NextAuth(authOptions)

console.log('NextAuth handler initialized')

export { handler as GET, handler as POST } 