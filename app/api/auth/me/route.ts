import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get("accessToken")?.value;

        if (!token) {
            return NextResponse.json(
                { authenticated: false },
                { status: 401 }
            );
        }

        const user = jwt.verify(token, JWT_SECRET);

        return NextResponse.json({
            authenticated: true,
            user,
        });
    } catch {
        return NextResponse.json(
            { authenticated: false },
            { status: 401 }
        );
    }
}