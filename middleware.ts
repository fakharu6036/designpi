import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function getTokenFromCookie(request: NextRequest) {
  const cookie =
    request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token");
  return cookie?.value;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const token = getTokenFromCookie(request);
    if (!token) {
      const signInUrl = new URL("/auth/signin", request.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }
    // Optionally decode JWT and check role here (requires a lightweight JWT lib)
    // For now, just check token presence
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
