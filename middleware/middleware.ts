import { NextResponse } from 'next/server';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/SessionContext';

export default async function middleware(req) {
  const { user, tutor, student } = useContext(AuthContext);

  if (
    req.nextUrl.pathname.startsWith('/user/admin') &&
    (!user || user?.user.role !== 'admin')
  ) {
    return NextResponse.rewrite(
      new URL('/Auth?message=You are not authorized', req.nextUrl)
    );
  } else if (
    req.nextUrl.pathname.startsWith('/user/tutor') &&
    (!user || user?.user.role !== 'tutor' || !tutor)
  ) {
    return NextResponse.rewrite(
      new URL('/Auth?message=You are not authorized', req.nextUrl)
    );
  } else if (
    req.nextUrl.pathname.startsWith('/user/student') &&
    (!user || user?.user.role !== 'student' || !student)
  ) {
    return NextResponse.rewrite(
      new URL('/Auth?message=You are not authorized', req.nextUrl)
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
