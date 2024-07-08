import db from "@/server/config/db";
import User from "@/server/models/user";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import sendResponse from "@/server/helper/response";

const NEXT_PUBLIC_SALT_ROUND = Number(process.env.NEXT_PUBLIC_SALT_ROUND);

export async function POST(req: NextRequest) {
  try {
    await db();
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      role,
      password,
      businessName,
      businessType,
    } = await req.json();
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return sendResponse({
        success: false,
        message: "User already exist with this email",
        data: null,
        status: 400,
      });
    }
    const encPassword = await bcrypt.hash(password, NEXT_PUBLIC_SALT_ROUND);
    const newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      role,
      password: encPassword,
      businessName,
      businessType,
    });

    await newUser.save();
    return sendResponse({
      success: true,
      message: "Profile Created Successfully",
      data: {
        _id: newUser._id,
        firstName,
        lastName,
        phoneNumber,
        email,
        role,
        businessName,
        businessType,
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
