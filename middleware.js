import { NextResponse } from 'next/server';

export const middleware = (req) => {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/backstage')) {
    return NextResponse.rewrite(
      new URL(pathname, 'https://sso-roland.vercel.app')
    );
  }
  return NextResponse.next();
};
