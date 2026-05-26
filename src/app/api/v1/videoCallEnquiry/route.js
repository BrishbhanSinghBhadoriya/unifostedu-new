import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import VideoCallEnquiry from '@/models/VideoCallEnquiry';
import axios from 'axios';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, city, university, course, preferredDate, preferredTime, message } = body || {};

    if (!name || !email || !phone || !city || !university || !course || !preferredDate || !preferredTime) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    await connectToDatabase();
    
    // Save to DB
    const dbPromise = VideoCallEnquiry.create({ name, email, phone, city, university, course, preferredDate, preferredTime, message });

    // Send to New CRM
    const crmPromise = process.env.CRM_API_URL ? axios.post(
      process.env.CRM_API_URL,
      {
        name,
        phone,
        email: email || "",
        source: "website",
        city: city || "",
        notes: `Video Call - University: ${university}, Course: ${course}, Date: ${preferredDate}, Time: ${preferredTime}, Message: ${message || ""}`
      },
      { headers: { "Content-Type": "application/json" } }
    ).catch(err => {
      console.error('CRM Sync Error (Video Call):', err.message);
      return null;
    }) : Promise.resolve(null);

    const [videoCallEnquiry] = await Promise.all([dbPromise, crmPromise]);

    return NextResponse.json({ success: true, videoCallEnquiry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


