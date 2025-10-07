import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Check for Auth.js session cookie (default: __Secure-authjs.session-token or authjs.session-token)
  const sessionCookie =
    request.cookies.get("__Secure-authjs.session-token")?.value ||
    request.cookies.get("authjs.session-token")?.value;
  
  // If user is not authenticated, redirect to home page
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!^$|auth|login|register|about|contact|_next|_next/image|_next/static|api/auth|favicon.ico|robots.txt|$).*)",
  ],
};