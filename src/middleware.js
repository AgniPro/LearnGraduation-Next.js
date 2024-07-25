import { NextResponse } from 'next/server'

// Paths that require authentication
const authPaths = ['/profile', '/profile/change-password'];

// Admin-only paths
const adminPaths = ['/admin/dashboard', '/admin', '/admin/create-post', '/admin/create-course'];

export async function middleware(request) {
  try {
    const isAuthenticated = request.cookies.get('is_auth')?.value;
    const path = request.nextUrl.pathname;

    // Combine auth and admin paths for the purpose of checking unauthenticated access
    const protectedPaths = [...authPaths, ...adminPaths];

    // Redirect unauthenticated users trying to access protected paths to login
    if (!isAuthenticated && protectedPaths.includes(path)) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    // Redirect non-admin users trying to access admin-only paths
    if (isAuthenticated && adminPaths.includes(path) && isAuthenticated !== '1415914') {
      // Ideally, redirect to an unauthorized page or dashboard with a message
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Error occurred while checking authentication:', error);
    return NextResponse.error();
  }
}

export const config = {
  matcher: ['/:path*', '/admin/:path*']
}