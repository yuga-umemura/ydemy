import { NextRequest } from "next/server";
import { Path } from "./lib/constants/path";
import { NextResponse } from "next/server";

export default function Proxy(request: NextRequest) {
  if (request.nextUrl.pathname === Path.instructor.root) {
    return NextResponse.redirect(new URL(Path.instructor.courses, request.url));
  }
}

export const config = {
  matcher: "/instructor",
};
