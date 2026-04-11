import { NextResponse } from 'next/server';
import axios from 'axios';
import otpStore from '@/lib/otpStore';

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function isValidIndianMobile(mobile: string) {
  return /^[6-9]\d{9}$/.test(mobile);
}

async function sendSMS(phoneNumber: string, otp: string) {
  try {
    const apiKey = process.env.FAST2SMS_API_KEY;
    
    if (!apiKey) {
      console.error('⚠ FAST2SMS_API_KEY is missing in .env file!');
      return false;
    }

    const message = `Your Unifost OTP is ${otp}. Please do not share it with anyone.`;
    console.log(`[Fast2SMS] Sending OTP to ${phoneNumber} using 'q' (Quick SMS) route...`);
    
    // Using Fast2SMS 'q' (Quick SMS) route as a workaround for Error 996 (Website Verification Required)
    const response = await axios.get(
      'https://www.fast2sms.com/dev/bulkV2',
      {
        params: {
          authorization: apiKey,
          route: 'q',
          message: message,
          numbers: phoneNumber
        }
      }
    );
    
    console.log('Fast2SMS Response:', JSON.stringify(response.data, null, 2));
    
    if (response.data.return === true) {
      return true;
    } else {
      // Handle the case where the route might be unavailable or balance is zero
      console.warn('Fast2SMS failed to send:', response.data.message);
      return false;
    }
  } catch (error: any) {
    if (error.response) {
      console.error('Fast2SMS Error Response:', JSON.stringify(error.response.data, null, 2));
      // If error is 996, it's definitely website verification
      if (error.response.data.status_code === 996) {
        console.error('CRITICAL: Fast2SMS Website Verification (KYC) is required for the OTP route.');
      }
    } else {
      console.error('SMS Error:', error.message);
    }
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const { mobile } = await request.json();

    // Validate mobile number
    if (!mobile || !isValidIndianMobile(mobile)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid mobile number. Must be 10 digits starting with 6-9'
        },
        { status: 400 }
      );
    }

    // Generate OTP
    const otp = generateOTP();

    // Store OTP
    console.log(`[API] Storing OTP ${otp} for ${mobile}`);
    otpStore.setOTP(mobile, otp);

    // Send SMS (non-blocking)
    sendSMS(mobile, otp).then(sent => {
      if (sent) {
        console.log(`✓ OTP ${otp} sent to ${mobile}`);
      } else {
        console.log(`⚠ SMS failed but OTP stored in memory: ${otp}`);
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: 'OTP sent successfully',
        mobile: mobile
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Send OTP Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error sending OTP'
      },
      { status: 500 }
    );
  }
}
