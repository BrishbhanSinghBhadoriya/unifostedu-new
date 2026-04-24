import axios from "axios";
import coursesUniversityData from "@/data/coursesuniversity.json";
import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/User";

export async function POST(req) {
  try {
    const body = await req.json();
    const { message, leadData } = body;

    //  Validation
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

    // Unifost Company Information
    const unifostInfo = {
      name: "Unifost Education",
      tagline: "Your Trusted Partner for Online University Education",
      about: "Unifost Education is a premier educational consultancy that helps students find the best online university programs across India. We provide free counseling and admission assistance for various undergraduate and postgraduate courses.",
      services: [
        "Free Career Counseling",
        "University Selection Guidance", 
        "Admission Assistance",
        "Course Comparison",
        "Scholarship Information"
      ],
      contact: {
        email: "info@unifostedu.com",
        phone: "+91 7042646766",
        whatsapp: "+91 7042646766",
        website: "www.unifostedu.com"
      }
    };

    // --- DATA FILTERING LOGIC ---
    // Extract search terms (lowercased)
    const lowerMessage = message.toLowerCase();

    // Check for greetings
    const greetings = ["hi", "hello", "hey", "hii", "good morning", "good afternoon", "good evening", "namaste"];
    const isGreeting = greetings.some(g => lowerMessage.includes(g)) && lowerMessage.length < 20;

    // Filter universities based on the user's query to stay within optimal prompt limits
    let filteredUniversities = coursesUniversityData.universities.map(u => ({
      university: u.universityName,
      shortName: u.shortName,
      courses: [
        ...(u.undergraduateCourses || []).map(c => ({ 
          n: c.courseName, 
          s: c.specializations?.join(", "),
          f: c.fees?.display,
          min_f: c.fees?.min,
          max_f: c.fees?.max,
          d: c.duration,
          e: c.eligibility
        })),
        ...(u.postgraduateCourses || []).map(c => ({ 
          n: c.courseName, 
          s: c.specializations?.join(", "),
          f: c.fees?.display,
          min_f: c.fees?.min,
          max_f: c.fees?.max,
          d: c.duration,
          e: c.eligibility
        }))
      ]
    }));

    // If message mentions a specific university, we prioritize its data
    const mentionedUniv = filteredUniversities.find(u => 
      lowerMessage.includes(u.university.toLowerCase()) || 
      (u.shortName && lowerMessage.includes(u.shortName.toLowerCase()))
    );

    // --- SMART PRE-FILTERING ---
    // Extract budget from message (e.g., "under 2 lakhs", "budget 1.5L", "200000")
    let budgetLimit = null;
    const lakhMatch = lowerMessage.match(/(\d+(\.\d+)?)\s*(lakh|l|lac)/);
    const numericMatch = lowerMessage.match(/(\d{5,7})/);

    if (lakhMatch) {
      budgetLimit = parseFloat(lakhMatch[1]) * 100000;
    } else if (numericMatch) {
      budgetLimit = parseInt(numericMatch[1]);
    }

    let finalContextUniversities = filteredUniversities;

    if (mentionedUniv) {
      finalContextUniversities = [mentionedUniv];
    } else if (budgetLimit) {
      // Filter universities that have at least one course within the budget
      finalContextUniversities = filteredUniversities.filter(u => 
        u.courses.some(c => c.min_f <= budgetLimit)
      ).map(u => ({
        ...u,
        // Only include courses within the budget to save tokens
        courses: u.courses.filter(c => c.min_f <= budgetLimit)
      }));
    }

    // If we found a specific university or have a budget filter, we can be much more precise
    const contextData = {
      universities: finalContextUniversities.slice(0, 5), // Limit to top 5 to avoid token limits
      support: supportInfo,
      isFiltered: !!mentionedUniv || !!budgetLimit,
      budgetLimit: budgetLimit
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
              `You are Prof.Unique, the official Unifost Assistant. You are a professional and helpful directory for university and course data.
               
               FORMAL INTRODUCTION & LEAD CAPTURE:
               Current Lead Status: ${leadData ? JSON.stringify(leadData) : "No details yet"}
               
               1. If the user hasn't shared their Name, Mobile Number, and Course yet:
                  - Greet them warmly.
                  - Politely ask for the missing details (Name, Mobile, or Course).
                  - Explain that this helps in providing personalized guidance.
               2. Once you have all three details (Name, Mobile, and Course):
                  - Acknowledge them politely.
                  - MANDATORY: You MUST include this exact JSON tag at the VERY END of your response: [SAVE_LEAD: {"name": "...", "mobile": "...", "course": "...", "university": "..."}]
                  - Replace "..." with the actual details. If they mentioned a specific university, capture it. If not, use "Unifost Consultation".
               
               STRICT RESPONSE RULES:
               1. **Knowledge Scope**: 
                  - ALWAYS prioritize the provided UNIVERSITY DATA for questions about specific universities, courses, fees, or specializations.
                  - When providing university/course details, be very specific about fees, duration, and eligibility from the DATA.
                  - **Fee Ranges**: If a user asks for a fee range (e.g., "courses under 2 Lakhs", "budget 1.5L", etc.), filter the DATA using 'min_f' and 'max_f' values and show all matching universities and courses.
                  - **Fee Categorization**: Instead of just showing the exact fee, categorize courses into ranges. For example, if a course fee is ₹1,00,000, mention it falls in the "₹70K - ₹1.3L" range or similar logical buckets.
                  - If a user asks about Unifost (who we are, about us, services, etc.), use the UNIFOST INFO below.
                  - If a user asks a general question (e.g., "What is the capital of India?", "How to prepare for exams?", etc.), answer it professionally using your general knowledge (like a Google search result).
                  - If you genuinely cannot answer a question, say: "I'm not sure about that. Would you like to speak with one of our expert counselors? Please fill out the enquiry form and we'll help you."
               2. **Greetings**: If the user says hi/hello/etc, greet them warmly and ask for their details (Name, Mobile, Course) if not already provided.
               3. **About Unifost**: When asked about Unifost, provide this info:
                  - Name: ${unifostInfo.name}
                  - Tagline: ${unifostInfo.tagline}
                  - About: ${unifostInfo.about}
                  - Services: ${unifostInfo.services.join(", ")}
                  - Contact: Email: ${unifostInfo.contact.email}, Phone: ${unifostInfo.contact.phone}, WhatsApp: ${unifostInfo.contact.whatsapp}
               4. **Formatting**: Structure your response professionally using Markdown headers:
                  - Use '# [Title]' for main headings (Large size).
                  - Use '## [Subheading]' for sub-sections (Medium size).
                  - Use bullet points for lists.
                  - Use bold for labels like **Budget Range:**, **Fees:**, **Duration:**, **Answer:**.
               5. **Content**: 
                  - For university queries: Provide detailed info including **University Name**, **Course**, **Fees**, **Duration**, and **Eligibility** from the DATA.
                  - For range queries: List all universities and their specific courses that fall within the user's mentioned budget. Use the 'min_f' and 'max_f' fields for accuracy.
                  - For general queries: Provide a clear, accurate, and professional answer based on general knowledge.
                  - For Unifost queries: Answer using the UNIFOST INFO provided.
               6. **Professionalism**: Ensure the tone is academic, helpful, and polite. Use clear spacing between sections.
               7. **Support**: Provide ${supportInfo.phone} and ${supportInfo.email} if asked for contact/support or if you cannot answer.

              UNIFOST INFO:
              ${JSON.stringify(unifostInfo)}

              UNIVERSITY DATA:
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
    let reply =
      response?.data?.choices?.[0]?.message?.content ||
      "No response from AI";

    // --- LEAD EXTRACTION FROM AI REPLY ---
    let extractedLead = null;
    const leadTagRegex = /\[SAVE_LEAD:\s*(\{.*?\})\]/;
    const match = reply.match(leadTagRegex);
    if (match) {
      try {
        extractedLead = JSON.parse(match[1]);
        // Clean up the reply by removing the tag
        reply = reply.replace(leadTagRegex, "").trim();

        // --- DIRECT DATABASE SAVE ---
        if (extractedLead.name && extractedLead.mobile && extractedLead.course) {
          try {
            await connectToDatabase();
            await User.create({
              name: extractedLead.name,
              mobile: extractedLead.mobile,
              email: extractedLead.email || `lead_${Date.now()}@unifost.com`,
              location: "Website Chatbot",
              university: extractedLead.university || "Direct Inquiry",
              course: extractedLead.course
            });
            console.log("[ChatAPI] Lead saved directly to DB:", extractedLead.name);
          } catch (dbErr) {
            console.error("[ChatAPI] DB Save Error:", dbErr.message);
          }
        }
      } catch (e) {
        console.error("[ChatAPI] Failed to parse lead tag:", e.message);
      }
    }

    // Check if the reply contains the enquiry form trigger phrase
    const enquiryTriggerPhrase = "enquiry form";
    const shouldOpenEnquiry = reply.toLowerCase().includes(enquiryTriggerPhrase) || 
                              reply.includes("Would you like to speak with one of our expert counselors");

    return Response.json({ 
      reply,
      openEnquiry: shouldOpenEnquiry,
      leadData: extractedLead
    });

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
