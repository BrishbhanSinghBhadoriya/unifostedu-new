import mongoose from "mongoose";

// Landing page course cards (MBA Online, BBA Online, etc.)
const landingCourseCardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // e.g. "MBA Online"
    desc: { type: String, required: true },
    tag: { type: String }, // e.g. "Popular"
    iconKey: { type: String, required: true }, // e.g. "FaGraduationCap" (map to react-icon on frontend)
    duration: { type: String, required: true }, // e.g. "2 Years"
    level: {
      type: String,
      enum: ["UG", "PG", "OTHER"],
      default: "OTHER",
    }, // replaces students field
    color: { type: String, required: true }, // tailwind gradient class like "from-blue-500 to-purple-600"
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.LandingCourseCard ||
  mongoose.model("LandingCourseCard", landingCourseCardSchema);


