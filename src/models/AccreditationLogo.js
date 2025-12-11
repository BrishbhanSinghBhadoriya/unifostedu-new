import mongoose from "mongoose";

const accreditationLogoSchema = new mongoose.Schema(
  {
    name: { type: String }, // e.g. "UGC"
    imageUrl: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.AccreditationLogo ||
  mongoose.model("AccreditationLogo", accreditationLogoSchema);









