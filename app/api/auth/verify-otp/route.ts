import { NextResponse } from "next/server";

import { sql } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and OTP are required",
        },
        { status: 400 },
      );
    }

    /* =========================================
       FIND USER
    ========================================= */

    const users = await sql`
      SELECT
        otp_code,
        otp_expiry
      FROM users
      WHERE email = ${email}
      LIMIT 1
    `;

    if (users.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 },
      );
    }

    const user = users[0];

    /* =========================================
       CHECK OTP
    ========================================= */

    if (user.otp_code !== otp) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid OTP",
        },
        { status: 400 },
      );
    }

    /* =========================================
       CHECK OTP EXPIRY
    ========================================= */

    const now = new Date();

    if (now > new Date(user.otp_expiry)) {
      return NextResponse.json(
        {
          success: false,
          message: "OTP expired",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "OTP verified successfully",
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.log("VERIFY OTP ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",

        error: process.env.NODE_ENV === "development" ? error.message : null,
      },
      { status: 500 },
    );
  }
}
