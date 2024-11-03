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

    // Define public paths that don't require authentication
    const publicPaths = [
      '/auth/signin',
      '/auth/signup',
      '/api/auth',  // Make sure all auth API routes are public
      '/privacy-policy',
      '/terms'
    ]

    // Always redirect root path to signin if no token
    if (request.nextUrl.pathname === '/') {
      if (!token) {
        return NextResponse.redirect(new URL('/auth/signin', request.url))
      }
    }

    const isPublicPath = publicPaths.some(path => 
      request.nextUrl.pathname.startsWith(path)
    )

    // If no token and not a public path, redirect to signin
    if (!token && !isPublicPath) {
      const signInUrl = new URL('/auth/signin', request.url)
      signInUrl.searchParams.set('callbackUrl', request.url)
      return NextResponse.redirect(signInUrl)
    }

    // If has token and trying to access auth pages (except API routes)
    if (token && request.nextUrl.pathname.startsWith('/auth/') && !request.nextUrl.pathname.startsWith('/api/auth')) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
  } catch (error) {
    console.error('❌ Middleware error:', error)
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 