import axios from "axios";
import coursesUniversityData from "@/data/coursesuniversity.json";
import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/User";

export async function POST(req) {
  try {
    const body = await req.json();
    const { message, leadData, history = [] } = body;

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
    const aiMessages = [
      {
        role: "system",
        content: `You are Prof.Unique, the official Unifost Assistant. You are a professional and helpful directory for university and course data.

           STRICT LEAD CAPTURE STRATEGY (MANDATORY):
           Current Lead Status: ${leadData ? JSON.stringify(leadData) : "No details yet"}

           1. DO NOT answer any questions about universities, courses, or fees until you have the user's NAME, MOBILE NUMBER, and COURSE.
           2. MOBILE NUMBER VALIDATION: 
              - The mobile number MUST be exactly 10 digits long.
              - It MUST start with 6, 7, 8, or 9.
              - IF the user provides an invalid number (e.g., '12345', '0987654321', or 11 digits), politely inform them that the mobile number is invalid and ask for a valid 10-digit Indian mobile number.
           3. IF any of these 3 details (Name, Mobile, Course) are missing or invalid:
              - Acknowledge the user's message but DO NOT give the answer yet.
              - Politely explain that to provide accurate and personalized guidance, you need their Name, valid Mobile Number, and the Course they are interested in.
              - Ask for the missing/valid details specifically.
           4. ONLY after you have all 3 valid details (Name, Mobile, Course):
              - Provide the answer to their question in a professional format.
              - MANDATORY: Include this exact JSON tag at the VERY END: [SAVE_LEAD: {"name": "...", "mobile": "...", "course": "...", "university": "..."}]
              - Replace "..." with the actual details.

           RESPONSE FORMATTING:
           - Use '# [Title]' for main headings.
           - Use '## [Subheading]' for sub-sections.
           - Use bullet points and bold labels (**Fees:**, **Duration:**).
           - Tone: Professional, academic, and very helpful.

          UNIFOST INFO:
          ${JSON.stringify(unifostInfo)}

          UNIVERSITY DATA:
          ${JSON.stringify(contextData)}`
      },
      ...history.slice(-5).map(msg => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text
      })),
      {
        role: "user",
        content: message
      }
    ];

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: aiMessages
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
          // Mobile Validation: 10 digits and starts with 6,7,8,9
          const mobileRegex = /^[6-9]\d{9}$/;
          if (!mobileRegex.test(extractedLead.mobile)) {
            console.log("[ChatAPI] Invalid mobile format extracted:", extractedLead.mobile);
            // We don't save but the AI will be instructed by the prompt to re-ask in next turn
          } else {
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
