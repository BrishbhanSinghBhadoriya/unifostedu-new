import mongoose from "mongoose";

const landingFeatureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    iconKey: { type: String, required: true }, // e.g. "FaUserTie"
    color: { type: String, required: true }, // e.g. "from-blue-500 to-teal-600"
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.LandingFeature ||
  mongoose.model("LandingFeature", landingFeatureSchema);


