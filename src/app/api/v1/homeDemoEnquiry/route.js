import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import HomeDemoEnquiry from '@/models/HomeDemoEnquiry';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, city, university, program, preferredDate, preferredTime, fullAddress, message } = body || {};

    if (!name || !email || !phone || !city || !university || !program || !preferredDate || !preferredTime || !fullAddress) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    await connectToDatabase();
    const homeDemoEnquiry = await HomeDemoEnquiry.create({ name, email, phone, city, university, program, preferredDate, preferredTime, fullAddress, message });
    return NextResponse.json({ success: true, homeDemoEnquiry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


