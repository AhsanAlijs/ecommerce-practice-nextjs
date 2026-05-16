import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/signin", "/signup", "/forgot-password", "/"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;

  const isPublicRoute = publicRoutes.includes(pathname);

  // ======================================
  // ❌ NO TOKEN
  // ======================================
  if (!token) {
    if (!isPublicRoute) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
    return NextResponse.next();
  }

  // ======================================
  // 🔥 LOGGED IN USER LOGIC
  // ======================================

  // If logged in user tries auth pages
  if (pathname === "/signin" || pathname === "/signup") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

/* ======================================================
   MATCH ROUTES
====================================================== */

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};