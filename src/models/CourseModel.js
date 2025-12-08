import mongoose from "mongoose";

const universitySchema = new mongoose.Schema({
  name: String,
  location: String,
  NIRF: String,
  rating: Number,
  image: String,
  specializations: Array,
  fee: String,
  duration: String,
  accreditation: String,
});

const courseSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    description: String,
    duration: String,
    fee: String,
    eligibility: String,
    features: [String],
    universities: [universitySchema],
  },
  { timestamps: true }
);

// Reuse existing model in dev (hot-reload safe)
export default mongoose.models.Course || mongoose.model("Course", courseSchema);
