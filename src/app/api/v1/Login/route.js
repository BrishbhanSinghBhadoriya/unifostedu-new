import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import MobileAppUser from "@/models/MobileAppUser";
import { connectToDatabase } from "@/lib/mongoose";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Email and password required" }, { status: 400 });
    }

    await connectToDatabase();

    const user = await MobileAppUser.findOne({ email });
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    }
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );



    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
      },
        token,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
