import mongoose from "mongoose";

const landingCollegeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ranking: { type: String }, // e.g. "NIRF-29"
    feeRange: { type: String }, // e.g. "₹0.99L - ₹3.45L"
    logo: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
    slug: { type: String }, // optional SEO slug
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.LandingCollege ||
  mongoose.model("LandingCollege", landingCollegeSchema);


