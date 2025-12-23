import mongoose from "mongoose";

const landingFAQSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    category: { type: String, default: "landing" },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.LandingFAQ ||
  mongoose.model("LandingFAQ", landingFAQSchema);














