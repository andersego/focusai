import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('⭐️ Middleware executing for:', request.nextUrl.pathname)

  try {
    const token = await getToken({ 
      req: request,
      secret: process.env.NEXTAUTH_SECRET 
    })

    console.log('🔑 Token:', token ? 'exists' : 'missing')

    // Define public paths that don't require authentication
    const publicPaths = [
      '/auth/signin',
      '/auth/signup',
      '/api/auth/signin',
      '/api/auth/signup',
      '/api/auth/session',
      '/api/auth/callback/google',
      '/privacy-policy',
      '/terms'
    ]

    const isPublicPath = publicPaths.some(path => 
      request.nextUrl.pathname.startsWith(path)
    )

    const isApiPath = request.nextUrl.pathname.startsWith('/api')
    const isAuthPath = request.nextUrl.pathname.startsWith('/auth')

    console.log('📍 Path info:', {
      path: request.nextUrl.pathname,
      isPublicPath,
      isApiPath,
      isAuthPath
    })

    // If no token and trying to access protected route
    if (!token && !isPublicPath && !isApiPath) {
      console.log('🚫 No token - redirecting to signin')
      const signInUrl = new URL('/auth/signin', request.url)
      signInUrl.searchParams.set('callbackUrl', request.url)
      return NextResponse.redirect(signInUrl)
    }

    // If has token and trying to access auth pages
    if (token && isAuthPath && !isApiPath) {
      console.log('✅ Has token - redirecting to home')
      return NextResponse.redirect(new URL('/', request.url))
    }

    console.log('➡️ Proceeding with request')
    return NextResponse.next()
  } catch (error) {
    console.error('❌ Middleware error:', error)
    // On error, redirect to signin
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 