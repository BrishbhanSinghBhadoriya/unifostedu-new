import mongoose from "mongoose";

const landingCollegeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ranking: { type: String },
    logo: { type: String, required: true },

    location: { type: String },
    fee: { type: String },
    courses: { type: [String] },
    description: { type: String },
    link: { type: String },

    rating: { type: Number, min: 0, max: 5 },
    slug: { type: String },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.models.LandingCollege ||
  mongoose.model("LandingCollege", landingCollegeSchema);


