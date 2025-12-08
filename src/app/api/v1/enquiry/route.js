import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import User from '@/models/User';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, mobile, email, location, university, course  } = body || {};

    if (!name || !mobile || !email || !location || !university || !course ) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    await connectToDatabase();
    const userEnquiry = await User.create({ name, mobile, email, location, university, course});
    return NextResponse.json({ success: true, userEnquiry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


