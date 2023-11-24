import { NextResponse } from "next/server";
import User from "@/lib/models/User";
import { connectDB } from "@/lib/database/connect";

export async function GET() {
    await connectDB();

    const userFind = await User.find();

    if (userFind.length <= 0)
        return NextResponse.json({ "[Status]": "No User's avaliable!" });
    return NextResponse.json(userFind);
}

export async function POST(request) {
    const { email, username, password,  } = await request.json();
}