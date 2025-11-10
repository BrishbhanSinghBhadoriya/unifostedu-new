import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import VideoCallEnquiry from '@/models/VideoCallEnquiry';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, city, university, course, preferredDate, preferredTime, message } = body || {};

    if (!name || !email || !phone || !city || !university || !course || !preferredDate || !preferredTime) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    await connectToDatabase();
    const videoCallEnquiry = await VideoCallEnquiry.create({ name, email, phone, city, university, course, preferredDate, preferredTime, message });
    return NextResponse.json({ success: true, videoCallEnquiry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


