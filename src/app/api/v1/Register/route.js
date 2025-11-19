import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
import { connectToDatabase } from "@/lib/mongoose";
import MobileAppUser from "@/models/MobileAppUser";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullname, email, phone, password } = body;

    if (!fullname || !email || !phone || !password) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    await connectToDatabase();

    // Check existing user
    const existingUser = await MobileAppUser.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, message: "Email already exists" }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await MobileAppUser.create({
      fullname,
      email,
      phone,
      password: hashedPassword,
    });

    return NextResponse.json(
      { success: true, user: { fullname, email, phone } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
