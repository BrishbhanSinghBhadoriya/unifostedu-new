import { NextResponse } from 'next/server';
import otpStore from '@/lib/otpStore';

// Helper function
function generateToken(mobile: string) {
  const payload = {
    mobile: mobile,
    timestamp: Date.now()
  };
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

export async function POST(request: Request) {
  try {
    const { mobile, otp } = await request.json();

    console.log(`Verifying OTP for ${mobile}. Provided: ${otp}`);

    // Validate input
    if (!mobile || !otp) {
      return NextResponse.json(
        {
          success: false,
          message: 'Mobile number and OTP required'
        },
        { status: 400 }
      );
    }

    // Check if OTP exists
    if (!otpStore.hasOTP(mobile)) {
      console.log(`⚠ No OTP found in store for ${mobile}. Current keys: ${Array.from(globalThis.otpStoreMapGlobal?.keys() || [])}`);
      return NextResponse.json(
        {
          success: false,
          message: 'No OTP found. Please request a new OTP'
        },
        { status: 400 }
      );
    }

    // Check if expired
    if (otpStore.isExpired(mobile)) {
      console.log(`⚠ OTP expired for ${mobile}`);
      otpStore.deleteOTP(mobile);
      return NextResponse.json(
        {
          success: false,
          message: 'OTP expired. Please request a new one'
        },
        { status: 400 }
      );
    }

    // Check max attempts
    if (otpStore.isMaxAttemptsExceeded(mobile)) {
      console.log(`⚠ Max attempts exceeded for ${mobile}`);
      otpStore.deleteOTP(mobile);
      return NextResponse.json(
        {
          success: false,
          message: 'Maximum attempts exceeded. Request new OTP'
        },
        { status: 400 }
      );
    }

    // Verify OTP
    const verification = otpStore.verifyOTP(mobile, otp);

    if (verification.valid) {
      otpStore.deleteOTP(mobile);
      console.log(`✓ OTP verified successfully for ${mobile}`);

      return NextResponse.json(
        {
          success: true,
          message: 'OTP verified successfully',
          mobile: mobile,
          token: generateToken(mobile)
        },
        { status: 200 }
      );
    } else {
      // Invalid OTP
      const remaining = otpStore.increaseAttempt(mobile);
      console.log(`⚠ Invalid OTP for ${mobile}. Remaining attempts: ${remaining}`);
      return NextResponse.json(
        {
          success: false,
          message: `Invalid OTP. Attempts remaining: ${remaining}`
        },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Verify OTP Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error verifying OTP'
      },
      { status: 500 }
    );
  }
}
