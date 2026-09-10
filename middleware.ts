// Vercel Routing Middleware -- must live at the project root (same level as
// package.json), NOT under src/. This is the framework-agnostic file
// convention Vercel's own docs specify for frameworks that "build their own
// routing middleware" (Astro is named explicitly) -- as opposed to the
// vercel.json `proxy` property, which is for non-framework projects.
//
// Gates only /dashboard (see the matcher below) behind one shared password
// via HTTP Basic Auth -- the browser's own native login prompt, no
// client-side JS or custom login page. Every other route on the site is
// untouched: this file isn't even invoked for paths outside the matcher.
//
// The password lives in DASHBOARD_PASSWORD, a Vercel project environment
// variable (Settings -> Environment Variables, type "Secret" or "Sensitive")
// -- never committed here.
import { next } from '@vercel/functions';

export const config = {
  matcher: '/dashboard/:path*',
};

export default function middleware(request: Request) {
  const expected = process.env.DASHBOARD_PASSWORD;
  if (!expected) {
    // Fail closed: an unset env var must not silently serve the page
    // unprotected.
    return new Response('Server misconfigured: DASHBOARD_PASSWORD is not set.', { status: 500 });
  }

  const authHeader = request.headers.get('Authorization') || '';
  const [scheme, encoded] = authHeader.split(' ');
  if (scheme === 'Basic' && encoded) {
    let decoded = '';
    try {
      decoded = atob(encoded);
    } catch {
      decoded = '';
    }
    // "username:password" -- split on the first colon only, so a password
    // containing a colon isn't truncated.
    const sep = decoded.indexOf(':');
    const password = sep === -1 ? '' : decoded.slice(sep + 1);
    if (password === expected) {
      return next();
    }
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Onsano Dashboard", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
