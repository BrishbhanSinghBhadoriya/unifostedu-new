interface OTPData {
  otp: string;
  timestamp: number;
  attempts: number;
}

// Global variable to ensure persistence across Hot Module Replacement (HMR) in Next.js development mode
declare global {
  var otpStoreMapGlobal: Map<string, OTPData> | undefined;
}

const otpStoreMap = globalThis.otpStoreMapGlobal || new Map<string, OTPData>();

if (process.env.NODE_ENV !== 'production') {
  globalThis.otpStoreMapGlobal = otpStoreMap;
}

const OTP_EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes
const MAX_ATTEMPTS = 3;

const otpStore = {
  setOTP: (mobile: string, otp: string) => {
    console.log(`[otpStore] Storing OTP for ${mobile}: ${otp}`);
    otpStoreMap.set(mobile, {
      otp,
      timestamp: Date.now(),
      attempts: 0
    });
  },
  
  hasOTP: (mobile: string) => {
    const exists = otpStoreMap.has(mobile);
    console.log(`[otpStore] Checking if OTP exists for ${mobile}: ${exists}`);
    return exists;
  },
  
  isExpired: (mobile: string) => {
    const data = otpStoreMap.get(mobile);
    if (!data) return true;
    const expired = Date.now() - data.timestamp > OTP_EXPIRY_TIME;
    if (expired) console.log(`[otpStore] OTP expired for ${mobile}`);
    return expired;
  },
  
  isMaxAttemptsExceeded: (mobile: string) => {
    const data = otpStoreMap.get(mobile);
    if (!data) return false;
    return data.attempts >= MAX_ATTEMPTS;
  },
  
  verifyOTP: (mobile: string, otp: string) => {
    const data = otpStoreMap.get(mobile);
    if (!data) {
      console.log(`[otpStore] No data found for ${mobile}`);
      return { valid: false };
    }
    const isValid = data.otp === otp;
    console.log(`[otpStore] Verifying for ${mobile}. Expected: ${data.otp}, Provided: ${otp}. Result: ${isValid}`);
    return { valid: isValid };
  },
  
  increaseAttempt: (mobile: string) => {
    const data = otpStoreMap.get(mobile);
    if (data) {
      data.attempts += 1;
      otpStoreMap.set(mobile, data);
      return MAX_ATTEMPTS - data.attempts;
    }
    return 0;
  },
  
  deleteOTP: (mobile: string) => {
    console.log(`[otpStore] Deleting OTP for ${mobile}`);
    otpStoreMap.delete(mobile);
  }
};

export default otpStore;
