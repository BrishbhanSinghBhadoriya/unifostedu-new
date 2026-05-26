import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import HomeDemoEnquiry from '@/models/HomeDemoEnquiry';
import axios from 'axios';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, city, university, program, preferredDate, preferredTime, fullAddress, message } = body || {};

    if (!name || !email || !phone || !city || !university || !program || !preferredDate || !preferredTime || !fullAddress) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    await connectToDatabase();
    
    // Save to DB
    const dbPromise = HomeDemoEnquiry.create({ name, email, phone, city, university, program, preferredDate, preferredTime, fullAddress, message });

    // Send to New CRM
    const crmPromise = process.env.CRM_API_URL ? axios.post(
      process.env.CRM_API_URL,
      {
        name,
        phone,
        email: email || "",
        source: "website",
        city: city || "",
        notes: `Home Demo - University: ${university}, Program: ${program}, Date: ${preferredDate}, Time: ${preferredTime}, Address: ${fullAddress}, Message: ${message || ""}`
      },
      { headers: { "Content-Type": "application/json" } }
    ).catch(err => {
      console.error('CRM Sync Error (Home Demo):', err.message);
      return null;
    }) : Promise.resolve(null);

    const [homeDemoEnquiry] = await Promise.all([dbPromise, crmPromise]);

    return NextResponse.json({ success: true, homeDemoEnquiry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


