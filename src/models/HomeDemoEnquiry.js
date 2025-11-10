import mongoose from '@/lib/mongoose';

const HomeDemoEnquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    university: { type: String, required: true },
    program: { type: String, required: true },
    preferredDate: { type: Date, required: true },
    preferredTime: { type: String, required: true },
    fullAddress: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.HomeDemoEnquiry || mongoose.model('HomeDemoEnquiry', HomeDemoEnquirySchema);


