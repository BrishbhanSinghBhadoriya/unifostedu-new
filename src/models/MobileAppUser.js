import mongoose from "@/lib/mongoose";
import { Phone } from "lucide-react/dist/cjs/lucide-react";

const MobileAppUserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.MobileAppUser || mongoose.model("MobileAppUser", MobileAppUserSchema);