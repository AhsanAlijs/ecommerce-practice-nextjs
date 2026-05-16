import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

/* ======================================================
   PUBLIC ROUTES
====================================================== */

const publicRoutes = ["/signin", "/signup", "/", "/forgot-password"];

/* ======================================================
   MIDDLEWARE
====================================================== */

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;

  const { pathname } = request.nextUrl;

  /* ======================================================
     CHECK PUBLIC ROUTES
  ====================================================== */

  const isPublicRoute = publicRoutes.includes(pathname);

  /* ======================================================
     USER NOT LOGGED IN
  ====================================================== */

  if (!token) {
    if (!isPublicRoute) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }

    return NextResponse.next();
  }

  /* ======================================================
     VERIFY TOKEN
  ====================================================== */

  try {
    jwt.verify(token, JWT_SECRET);

    /* ======================================================
       IF LOGGED IN & TRYING TO ACCESS LOGIN
    ====================================================== */

    if (isPublicRoute) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  } catch {
    /* ======================================================
       INVALID TOKEN
    ====================================================== */

    const response = NextResponse.redirect(new URL("/signin", request.url));

    response.cookies.delete("accessToken");

    return response;
  }
}

/* ======================================================
   MATCH ROUTES
====================================================== */

export const config = {
  matcher: [
    /*
      Protect all routes except:
      - api
      - next static files
      - images
      - favicon
    */

    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
