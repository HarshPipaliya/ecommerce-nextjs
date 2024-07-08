import db from "@/server/config/db";
import sendResponse from "@/server/helper/response";
import User from "@/server/models/user";
import mongoose from "mongoose";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await db();
    const reqUser = JSON.parse(req?.headers?.get("x-user") as string);
    const user = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(String(reqUser?._id)),
        },
      },
      {
        $project: {
          password: 0,
          __v: 0,
        },
      },
    ]);
    return sendResponse({
      success: true,
      message: "User found",
      data: user[0],
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
