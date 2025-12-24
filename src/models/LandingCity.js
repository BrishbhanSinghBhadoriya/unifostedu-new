import mongoose from "mongoose";

const landingCitySchema = new mongoose.Schema(
  {
    city: { type: String, required: true },
    state: { type: String, required: true },
    img: { type: String, required: true },
    students: { type: String }, // e.g. "25K+"
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.LandingCity ||
  mongoose.model("LandingCity", landingCitySchema);














