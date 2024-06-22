import db from "@/server/config/db";
import User from "@/server/models/user";
import { NextRequest, NextResponse } from "next/server";

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
      return NextResponse.json(
        {
          success: false,
          message: "User already exist with this email",
          data: null,
        },
        {
          status: 400,
        }
      );
    }

    const newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      role,
      password,
      businessName,
      businessType,
    });

    await newUser.save();

    return NextResponse.json(
      {
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
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message,
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
