import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import User from '@/models/User';
import { leadSyncManager } from '@/lib/leadSync';

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

    console.log('[ENQUIRY API] Received data:', { name, mobile, email, location, university, course });

    if (!name || !mobile || !email || !location || !university || !course) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    // Validate mobile number format
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      return NextResponse.json({ 
        success: false, 
        message: 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9' 
      }, { status: 400 });
    }

    await connectToDatabase();
    console.log('[ENQUIRY API] Database connected successfully');
    
    // Save to database first (most important)
    const userEnquiry = await User.create({ 
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
    console.log('[ENQUIRY API] Lead saved to database:', userEnquiry._id);

    // Sync to all CRM systems
    const leadData = {
      name,
      mobile,
      email,
      location,
      university,
      course
    };

    const syncResult = await leadSyncManager.syncLead(leadData, 'website_form');
    console.log('[ENQUIRY API] CRM sync result:', syncResult);

    return NextResponse.json({ 
      success: true, 
      userEnquiry: {
        id: userEnquiry._id,
        name: userEnquiry.name,
        mobile: userEnquiry.mobile,
        email: userEnquiry.email
      },
      crmSync: {
        success: syncResult.success,
        syncedTo: syncResult.successCount,
        totalEndpoints: syncResult.totalEndpoints
      }
    }, { status: 201 });

  } catch (error) {
    console.error('[ENQUIRY API] Submission Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || 'Internal server error'
    }, { status: 500 });
  }
}


