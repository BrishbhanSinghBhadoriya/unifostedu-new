import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";

import HeroSlide from "@/models/HeroSlide";
import LandingCourseCard from "@/models/LandingCourseCard";
import LandingFeature from "@/models/LandingFeature";
import LandingCollege from "@/models/LandingCollege";
import LandingCity from "@/models/LandingCity";
import AccreditationLogo from "@/models/AccreditationLogo";
import UniversityLogo from "@/models/UniversityLogo";
import LandingFAQ from "@/models/LandingFAQ";

export async function GET() {
  try {
    await connectToDatabase();

    const [
      heroSlides,
      courseCards,
      features,
      colleges,
      cities,
      accreditationLogos,
      universityLogos,
      faqs,
    ] = await Promise.all([
      HeroSlide.find({ isActive: true }).sort({ order: 1, createdAt: 1 }),
      LandingCourseCard.find({ isActive: true }).sort({
        order: 1,
        createdAt: 1,
      }),
      LandingFeature.find({ isActive: true }).sort({ order: 1, createdAt: 1 }),
      LandingCollege.find(),
      LandingCity.find({ isActive: true }).sort({ order: 1, createdAt: 1 }),
      AccreditationLogo.find({ isActive: true }).sort({
        order: 1,
        createdAt: 1,
      }),
      UniversityLogo.find({ isActive: true }).sort({
        order: 1,
        createdAt: 1,
      }),
      LandingFAQ.find({ isActive: true }).sort({ order: 1, createdAt: 1 }),
    ]);
    const payload = {
      heroSlides,
      courses: courseCards,
      features,
      colleges,
      cities,
      accreditationLogos,
      universityLogos,
      faqs,
    };

    return NextResponse.json(payload, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching landing data:", error);
    return NextResponse.json(
      { error: "Failed to fetch landing data", details: error.message },
      { status: 500 }
    );
  }
}
