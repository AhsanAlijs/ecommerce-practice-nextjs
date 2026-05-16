import { NextResponse } from "next/server";

import { sql } from "@/lib/db";
import { hashPassword } from "@/lib/hash";

export async function POST(req: Request) {
  try {
    //    GET BODY DATA

    const body = await req.json();

    const { fullName, email, phone, password } = body;

    //    VALIDATIONS

    if (!fullName || !email || !phone || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
          errors: {
            fullName: !fullName ? "Full name is required" : null,

            email: !email ? "Email is required" : null,

            phone: !phone ? "Phone number is required" : null,

            password: !password ? "Password is required" : null,
          },
        },
        { status: 400 },
      );
    }

    //    CHECK USER EXISTS

    const existingUser = await sql`
      SELECT id, email
      FROM users
      WHERE email = ${email}
      LIMIT 1
    `;

    if (existingUser.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists with this email",
        },
        { status: 409 },
      );
    }

    //    HASH PASSWORD

    const hashedPassword = await hashPassword(password);

    //    CREATE USER

    const result = await sql`
      INSERT INTO users (
        full_name,
        email,
        phone,
        password
      )
      VALUES (
        ${fullName},
        ${email},
        ${phone},
        ${hashedPassword}
      )
      RETURNING
        id,
        full_name,
        email,
        phone,
        created_at
    `;

    const user = result[0];

    //    SUCCESS RESPONSE

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully",

        data: {
          id: user.id,
          fullName: user.full_name,
          email: user.email,
          phone: user.phone,
          createdAt: user.created_at,
        },
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.log("SIGNUP API ERROR:", error);

    //    SERVER ERROR RESPONSE

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
