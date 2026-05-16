import { NextResponse } from "next/server";

import { sql } from "@/lib/db";
import { hashPassword } from "@/lib/hash";

export async function POST(req: Request) {
  try {
    const { email, newPassword } = await req.json();

    if (!email || !newPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and new password are required",
        },
        { status: 400 },
      );
    }

    /* =========================================
       HASH PASSWORD
    ========================================= */

    const hashedPassword = await hashPassword(newPassword);

    /* =========================================
       UPDATE PASSWORD
    ========================================= */

    await sql`
      UPDATE users
      SET
        password = ${hashedPassword},
        otp_code = NULL,
        otp_expiry = NULL
      WHERE email = ${email}
    `;

    return NextResponse.json(
      {
        success: true,
        message: "Password updated successfully",
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.log("RESET PASSWORD ERROR:", error);

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
