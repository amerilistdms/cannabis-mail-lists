import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.cannabisemaillists.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";
  const proto = request.headers.get("x-forwarded-proto");

  // Skip local / preview hosts
  if (
    host.includes("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.includes("vercel.app")
  ) {
    return NextResponse.next();
  }

  const isApex = host === "cannabisemaillists.com";
  const isHttp = proto === "http";

  if (isApex || isHttp) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
