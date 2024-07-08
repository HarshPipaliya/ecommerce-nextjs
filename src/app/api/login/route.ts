import db from "@/server/config/db";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import User from "@/server/models/user";
import sendResponse from "@/server/helper/response";
import { SignJWT } from "jose";

const NEXT_PUBLIC_SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY as string;

export async function POST(req: NextRequest) {
  try {
    await db();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      return sendResponse({
        success: false,
        message: "Invalid Credentials!",
        data: null,
        status: 401,
      });
    }
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      return sendResponse({
        success: false,
        message: "Invalid Credentials!",
        data: null,
        status: 401,
      });
    }
    const data = {
      _id: user?._id,
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      phoneNumber: user?.phoneNumber,
      role: user?.role,
      ...(user?.role === "Seller" && {
        businessName: user?.businessName,
        businessType: user?.businessType,
      }),
    };
    const jwtPayload = {
      _id: user?._id,
      email: user?.email,
      role: user?.role,
    };
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60 * 60;
    const token = await new SignJWT({ ...jwtPayload })
      .setProtectedHeader({
        alg: "HS256",
        typ: "JWT",
      })
      .setExpirationTime(exp)
      .setIssuedAt(iat)
      .setNotBefore(iat)
      .sign(new TextEncoder().encode(NEXT_PUBLIC_SECRET_KEY));
    return sendResponse({
      success: true,
      message: "Login Success",
      data: {
        ...data,
        token,
      },
      status: 200,
    });
  } catch (error: any) {
    return sendResponse({
      success: false,
      message: error?.message,
      data: null,
      status: 500,
    });
  }
}
