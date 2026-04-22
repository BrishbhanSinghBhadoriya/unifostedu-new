import axios from "axios";
import coursesUniversityData from "@/data/coursesuniversity.json";

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

    // Support/Contact information
    const supportInfo = {
      email: "info@unifostedu.com",
      phone: "+91 7042646766",
      whatsapp: "+91 7042646766",
      address: "Noida, Uttar Pradesh, India",
      workingHours: "10:00 AM to 7:00 PM (Monday to Saturday)"
    };

    // --- DATA FILTERING LOGIC ---
    // Extract search terms (lowercased)
    const lowerMessage = message.toLowerCase();
    
    // Filter universities based on the user's query to stay within optimal prompt limits
    let filteredUniversities = coursesUniversityData.universities.map(u => ({
      university: u.universityName,
      shortName: u.shortName,
      courses: [
        ...(u.undergraduateCourses || []).map(c => ({ 
          n: c.courseName, 
          s: c.specializations?.join(", "),
          f: c.fees?.display 
        })),
        ...(u.postgraduateCourses || []).map(c => ({ 
          n: c.courseName, 
          s: c.specializations?.join(", "),
          f: c.fees?.display 
        }))
      ]
    }));

    // If message mentions a specific university, we prioritize its data
    const mentionedUniv = filteredUniversities.find(u => 
      lowerMessage.includes(u.university.toLowerCase()) || 
      (u.shortName && lowerMessage.includes(u.shortName.toLowerCase()))
    );

    // If we found a specific university, we can be much more precise
    const contextData = {
      universities: mentionedUniv ? [mentionedUniv] : filteredUniversities,
      support: supportInfo,
      isFiltered: !!mentionedUniv
    };

    console.log(`[ChatAPI] Found ${coursesUniversityData.universities.length} universities. Filtered to: ${contextData.universities.length}`);

    // Use the AI service with high-precision instructions
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              `You are the official Unifost Assistant. You are a precise directory for university and course data. 

              STRICT RESPONSE RULES:
              1. **Search Logic**: 
                 - If the user asks about a UNIVERSITY, list ALL their courses in a clear bulleted list.
                 - If the user asks for a COURSE (e.g., "MBA", "BCA", "MA"), list every university that offers it.
                 - If the user asks for a SPECIALIZATION (e.g., "AI", "Data Science", "HR"), find and list the relevant courses and universities.
              2. **Format**: ONLY output in this format: "- [Course Name] - [University Name]".
              3. **No Extras**: Do not give overviews, eligibility, or summaries unless specifically asked.
              4. **Fees**: Only mention fees (using the 'f' field) if the user asks "How much is the fee?".
              5. **Flexibility**: The user may use short names (like CU, AUO, VGU). Match them carefully.
              6. **Accuracy**: If a university/course is not in the list, say "Sorry, I don't have information for that in my current database."
              7. **Support**: Only provide ${supportInfo.phone} and ${supportInfo.email} if asked.
              8. **Cleanup**: Always replace all '*' with '-' in your final response.

              WEBSITE DATA:
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
          "X-Title": "Unifost Precision Search bot"
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
