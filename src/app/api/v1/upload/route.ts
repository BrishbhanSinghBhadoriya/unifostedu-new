import { NextResponse } from "next/server";
import cloudinary from "../config/cloudinary";
import { Readable } from "stream";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    
    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      console.error("Missing Cloudinary credentials");
      return NextResponse.json(
        { error: "Server Configuration Error: Missing Cloudinary credentials" },
        { status: 500 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadResult: any = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "auto", folder: "unifost/cv" },
        (error: any, result: any) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      Readable.from(buffer).pipe(stream);
    });

    return NextResponse.json({ url: uploadResult.secure_url });
  } catch (err) {
    console.error("CV upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
