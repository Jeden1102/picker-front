import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("jwt");

  const currentPath = request.nextUrl.pathname;

  const authPaths = ["/user"];

  const anonymousPaths = ["/login", "/register", "forgot-password"];

  if (authPaths.includes(currentPath) && cookie === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (anonymousPaths.includes(currentPath) && cookie) {
    return NextResponse.redirect(new URL("/user", request.url));
  }

  return NextResponse.next();
}
