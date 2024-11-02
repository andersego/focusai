import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Add debug logs
  console.log('Middleware Path:', request.nextUrl.pathname)
  
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET 
  })
  
  // Add debug logs
  console.log('Token:', !!token)
  
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
  const isPublicPath = request.nextUrl.pathname.startsWith('/api/auth') || 
                      request.nextUrl.pathname === '/favicon.ico'

  // Add debug logs
  console.log('Is Auth Page:', isAuthPage)
  console.log('Is Public Path:', isPublicPath)

  // Always redirect root to signin if not authenticated
  if (request.nextUrl.pathname === '/' && !token) {
    console.log('Redirecting to signin from root')
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  // Allow public paths
  if (isPublicPath) {
    console.log('Allowing public path')
    return NextResponse.next()
  }

  // If not authenticated and not on auth page, redirect to signin
  if (!token && !isAuthPage) {
    console.log('Redirecting unauthenticated user to signin')
    const signInUrl = new URL('/auth/signin', request.url)
    signInUrl.searchParams.set('callbackUrl', request.url)
    return NextResponse.redirect(signInUrl)
  }

  // If authenticated and on auth page, redirect to home
  if (token && isAuthPage) {
    console.log('Redirecting authenticated user to home')
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
     */
    '/((?!_next/static|_next/image).*)',
  ],
} 