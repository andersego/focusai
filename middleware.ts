import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
  const isPublicPage = ['/', '/business', '/contact'].includes(request.nextUrl.pathname)

  // Si el usuario está autenticado y trata de acceder a páginas de auth o la landing
  if (token && (isAuthPage || request.nextUrl.pathname === '/')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Si el usuario no está autenticado y trata de acceder a páginas protegidas
  if (!token && !isAuthPage && !isPublicPage) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
} 