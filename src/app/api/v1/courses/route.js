import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import CourseModel from "@/models/CourseModel";

export async function GET() {
    try {
      await connectToDatabase();
  
      const programs = await CourseModel.find({});


  
      return NextResponse.json(programs, { status: 200 , message:"Course data fetch successfully !" });
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to fetch data",error: error.message },
        { status: 500 }
      );
    }
  }

