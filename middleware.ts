import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
  const isPublicPage = ['/', '/business', '/contact'].includes(request.nextUrl.pathname)

  console.log('Middleware:', {
    path: request.nextUrl.pathname,
    isAuthPage,
    isPublicPage,
    hasToken: !!token
  })

  // Si el usuario está autenticado y trata de acceder a páginas de auth
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Si el usuario no está autenticado y trata de acceder a páginas protegidas
  if (!token && !isAuthPage && !isPublicPage) {
    const signInUrl = new URL('/auth/signin', request.url)
    signInUrl.searchParams.set('callbackUrl', request.url)
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 