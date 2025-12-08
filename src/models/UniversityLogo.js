import mongoose from "mongoose";

const universityLogoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    slug: { type: String }, // e.g. "amity-university-online"
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.UniversityLogo ||
  mongoose.model("UniversityLogo", universityLogoSchema);




