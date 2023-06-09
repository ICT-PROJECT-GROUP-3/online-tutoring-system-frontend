import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith('/user/admin') &&
      req.nextauth.token?.role !== 'admin'
    )
      return NextResponse.rewrite(
        new URL('/Auth?message=You are not authorized', req.nextUrl)
      );
    else if (
      req.nextUrl.pathname.startsWith('/user/tutor') &&
      req.nextauth.token?.role !== 'tutor'
    ) {
      return NextResponse.rewrite(
        new URL('/Auth?message=You are not authorized', req.nextUrl)
      );
    } else if (
      req.nextUrl.pathname.startsWith('/user/student') &&
      req.nextauth.token?.role !== 'student'
    ) {
      return NextResponse.rewrite(
        new URL('/Auth?message=You are not authorized', req.nextUrl)
      );
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/admin/:path*', '/tutor/:path*', '/student/:path*'],
};
