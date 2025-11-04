import mongoose from '@/lib/mongoose';

const VideoCallEnquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    city: { type: String, required: true },
    university: { type: String, required: true },
    course: { type: String, required: true },
    preferredDate: { type: Date, required: true },
    preferredTime: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.VideoCallEnquiry || mongoose.model('VideoCallEnquiry', VideoCallEnquirySchema);


