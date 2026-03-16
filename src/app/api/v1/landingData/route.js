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
      HeroSlide.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).catch(() => []),
      LandingCourseCard.find({ isActive: true }).sort({
        order: 1,
        createdAt: 1,
      }).catch(() => []),
      LandingFeature.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).catch(() => []),
      LandingCollege.find().catch(() => []),
      LandingCity.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).catch(() => []),
      AccreditationLogo.find({ isActive: true }).sort({
        order: 1,
        createdAt: 1,
      }).catch(() => []),
      UniversityLogo.find({ isActive: true }).sort({
        order: 1,
        createdAt: 1,
      }).catch(() => []),
      LandingFAQ.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).catch(() => []),
    ]);

    const payload = {
      heroSlides: heroSlides.length ? heroSlides : getFallbackHeroSlides(),
      courses: courseCards,
      features: features.length ? features : getFallbackFeatures(),
      colleges,
      cities,
      accreditationLogos: accreditationLogos.length ? accreditationLogos : getFallbackAccreditations(),
      universityLogos,
      faqs,
    };

    return NextResponse.json(payload, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching landing data:", error);
    return NextResponse.json(
      { 
        heroSlides: getFallbackHeroSlides(),
        courses: [],
        features: getFallbackFeatures(),
        colleges: [],
        cities: [],
        accreditationLogos: getFallbackAccreditations(),
        universityLogos: [],
        faqs: [],
        error: "Fallback data used due to server error" 
      },
      { status: 200 }
    );
  }
}

function getFallbackHeroSlides() {
  return [
    {
      src: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327358/lpu3_mzvr6y.webp",
      title: "Explore Your Future with Unifost",
      subtitle: "India's Best Online University Degree Guidance",
      description: "Your journey to professional excellence starts here.",
      ctaText: "Apply Now",
      ctaLink: "/compare",
      isActive: true
    }
  ];
}

function getFallbackAccreditations() {
  return [
    { _id: "a1", name: "UGC Approved", imageUrl: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp" },
    { _id: "a2", name: "AICTE Recognized", imageUrl: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp" },
    { _id: "a3", name: "NAAC A+", imageUrl: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763124771/NAAC-A_g3pb34.webp" },
    { _id: "a4", name: "NIRF Ranked", imageUrl: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp" }
  ];
}

function getFallbackFeatures() {
  return [
    {
      _id: "f1",
      title: "Expert Counseling",
      description: "Get personalized guidance from our experienced career experts.",
      iconKey: "FaCompass",
      color: "from-blue-500 to-cyan-500",
      isActive: true
    },
    {
      _id: "f2",
      title: "Top Universities",
      description: "Partnered with India's most prestigious online universities.",
      iconKey: "FaBuildingColumns",
      color: "from-indigo-500 to-purple-500",
      isActive: true
    }
  ];
}
