import axios from "axios";
import courseData from "@/data/courseData.json";
import universityData from "@/data/Universities.json";

export async function POST(req) {
  try {
    const body = await req.json();
    const { message } = body;

    // ✅ Validation
    if (!message || message.trim() === "") {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Support/Contact information from Footer.tsx
    const supportInfo = {
      email: "info@unifostedu.com",
      phone: "+91 7042646766",
      whatsapp: "+91 7042646766",
      address: "Noida, Uttar Pradesh, India",
      workingHours: "10:00 AM to 7:00 PM (Monday to Saturday)"
    };

    // Prepare relevant data context with specializations and support info
    const contextData = {
      courses: courseData,
      universities: universityData.universities.map(u => ({
        name: u.name,
        location: u.location,
        rating: u.rating,
        NIRF: u.NIRF,
        courses: u.courses.map(c => ({
          name: c.label,
          duration: c.duration,
          fees: c.baseFees,
          specializations: c.specializations?.map(s => ({
            name: s.name,
            fees: s.fees
          }))
        }))
      })),
      support: supportInfo
    };

    // Use the AI service with website data context
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              `You are a helpful assistant for Unifost. Review the provided WEBSITE DATA and SUPPORT information below and answer user questions based ONLY on this information.

              IMPORTANT INSTRUCTIONS:
              1. **Fees & Specializations**: When a user asks about a course, ALWAYS check for available specializations and mention them along with their specific fees. Provide detailed fee ranges if available.
              2. **Support & Contact**: If the user asks for contact info, help, or support, ALWAYS provide the phone number ${supportInfo.phone} and email ${supportInfo.email}.
              3. **Accuracy**: If a university or course is not in the data, do not make it up. Say you don't have that information.
              4. **Formatting**: Keep answers friendly and helpful. Replace all asterisks (*) with hyphens (-) in your output.

              WEBSITE DATA & SUPPORT:
              ${JSON.stringify(contextData)}`
          },
          {
            role: "user",
            content: message
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Unifost Chatbot"
        }
      }
    );

    // ✅ Safe response extraction and formatting
    const rawReply =
      response?.data?.choices?.[0]?.message?.content ||
      "No response from AI";
      
    // Replace '*' with '-' as per user request
    const reply = rawReply.replaceAll("*", "-");

    return Response.json({ reply });

  } catch (error) {
    // ✅ Full Debugging
    console.error("===== ERROR START =====");
    console.error("Message:", error.message);
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
    console.error("===== ERROR END =====");

    return Response.json(
      {
        error:
          error.response?.data?.error?.message ||
          error.message ||
          "Internal Server Error"
      },
      { status: 500 }
    );
  }
}
