import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import User from '@/models/User';
import axios from 'axios';

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      mobile, 
      email, 
      location, 
      university, 
      course, 
      ipAddress: clientIp,
      userAgent: clientUserAgent,
      referer: clientReferer,
      origin: clientOrigin
    } = body || {};

    // Get tracking data (prefer client-sent data, fallback to headers)
    const forwarded = request.headers.get('x-forwarded-for');
    const ipAddress = clientIp || (forwarded ? forwarded.split(',')[0] : (request.ip || '127.0.0.1'));
    const userAgent = clientUserAgent || request.headers.get('user-agent') || 'Unknown';
    const referer = clientReferer || request.headers.get('referer') || 'Direct';
    const origin = clientOrigin || request.headers.get('origin') || 'Unknown';

    if (!name || !mobile || !email || !location || !university || !course) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    await connectToDatabase();
    
    // Save to database
    const dbPromise = User.create({ 
      name, 
      mobile, 
      email, 
      location, 
      university, 
      course,
      ipAddress,
      userAgent,
      referer,
      origin
    });

    // Send to NeoDove (External API)
    const neoDovePromise = axios.post(
      "https://25515469-e21f-48a6-93fb-91446641fcda.neodove.com/integration/custom/4fa16adb-e429-4417-a5ba-fc6f77e3fea3/leads",
      { name, mobile, email, location, university, course },
      { headers: { "Content-Type": "application/json" } }
    ).catch(err => {
      console.error('NeoDove Error:', err.message);
      return null; // Don't fail the whole request if NeoDove fails
    });

    // Wait for both to start/finish but respond as soon as DB is done or in parallel
    const [userEnquiry] = await Promise.all([dbPromise, neoDovePromise]);

    return NextResponse.json({ success: true, userEnquiry }, { status: 201 });
  } catch (error) {
    console.error('Enquiry Submission Error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


