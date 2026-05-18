import mongoose from '@/lib/mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true},
    email: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    university: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
    ipAddress: { type: String, trim: true },
    userAgent: { type: String, trim: true },
    referer: { type: String, trim: true },
    origin: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);


