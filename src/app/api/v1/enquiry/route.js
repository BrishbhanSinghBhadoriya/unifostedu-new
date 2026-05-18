import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import User from '@/models/User';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, mobile, email, location, university, course, ipAddress: clientIp } = body || {};

    // Get client IP address (prefer client-sent IP, fallback to headers)
    const forwarded = request.headers.get('x-forwarded-for');
    const ipAddress = clientIp || (forwarded ? forwarded.split(',')[0] : (request.ip || '127.0.0.1'));

    if (!name || !mobile || !email || !location || !university || !course) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    await connectToDatabase();
    const userEnquiry = await User.create({ 
      name, 
      mobile, 
      email, 
      location, 
      university, 
      course,
      ipAddress 
    });
    return NextResponse.json({ success: true, userEnquiry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


