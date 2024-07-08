import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import sendResponse from "./server/helper/response";
import { JWTPayload, jwtVerify } from "jose";
import { JwtPayload } from "./types";
const NEXT_PUBLIC_SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY as string;

export async function middleware(req: NextRequest) {
  try {
    const token = req.headers.get("authorization");
    if (!token) {
      return sendResponse({
        success: false,
        status: 401,
        data: null,
        message: "Token not found",
      });
    }
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(NEXT_PUBLIC_SECRET_KEY)
    );
    req.headers.set("x-user", JSON.stringify(payload));
    return NextResponse.next({ request: req });
  } catch (error: any) {
    console.log({ error });
    return sendResponse({
      success: false,
      status: 401,
      data: null,
      message: error?.message,
    });
  }
}

export const config = {
  matcher: ["/api/auth/:path*"],
};
