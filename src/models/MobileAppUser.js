import mongoose from "@/lib/mongoose";
import { Phone } from "lucide-react/dist/cjs/lucide-react";

const MobileAppUserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    Phone: { type: String, required: true },
    pasword: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.MobileAppUser || mongoose.model("MobileAppUser", MobileAppUserSchema);