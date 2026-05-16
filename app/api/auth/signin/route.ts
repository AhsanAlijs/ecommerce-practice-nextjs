import { NextResponse } from "next/server";

import { sql } from "@/lib/db";
import { comparePassword } from "@/lib/hash";
import { generateToken } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    /* ======================================================
       GET BODY DATA
    ====================================================== */

    const body = await req.json();

    const { email, password } = body;

    /* ======================================================
       VALIDATIONS
    ====================================================== */

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required",

          errors: {
            email: !email ? "Email is required" : null,

            password: !password ? "Password is required" : null,
          },
        },
        { status: 400 },
      );
    }

    /* ======================================================
       FIND USER
    ====================================================== */

    const users = await sql`
      SELECT
        id,
        full_name,
        email,
        phone,
        password,
        created_at
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

    const user = users[0];

    /* ======================================================
       CHECK PASSWORD
    ====================================================== */

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 },
      );
    }

    /* ======================================================
       GENERATE JWT TOKEN
    ====================================================== */

    const token = generateToken({
      id: user.id,
      email: user.email,
    });

    /* ======================================================
       CREATE RESPONSE
    ====================================================== */

    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",

        data: {
          id: user.id,
          fullName: user.full_name,
          email: user.email,
          phone: user.phone,
          createdAt: user.created_at,
        },
      },
      { status: 200 },
    );

    /* ======================================================
       SAVE TOKEN IN COOKIE
    ====================================================== */

    response.cookies.set({
      name: "accessToken",
      value: token,

      httpOnly: true,

      secure: process.env.NODE_ENV === "production",

      sameSite: "strict",

      maxAge: 60 * 60 * 24 * 7,

      path: "/",
    });

    return response;
  } catch (error: any) {
    console.log("SIGNIN API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",

        error: process.env.NODE_ENV === "development" ? error.message : null,
      },
      { status: 500 },
    );
  }
}
