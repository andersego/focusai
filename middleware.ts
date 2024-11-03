import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('Middleware executing for path:', request.nextUrl.pathname)

  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET 
  })

  console.log('Token exists:', !!token)

  // Define public paths that don't require authentication
  const publicPaths = [
    '/auth/signin',
    '/auth/signup',
    '/api/auth/signin',
    '/api/auth/signup',
    '/api/auth/session',
    '/api/auth/callback/google'
  ]

  const isPublicPath = publicPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  const isApiPath = request.nextUrl.pathname.startsWith('/api')
  const isAuthPath = request.nextUrl.pathname.startsWith('/auth')

  console.log('Path info:', {
    isPublicPath,
    isApiPath,
    isAuthPath
  })

  // If the user is not authenticated and trying to access a protected route
  if (!token && !isPublicPath && !isApiPath) {
    console.log('Redirecting to signin - no token')
    const signInUrl = new URL('/auth/signin', request.url)
    signInUrl.searchParams.set('callbackUrl', request.url)
    return NextResponse.redirect(signInUrl)
  }

  // If the user is authenticated and trying to access auth pages
  if (token && isAuthPath && !isApiPath) {
    console.log('Redirecting to home - user is authenticated')
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 