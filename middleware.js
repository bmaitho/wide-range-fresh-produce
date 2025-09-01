import { NextResponse } from 'next/server';

export function middleware() {
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Service Temporarily Unavailable</title>
  <style>
    body { font-family: sans-serif; background:#fafafa; color:#333; display:flex; align-items:center; justify-content:center; min-height:100vh; }
    .card { padding:2rem; background:#fff; border:1px solid #ccc; border-radius:8px; text-align:center; }
    h1 { color:#2f5d27; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Service Temporarily Unavailable</h1>
    <p>The website is currently offline.</p>
    <p>For inquiries: <strong>info@widerangefreshproduce.com</strong></p>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 503,
    headers: { 'content-type': 'text/html; charset=UTF-8' }
  });
}

export const config = { matcher: '/:path*' };
