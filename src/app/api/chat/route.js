import axios from "axios";
import coursesUniversityData from "@/data/coursesuniversity.json";
import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/User";
import { leadSyncManager } from "@/lib/leadSync";

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

    const lowerMessage = message.toLowerCase();

    // --- SERVER-SIDE MOBILE EXTRACTION & VALIDATION (runs FIRST) ---
    const mobileRegex = /^[6-9]\d{9}$/;

    const extractedMobileFromMsg = (() => {
      // Strip spaces, +91 or 91 prefix, then find a 10-digit number starting with 6-9
      const cleaned = message
        .replace(/\s+/g, "")
        .replace(/^\+91/, "")
        .replace(/^91(?=[6-9])/, "");
      const found = cleaned.match(/(?<!\d)([6-9]\d{9})(?!\d)/);
      return found ? found[1] : null;
    })();

    let mobileStatus = "not_provided";
    let validatedMobile = leadData?.mobile || null;

    if (extractedMobileFromMsg) {
      if (mobileRegex.test(extractedMobileFromMsg)) {
        mobileStatus = "valid";
        validatedMobile = extractedMobileFromMsg;
      } else {
        mobileStatus = "invalid";
      }
    } else if (validatedMobile && mobileRegex.test(validatedMobile)) {
      mobileStatus = "already_valid";
    }

    console.log(`[ChatAPI] Mobile status: ${mobileStatus}, extracted: ${extractedMobileFromMsg}, validated: ${validatedMobile}`);

    // --- DATA FILTERING LOGIC ---
    const greetings = ["hi", "hello", "hey", "hii", "good morning", "good afternoon", "good evening", "namaste"];
    const isGreeting = greetings.some(g => lowerMessage.includes(g)) && lowerMessage.length < 20;

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

    const mentionedUniv = filteredUniversities.find(u =>
      lowerMessage.includes(u.university.toLowerCase()) ||
      (u.shortName && lowerMessage.includes(u.shortName.toLowerCase()))
    );

    // --- SMART PRE-FILTERING ---
    // IMPORTANT: Only extract budget if message does NOT contain a mobile number
    // (prevents treating phone digits as budget amount)
    let budgetLimit = null;
    const lakhMatch = lowerMessage.match(/(\d+(\.\d+)?)\s*(lakh|l|lac)/);
    const numericMatch = !extractedMobileFromMsg
      ? lowerMessage.match(/(\d{5,7})/)
      : null;

    if (lakhMatch) {
      budgetLimit = parseFloat(lakhMatch[1]) * 100000;
    } else if (numericMatch) {
      budgetLimit = parseInt(numericMatch[1]);
    }

    let finalContextUniversities = filteredUniversities;

    if (mentionedUniv) {
      finalContextUniversities = [mentionedUniv];
    } else if (budgetLimit) {
      finalContextUniversities = filteredUniversities
        .filter(u => u.courses.some(c => c.min_f <= budgetLimit))
        .map(u => ({
          ...u,
          courses: u.courses.filter(c => c.min_f <= budgetLimit)
        }));
    }

    const contextData = {
      universities: finalContextUniversities.slice(0, 5),
      support: supportInfo,
      isFiltered: !!mentionedUniv || !!budgetLimit,
      budgetLimit: budgetLimit
    };

    console.log(`[ChatAPI] Found ${coursesUniversityData.universities.length} universities. Filtered to: ${contextData.universities.length}`);

    // --- AI MESSAGES ---
    const aiMessages = [
      {
        role: "system",
        content: `You are Prof.Unique, the official Unifost Assistant. You are a professional and helpful directory for university and course data.

           STRICT LEAD CAPTURE STRATEGY (MANDATORY):
           Current Lead Status: ${leadData ? JSON.stringify(leadData) : "No details yet"}

           IMPORTANT - Mobile Number Validation is handled SERVER-SIDE. Do NOT validate mobile numbers yourself.
           Server has already checked the mobile number in this message.
           Mobile Status from Server: "${mobileStatus}"
           ${validatedMobile ? `Validated Mobile: "${validatedMobile}"` : ""}

           RULES:
           1. DO NOT answer any questions about universities, courses, or fees until you have the user's NAME, MOBILE NUMBER, and COURSE.
           2. MOBILE NUMBER:
              - If mobileStatus is "valid" or "already_valid" — the number is CONFIRMED VALID by the server. Accept it without question.
              - If mobileStatus is "invalid" — politely ask for a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.
              - If mobileStatus is "not_provided" — ask the user to share their mobile number.
              - DO NOT re-validate or second-guess the server's mobile status decision.
           3. IF any of these 3 details (Name, Mobile, Course) are missing:
              - Acknowledge the user's message but DO NOT give the answer yet.
              - Ask for the missing details specifically.
           4. ONLY after you have all 3 valid details (Name, Mobile, Course):
              - Provide the answer to their question in a professional format.
              - MANDATORY: Include this exact JSON tag at the VERY END: [SAVE_LEAD: {"name": "...", "mobile": "${validatedMobile || "..."}", "course": "...", "university": "..."}]
              - Use the validated mobile number from the server in the SAVE_LEAD tag.

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
        reply = reply.replace(leadTagRegex, "").trim();

        if (extractedLead.name && extractedLead.mobile && extractedLead.course) {
          // Normalize mobile: strip +91, 91 prefix or spaces
          const normalizedMobile = String(extractedLead.mobile)
            .replace(/\s+/g, "")
            .replace(/^\+91/, "")
            .replace(/^91(?=[6-9])/, "");
          extractedLead.mobile = normalizedMobile;

          if (!mobileRegex.test(extractedLead.mobile)) {
            console.log("[ChatAPI] Invalid mobile in SAVE_LEAD tag:", extractedLead.mobile);
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
              console.log("[ChatAPI] Lead saved to DB:", extractedLead.name, extractedLead.mobile);

              // Sync to all CRM systems using the new lead sync manager
              const syncResult = await leadSyncManager.syncLead(extractedLead, 'website_chatbot');
              console.log('[ChatAPI] CRM sync result:', syncResult);
            } catch (dbErr) {
              console.error("[ChatAPI] DB Save Error:", dbErr.message);
            }
          }
        }
      } catch (e) {
        console.error("[ChatAPI] Failed to parse lead tag:", e.message);
      }
    }

    const enquiryTriggerPhrase = "enquiry form";
    const shouldOpenEnquiry =
      reply.toLowerCase().includes(enquiryTriggerPhrase) ||
      reply.includes("Would you like to speak with one of our expert counselors");

    return Response.json({
      reply,
      openEnquiry: shouldOpenEnquiry,
      leadData: extractedLead
    });

  } catch (error) {
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
