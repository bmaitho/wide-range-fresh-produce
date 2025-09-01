// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Allow favicon, robots.txt, and the suspended page itself
  if (url.pathname === '/suspended' || url.pathname === '/favicon.ico' || url.pathname === '/robots.txt') {
    return NextResponse.next();
  }

  // Redirect everything else to /suspended
  url.pathname = '/suspended';
  return NextResponse.rewrite(url);
}

export const config = { matcher: '/:path*' };
