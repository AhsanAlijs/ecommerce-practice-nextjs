import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await sql`SELECT NOW()`;
    
    return NextResponse.json({
      success: true,
      message: "DB Connected Successfully",
      time: result[0],
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "DB Connection Failed",
        error,
      },
      { status: 500 }
    );
  }
}