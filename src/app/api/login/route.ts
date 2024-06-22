import db from "@/server/config/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await db();
    return NextResponse.json(
      {
        message: "Login Success",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log({ error });
  }
}
