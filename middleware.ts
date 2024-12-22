import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  console.log("Current Pathname:", pathname);

  const supabase = createMiddlewareClient({ req, res });
  const { data: sessionData } = await supabase.auth.getSession();

  console.log("Session Data:", sessionData);

  // If no session exists, redirect to the login page
  if (!sessionData.session && pathname === "/") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If the user is authenticated but trying to access `/login`, redirect to home
  if (sessionData.session && pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/", "/login"], // Apply middleware to home and login routes
};
