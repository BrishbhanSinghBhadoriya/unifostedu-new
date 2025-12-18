import mongoose from "mongoose";

const heroSlideSchema = new mongoose.Schema(
  {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    width: { type: Number, default: 1200 },
    height: { type: Number, default: 800 },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.HeroSlide ||
  mongoose.model("HeroSlide", heroSlideSchema);











