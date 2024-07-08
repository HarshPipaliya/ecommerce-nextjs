import { NextResponse } from "next/server";

export default function sendResponse({
  success,
  data,
  message = "Something went wrong!",
  status,
  ...rest
}: {
  status: number;
  success: boolean;
  message: string;
  data: any;
  [key: string]: any;
}) {
  return NextResponse.json(
    {
      success,
      message,
      data,
      ...rest,
    },
    {
      status,
    }
  );
}
