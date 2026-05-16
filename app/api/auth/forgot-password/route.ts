import { NextResponse } from "next/server";

import { sql } from "@/lib/db";
import { generateOTP } from "@/lib/otp";
import { sendOTPEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required",
        },
        { status: 400 },
      );
    }

    /* =========================================
       FIND USER
    ========================================= */

    const users = await sql`
      SELECT id, email
      FROM users
      WHERE email = ${email}
      LIMIT 1
    `;

    if (users.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No account found with this email",
        },
        { status: 404 },
      );
    }

    /* =========================================
       GENERATE OTP
    ========================================= */

    const otp = generateOTP();

    const otpExpiry = new Date(Date.now() + 1000 * 60 * 10);

    /* =========================================
       SAVE OTP
    ========================================= */

    await sql`
      UPDATE users
      SET
        otp_code = ${otp},
        otp_expiry = ${otpExpiry}
      WHERE email = ${email}
    `;

    /* =========================================
       TODO:
       SEND EMAIL HERE
    ========================================= */
    // Node Mialer
    // await sendOTPEmail(email, otp);

    // Resend
    await sendOTPEmail(email, otp);

    return NextResponse.json(
      {
        success: true,
        message: "OTP sent successfully",
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.log("FORGOT PASSWORD ERROR:", error);

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
