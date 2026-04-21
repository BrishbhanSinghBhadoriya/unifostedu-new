import axios from "axios";

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

    // ✅ API Call
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant for an EdTech website. Answer only about courses, fees, universities, and admissions in India."
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

          // ✅ IMPORTANT (OpenRouter requirement)
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Unifost Chatbot"
        }
      }
    );

    // ✅ Safe response extraction
    const reply =
      response?.data?.choices?.[0]?.message?.content ||
      "No response from AI";

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