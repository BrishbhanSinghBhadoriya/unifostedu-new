// lib/otpStore.js

class OTPStore {
  constructor() {
    this.store = new Map();
    this.OTP_EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes
  }

  generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  setOTP(mobile, otp) {
    this.store.set(mobile, {
      otp: otp,
      timestamp: Date.now(),
      attempts: 0
    });
  }

  getOTP(mobile) {
    return this.store.get(mobile);
  }

  deleteOTP(mobile) {
    this.store.delete(mobile);
  }

  hasOTP(mobile) {
    return this.store.has(mobile);
  }

  isExpired(mobile) {
    const data = this.store.get(mobile);
    if (!data) return true;
    return Date.now() > data.timestamp + this.OTP_EXPIRY_TIME;
  }

  increaseAttempt(mobile) {
    const data = this.store.get(mobile);
    if (data) {
      data.attempts++;
      return 5 - data.attempts; // Return remaining attempts
    }
    return 0;
  }

  isMaxAttemptsExceeded(mobile) {
    const data = this.store.get(mobile);
    return data && data.attempts >= 5;
  }

  verifyOTP(mobile, otp) {
    const data = this.store.get(mobile);
    if (!data) return { valid: false, reason: 'NOT_FOUND' };
    if (this.isExpired(mobile)) return { valid: false, reason: 'EXPIRED' };
    if (this.isMaxAttemptsExceeded(mobile)) return { valid: false, reason: 'MAX_ATTEMPTS' };
    if (data.otp === otp) return { valid: true, reason: 'SUCCESS' };
    return { valid: false, reason: 'INVALID' };
  }

  clear() {
    this.store.clear();
  }
}

// Create singleton instance
const otpStore = new OTPStore();

export default otpStore;